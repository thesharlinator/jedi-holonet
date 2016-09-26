'use strict';

var url = require('url');  
var JediService = require('./JediService');


module.exports.createJedi = function createJedi (req, res, next) {
	JediService.createJedi(req.swagger.params, res, next);
};

module.exports.deleteJedi = function deleteJedi (req, res, next) {
	JediService.deleteJedi(req.swagger.params, res, next);
};

module.exports.findJedi = function findJedi (req, res, next) {
	JediService.findJedi(req.swagger.params, res, next);
};

module.exports.listJedi = function listJedi (req, res, next) {
	JediService.listJedi(req.swagger.params, res, next);
};
