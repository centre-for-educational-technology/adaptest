# AdaptEst
Prototype - https://tszayx.axshare.com
![preview](https://github.com/centre-for-educational-technology/adaptest/raw/master/preview.png)

###### Laravel Framework 10.21.0 + Jetstream + Vue 3 + Inertia.js + Tailwind CSS

## Installation
### Prerequisites
Requires Docker Desktop app
https://www.docker.com/products/docker-desktop
### Procedure
```
composer install
```
Configure .env
```
cp .env.example .env
php artisan key:generate
```
Set admin info in .env file
```
ADMIN_NAME=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```
Launch sail
```
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
sail up
sail npm install
sail npm run dev
```
Run migrations
```
sail artisan migrate --seed
sail artisan storage:link
```

## Run Sail
`./vendor/bin/sail up`

Go to
http://0.0.0.0/

## Run automated tests
`./vendor/bin/sail test`

