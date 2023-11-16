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

## Convert GeoJson files taken from public sources from L-EST97 Estonian Coordinate System of 1997 to WGS84
Use Python package ConvertGeoJson
https://github.com/GlebRed/est97-to-wgs84-convertor

## Development
Preferably use Vue Composition API with `script setup`

## Testing
### Feature and unit Testing
`sail artisan test`
#### Generating test
`sail artisan make:test UserTest`
