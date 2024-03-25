# Multi service with traefik

# Instalation:
to run execute:

    docker compose run composer install
    docker compose run node-express npm install

    docker compose up

then navigate to:

    http://localhost:8888/node/ - for node application
    http://localhost:8888/php/ - for php application

    http://localhost:8889/dashboard/ - for traefik dashboard
