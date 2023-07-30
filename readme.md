# Realtime Chat Application using Node.js, Socket.io, and Express.js
This repository contains a basic real-time chat application built using Node.js, Socket.io, and Express.js, and is configured with Docker for easy setup and deployment.

This project is designed as a practical learning resource for those who want to explore real-time communication using WebSockets with Socket.io in Node.js applications. The application allows multiple users to join a chat room and exchange messages in real-time.

# Features
Real-time communication: The chat application uses WebSocket technology via Socket.io for real-time, bi-directional communication between the server and clients.
Node.js & Express: The backend server is set up using Node.js and Express, providing a lightweight and flexible structure for the application.
Dockerized Application: The application is containerized using Docker, ensuring consistency across various development environments and simplifying deployment processes.

# How to Use
The application is Dockerized, so you can get it running with just a few commands. Make sure you have Docker installed in your environment before proceeding.
You will also need to go throught the docker-compose file and change the running folder. Just search for : C:/Users/jcvol/Desktop/Projects/DockerSocketChat, and change it to your running folder.

# Run the image
> git pull

> docker build . -t socket_chat

> docker run -p 49160:3000 -d --rm --name socket_chat -v "C:/Users/jcvol/Desktop/Projects/DockerSocketChat:/usr/src/app" -v /usr/src/app/node_modules  socket_chat 

or 

> docker-compose up -d









# Basic Docker commands

Build the image
> docker build . -t socket_chat

List all images
> docker images

Run the image
> docker run -p 49160:3000 -d socket_chat

Get container ID
> docker ps

Print app output
> docker logs <container id>

Example
> Running on http://localhost:49160

Enter the container
> $ docker exec -it <container id> /bin/bash

Kill our running container
> docker stop <container id>

Remove a container(you cannot remove running containers)
> docker rm <container id>

Removes every image that is not in use
> docker image prune -a

Using docker-compose to start it
> docker-compose up -d 

Taking it down with docker-composer
> docker-compose down

