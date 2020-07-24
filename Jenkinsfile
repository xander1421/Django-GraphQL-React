pipeline {
    agent {
        label 'Internship_Slave'
    }
    options {
        disableConcurrentBuilds()
    }
    environment {
        APP_NAME = 'dotnetapp'
        SONAR_APP_NAME = 'DotNetAPP'
        REPO = '315727832121.dkr.ecr.us-east-1.amazonaws.com/javadotnetintern'
        HOSTNAME='http:\\/\\/a71b4604408f041d199cfa400556d605-426011318.us-east-1.elb.amazonaws.com'
        IMAGE_URL='315727832121.dkr.ecr.us-east-1.amazonaws.com\\/javadotnetintern:dotnetapp-'
        NAMESPACE='dotnet-qa'
        NODEPORT='30100'
        SONAR_DATA=''
        SONAR_GATE_RESULT='Didnt scan'
        COMMIT_MESSAGE=''
        COMMIT_AUTHOR=''
        IMAGE_SIZE='0'
        BUILD_NUMBER=''
        BUILD_DURATION=''
    }

    stages {
        stage('Get GIT info') {
            steps {
                echo 'GIT INFO:'
                script {
                    COMMIT_ID = sh(returnStdout: true, script: "git rev-parse --short HEAD").trim()
                    COMMIT_AUTHOR = sh(returnStdout: true, script: "git log -1 --pretty=format:'%ae'")
                    COMMIT_MESSAGE = sh(returnStdout: true, script: "git log -1 --pretty=%B")
                    GIT_BRANCH_NAME= "${env.BRANCH_NAME}"
                    IMAGE = env.IMAGE_URL + COMMIT_ID
                    echo "${IMAGE}"
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                withCredentials([file(credentialsId: '2c423149-e95a-4fb4-a569-971c65fb242d', variable: 'cert')]) {
                    sh "yes | cp -rf ${cert} certificates.tar"
                }
                script {
                    withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN'),
                                    string(credentialsId: 'BLACKDUCK_TOKEN', variable: 'BLACKDUCK_TOKEN')]) {
                        docker.build("${APP_NAME}:${COMMIT_ID}","--build-arg COMMIT_ID=${COMMIT_ID} --build-arg SONAR_APP_NAME=${SONAR_APP_NAME} --build-arg APP_NAME=${APP_NAME} --build-arg SONAR_APP_VERSION=${COMMIT_ID} --build-arg BLACKDUCK_TOKEN=${BLACKDUCK_TOKEN} --build-arg SONAR_TOKEN=${SONAR_TOKEN} --no-cache .")
                        sh "docker run --label description=dotnet --entrypoint cat ${APP_NAME}:${COMMIT_ID} /merchant_portal/report-task.txt > report-task.txt"
                    }
                }
            }
        }
        stage('SonarQube analysis') {
            steps{
                script{
                    withSonarQubeEnv('New Sonar Endava (for .NET)') {
                    }
                }
            }
        }

        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            SONAR_GATE_RESULT = "FAILURE"
                            currentBuild.result = 'UNSTABLE'
                            echo "Build Unstable: ${qg.status}"
                        } else {
                            SONAR_GATE_RESULT = "SUCCESS"
                            currentBuild.result = 'SUCCESS'
                            echo "Build SUCCESS: ${qg.status}"
                        }
                    }
                }
            }
        }

        stage("Push to ECR") {
            steps {
                echo "Pushing to ECR..."
                sh "docker tag ${APP_NAME}:${COMMIT_ID} ${REPO}:${APP_NAME}-${COMMIT_ID}"
                script {
                    // GET docker image size
                    IMAGE_SIZE = sh(returnStdout: true, script: "docker image inspect ${REPO}:${APP_NAME}-${COMMIT_ID} --format='{{.Size}}'")
                    if (env.BRANCH_NAME=='master') {
                        sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 315727832121.dkr.ecr.us-east-1.amazonaws.com"
                        sh "docker push ${REPO}:${APP_NAME}-${COMMIT_ID}"
                    }

                }

            }
        }
        stage("Deploy to QA") {
            steps {
                echo "Deploying to QA..."
                script {
                    if (env.BRANCH_NAME=='master') {
                        withCredentials([string(credentialsId: '30466cc8-15f1-4036-afe5-8f3270ed10b8', variable: 'CONNECTIONSTRING_QA')]) {
                            sh "sed -i 's/CONNECTIONSTRING/${CONNECTIONSTRING_QA}/g' k8s_deployment/merchant-deploy.yml"
                        }
                        sh "sed -i 's/NAMESPACE/${NAMESPACE}/g' k8s_deployment/merchant-deploy.yml"
                        sh "sed -i 's/HOSTNAME/${HOSTNAME}/g' k8s_deployment/merchant-deploy.yml"
                        sh "sed -i 's/NODEPORT/${NODEPORT}/g' k8s_deployment/merchant-deploy.yml"
                        sh "sed -i 's/IMAGE/${IMAGE}/g' k8s_deployment/merchant-deploy.yml"
                        sh "kubectl apply -f k8s_deployment/merchant-deploy.yml"
                        // sh "kubectl set image deployment merchant-deployment merchant=${REPO}:${APP_NAME}-${COMMIT_ID} -n dotnet-qa"
                        sh "kubectl annotate deployment merchant-deployment kubernetes.io/change-cause=\"dotnetapp-${COMMIT_ID}\" -n ${NAMESPACE}"
                    } else {
                        echo 'Deployment is done only from master branch.'
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                echo 'Success'
            }
        }
        always {
            echo 'Cleaning up...'
            script {
                // Docker clean up
                sh "docker container prune --filter label=description=dotnet --force"
                sh "docker image prune --filter label=description=dotnet --force"
                sh "docker rmi ${REPO}:${APP_NAME}-${COMMIT_ID} --force 2>/dev/null"
                sh "docker rmi ${APP_NAME}:${COMMIT_ID} --force 2>/dev/null"
                BUILD_NR = "${currentBuild.number}"
                BUILD_DURATION = "${currentBuild.getDuration() / 1000}"
                BUILD_STATUS = "${currentBuild.currentResult}"
                // SEND METRICS AND CLEAN WORKSPACE
                withCredentials([usernamePassword(credentialsId: 'InfluxDB_Cred', passwordVariable: 'InfluxPass', usernameVariable: 'InfluxUser')]) {
                    sh "python3 push-metrics.py --username='${InfluxUser}' --password='${InfluxPass}' --host='192.168.0.4' --dbname='apruteanu' --commit_message='${COMMIT_MESSAGE}' --branch_name='${GIT_BRANCH_NAME}' --commit_hash='${COMMIT_ID}' --commit_author='${COMMIT_AUTHOR}' --build_duration='${BUILD_DURATION}' --build_status='${BUILD_STATUS}' --sonar_quality_gate='${SONAR_GATE_RESULT}' --image_size='${IMAGE_SIZE}' --build_number='${BUILD_NR}' --sonar_scan_data='some sonar data'"
                }
                cleanWs()
            }
        }
    }
}