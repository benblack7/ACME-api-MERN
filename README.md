# ACME BackEnd API with MongoDB using Docker Containers

Here's an API utilizing MongoDB as a backend database and using Docker Compose to generate two containers, one for the API, and the other for MongoDB.

## Installation

Run the Docker Compose file to build and deploy the cluster


```bash
docker-compose up
```

## Usage

Send a GET request to localhost:3001/buyers to retrieve a list of all buyers.

Send a POST request to localhost:3001/buyers to save a new buyer.  The Data should be formatted as an Object like this:

{
    "name": "Clint Eastwood",
    "interests": "Horses, Guns",
    "location": "35.65, 79.849"
}