# Readme

Execution: node index.js
Running on: localhost:3000

## Socket.IO

* idea = to send and receive any events, with any data 
* = an event-driven library for real-time web applications
* a client-side library that runs in the browser, and a server-side library for Node.js (both components have a nearly identical API)
* released 2010
* bi-directional communication between web clients and servers
* available in different languages
 * Java
 * C++
 * Swift
 * Dart
 * Python
 * .NET
 * Rust
 * TypeScript/JavaScript

### Manager

* manages Engine.IO client instance -> connection to server (using transports or HTTP)
* handles the reconnection logic
* one manager can be used by several sockets which is then called multiplexing
* instead of using the manager, you can directly use the socket instance

Multiplexing 

* Namespaces allow you to split the logic of your application over a single shared connection
* can be useful for example if you want to create an "admin" channel that only authorized users can join

## Popularity

* 57.6k GitHub Stars
* 10.2k Forks
* more than 3.5 Mio. are using Socket.IO on GitHub
* 209 contributors
* new release on 7th of Feburary 2023 -> still ongoing development which is good

> information from GitHub

## Project

* Node.JS with framework Express
* role of Socket.IO -> loading on the browser side
* using cookies - server sends a cookie via handshake with the value of the Engine.IO session ID curl "https://mydomain.com/socket.io/?EIO=4&transport=polling" -v


## Research: Use Cases

Socket.IO can also be used for different use cases which I haven't though of before. The most interesting examples which I found during my research jouney are listed below.

### Todo App

* users can create, read, and delete to-dos and add comments to each to-do via Socket.IO

https://novu.co/blog/building-the-most-practical-todolist-with-react-and-websockets/

### Location Tracking App

* Node.js and Socket.IO
* used for sharing the locations between users

https://blog.logrocket.com/building-real-time-location-app-node-js-socket-io/

### Clone of Google Documents

* collaboratively compose a document with anyone else having access to the same document url
* Vue.js, Node.js, MongoDB

https://github.com/pmanikas/vue-documents 

### Trackero

* end-to-end fully functioning task management Web App based on Trello, which is a collaborative work management app designed to track team projects, highlight tasks underway, show who they are assigned to, and detail progress towards completion
* Vue.js, Node.js/Express.js, MongoDB

https://github.com/noanissim/trackero-frontend

### The Continental Restaurant

* simple restaurant booking software
* using Socket.IO in backend and frontend
* backend stack: KoaJS, Redis, Socket.IO and Cypress
* frontend stack: Quasar, Axios and Socket.IO

https://github.com/hotslab/TheContinentalRestaurant

## Findings

* Socket.IO is easy to use
* it is handy as it is simple to learn 
* has a good documentation
* first in mind I had a chatbot but communication can also work differently like you see in the different use cases
* Socket.IO is compatible with a lot of stacks (haven't seen any where it is not compatible so far)
* not a lot of code lines needed for implementation
* popular tool with ongoing development and a broad community