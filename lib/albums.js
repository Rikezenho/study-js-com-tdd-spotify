"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require("./config");

var _utils = require("./utils");

/* global fetch */

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + "/albums/" + id, {
    headers: _config.HEADERS
  }).then(_utils.toJSON);
};
var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + "/albums?ids=" + ids, {
    headers: _config.HEADERS
  }).then(_utils.toJSON);
};
var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + "/albums/" + id + "/tracks", {
    headers: _config.HEADERS
  }).then(_utils.toJSON);
};