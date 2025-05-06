## Getting started

### Requirements

**Docker**: A platform for automating application deployment, scaling, and
management using containerization.

Download from [Docker's official website](https://www.docker.com/products/docker-desktop).

**docker-compose**: A tool for defining and running multi-container Docker
applications with YAML files, included in Docker Desktop for Windows and Mac,
and installable on Linux.

More info on the [Docker Compose documentation](https://docs.docker.com/compose/).

Ensure `docker` and `docker-compose` are correctly installed and configured.

```
docker --version;
docker-compose --version;
```

### Quick Start Scripts

Scripts were created following the [Scripts to Rule Them All pattern](https://github.blog/2015-06-30-scripts-to-rule-them-all/).

**Setup dev environment**
Ideally you should only need to run this on the first time:
```sh
./script/setup
```

**Run Servers**
For whenever you want to spin up the dev environment again:
```sh
./script/server
```

**Run Tests**
Runs the linter and tests:
```sh
./script/test
```

To run tests constantly while listening to file changes:

```sh
npm run test
```

The following services are expected to run:

- Next.js: http://localhost:3000
- Mongodb: mongodb://localhost:27017
- Mongo Express (Web UI to interact with the DB): http://localhost:8081
