var express = require('express'),
    App = express();
App.get('/', (req, res, next) => res.send('ok') );

module.exports = App;
