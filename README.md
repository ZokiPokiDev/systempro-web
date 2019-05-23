# Web services

## Installation

    cd docker
    cp .env.dist .env
    docker-compose build
    docker-compose up -d
    docker-compose -f docker-compose.install.yml up
    docker-compose exec php php bin/console doctrine:migrations:migrate
    
And that's it, now visit http://symfony.local in web browser.

## Admin

If you like to see **admin** check http://symfony.local/admin