// var express = require('express');
var  ig = require('instagram-node').instagram();

ig.use({ access_token: '15288151.1677ed0.9c7942f07f2642cd83720ab214876255' });
ig.use({ client_id: '90a63fadfb3143579bca30aca6f60a24',
         client_secret: '10cc0814cf834a84a5b14bc3a07359d5' });




module.exports.getData = function(req, res) {
    ig.user('jrayrockabilly', function(err, result, remaining, limit) {
        console.log(result);
    });
    res.send(null);
 }