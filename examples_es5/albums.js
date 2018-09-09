"use strict";

var _lib = require("../lib");

global.fetch = require("node-fetch");
var albums = (0, _lib.searchAlbums)("Incubus");
albums.then(function (data) {
  return data.albums && data.albums.items && data.albums.items.map(function (item) {
    return console.log(item.name);
  });
});