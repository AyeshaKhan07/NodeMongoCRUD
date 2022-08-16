# CRUD USING NODE, EXPRESS AND MONGODB





## About
This project was created to study the concepts of CRUD operations using node, express and mongoDB. It has also the implementation of aggregation using mongoose.

## Prerequisite
Installation of: 
- Docker (optional)
- Docker compose (optional)
- Node

## Technologies
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## How To Use
```
# Clone this repository
$ git clone https://github.com/AyeshaKhan07/NodeMongoCRUD.git

# Go into the repository
$ cd NodeMongoCRUD

# Install dependencies
$ npm install

# Install mongoDB using docker
$ cd database
$ cd mongoDB
$ docker-compose up -d

# Create .env file and copy the content of sample.env to .env

# Run the app
$ node index.js
```

If you are seeing these two lines logged on the console, congratulatons your server is up successfully with mysql connected.

![image](https://user-images.githubusercontent.com/41265756/162419294-8b64fb3f-6bec-4007-9d96-72371eab9ec9.png)

## Populate The Data
There are a bunch of seeder files through which you can populate the dummy data. But first you have to create users by userSeeder.js. Just open the terminal and write:
``` 
node userSeeder.js
```
For posts, you have to pass the user id for which you are going to create the post and similarly for comments you have to paas the post id. User and post have one to many relation similarly post and comments have one to many relation.

## To Conclude
The server is up with mongoDB connected, now you can make API calls using postman or any other platform.

## Author
@AyeshaKhan07
