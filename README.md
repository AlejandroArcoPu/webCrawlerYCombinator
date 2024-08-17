# webCrawlerYCombinator

Web Crawler that extracts data from https://news.ycombinator.com/

## Project Structure

* **backend**: The backend is a Node.js app that works with the use of AXIOS, CHEERIO and EXPRESS. It is responsible of the scraping. It has two APIs:
    * `GET /api/health`: Simple api that answer with *Healthy :)*.
    * `GET /api/scraping`: Api that returns the 30 news of  https://news.ycombinator.com/

* **frontend**: React vite app that displays the 30 scraped news as a table with filtering options:
    * `Filter by Comments (more than 5 title words)`: Allows users to filter by comments where the titles have more than 5 words.
    * `Filter by Points (less or equal than 5 title words)`: Allows users to filter by points where the titles have less or equal than 5 words.

## Folder Structure

* `/backend`
    * `index.js`: Where the express server is created and where all the APIs definitions are.
    * `scraper.js`: Contains the logic of scraping using AXIOS and CHEERIO.
    * `Dockerfile`: Definition of the Node.js containerized app
    * `/tests`: Contains all the API tests.

* `/frontend`
    * `src/App.jsx`: Where the main React App compones is defined
    * `src/components`: Contains reusable components of the UI
    * `src/services`: Directory used to manage APIs integrations with the app
    * `Dockerfile`: Definition of the Node.js containerized app

## Getting Started

To run this app the following prerequisites should be followed

### Prerequisites

* Without Docker (for running locally without containers)
* With DockerCompose (for containerized setup)

#### Without Docker

1. Clone the repository

```bash

git clone https://github.com/AlejandroArcoPu/webCrawlerYCombinator.git

```

2. Go to the root folder and run the npm command:

```bash

cd webCrawlerYCombinator
npm run dev 

```

#### With DockerCompose

1. Clone the repository

```bash

git clone https://github.com/AlejandroArcoPu/webCrawlerYCombinator.git

```

2. Go to the root folder and run the docker-compose command:

```bash

cd webCrawlerYCombinator
docker-compose up

```

## Running test

* **Backend test**: Using JEST and SUPERTEST. To run tests:

```bash

npm run test

```