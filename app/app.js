require('angular')
var MainController = require('./controllers/MainController')

var app = angular.module('app', [])
app.controller('MainController', ['$scope', MainController])