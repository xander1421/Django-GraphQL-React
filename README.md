<bold>A new take on the Django back-end with GraphQl controller to serve a React front-end<bold>


![](./utils/web-page-responsive.gif)

Before you clone Install Python and NodeJS. Try get the newest versions available. 

If the website doesnt run with them, install the versions I have below. 
Python_Version=3.8.4
NodeJs=12.18.2 | yarn=1.22.4

# Clone the repo
    > 1- `git clone https://github.com/xander1421/Django-GraphQL-React.git`

**INSTALLATION OPTION 1**

    > 2- Install dependencies:
# while in the main directory ./Django-GraphQL-React/
    > 2.1- Python: in the terminal run=> `pip install -r ./utils/requirements.txt`

# while in the ./Django-GraphQL-React/FRONTEND directory
    > 2.2- React: in the terminal run=> `yarn install`

    > 3- If the dependencies were installed was successfully, you can now start the 2 servers and test the app
# while in the main directory ./Django-GraphQL-React/
    > 3.1- Django-Start-Server: in the terminal run=> `python manage.py runserver`

# While in the ./Django-GraphQL-React/FRONTEND directory
    > 3.2- React: yarn start


**INSTALLATION OPTION 2**

If you dont want to have to deal with dependencies, I can understand you.
Thats why I created  Docker images for each of the servers.

# To create the BACKEND image: while in the main directory ./Django-GraphQL-React/
    > 2- Run command in terminal: `docker build -t backend:latest . `
# This command starts the backend-image on port:8000
    > 2.1- To run the image: `docker run -i -p 8000:8000 backend:latest`

# To create the FRONTEND image: while in the ./Django-GraphQL-React/FRONTEND directory
    > 3- Run command in terminal: `docker build -t frontend:latest . `
# This command starts the frontend-image on port:8080
    > 2.1- To run the image: `docker run -i -p 8080:8080 frontend:latest`


========/========/========/========/========/========/========/========/========
#  How to access the server.
> 4- If the server was installed and running on your PC or in a Docker image you can
   now navigate to the page: `http://localhost:8080/`




