# Broad-Brush

## Summary 

App for artist to share and upload artwork to specific genres for other users to view. Users can sign up and update their profile to change genre, bio, and image uploads. 

- View Website https://broad-brush.herokuapp.com/

![alt text](public/broadbrushgif.gif)

## Installation 
- `clone repository`
- install: `npm install i`
- `create an account with cloudinary.com (dynamic media platform) to store images or videos`
- ``
![alt text](public/broadbrushgif.gif)

- `create an account with cloudinary.com to store images`
- create a `.env` file, to store clodinary password keys   
  `TOKEN_SIGN = xxxxxxxx
   CLOUDINARY_CLOUDNAME = xxxxx
   CLOUDINARY_APIKEY = xxxxxxxx
   CLOUDINARY_APISECRET = xxxxxxxxxxxxxx`
- install mongobd https://www.mongodb.com/download-center/community
- add schema name to app.js file `const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/yourSchemaName';`
- to run locally `npm run dev`    



## License 

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Deployment 
 - Heroku 

## Authors 
Travis Stewart 

## License & copyright

Licensed under the [MIT License](LICENSE).
