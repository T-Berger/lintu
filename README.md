# Docker build commandos

## docker run -p 27017:27017 --name mongodb mongo

## node ./mongodbtaskfile.js

## cd backend/

## docker build -t lintu .
 
## docker run -ti --link mongodb:mongodb -p 3000:3000 -p 3001:3001 --name lintu2 lintu