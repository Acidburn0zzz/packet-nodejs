'use strict';
// jshint ignore: start
var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var invitationId;
var api = new Packet('');
describe('Client Invitations Methods', function() {
    beforeEach(function() {
    });
});
