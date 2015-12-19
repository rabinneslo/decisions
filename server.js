/**
 * Created by rabinneslo on 12/12/15.
 */
var express = require('express'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    passport = require('passport');

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    mongoose = require('mongoose');

//Create new app and attach database connection to it
var app = express();