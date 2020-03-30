const express = require('express');
const path = require('path');

const hApp = express();

hApp.use(express.static('./dist/heroku-deploy'));

hApp.get('/*', function(request, response){
    response.sendFile(path.join(__dirname, '/dist/heroku-deploy/index.html'));
});

hApp.listen(process.env.PORT || 8080);