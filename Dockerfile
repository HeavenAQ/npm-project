FROM nikolaik/python-nodejs:latest

# Set the working directory
WORKDIR /app

# install python dependencies
COPY requirements.txt /app
RUN pip install -r requirements.txt

# Install node dependencies
COPY . /app
RUN npm install -g npm@latest
RUN npm i

# Build the app
RUN npm run build
RUN python manage.py collectstatic --noinput
RUN python manage.py migrate

# Start the app
CMD exec gunicorn --bind 0.0.0.0:$PORT --workers 1 --threads 8 --timeout 0 "npm_project.wsgi"
