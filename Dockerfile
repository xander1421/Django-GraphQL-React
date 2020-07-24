#set up django enviroment and all of its dependencies
FROM python:3.8-alpine
LABEL description="django"
WORKDIR /djr/backend
COPY /utils/requirements.txt /djr/backend
RUN pip3 install --upgrade pip -r requirements.txt

# Add the django code code

COPY . /djr/backend

# Make port 8000 available for the app
EXPOSE 8000

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
ENTRYPOINT [ "python3", "manage.py", "runserver", "0.0.0.0:8000" ]