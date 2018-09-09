import { searchAlbums } from "../lib";

global.fetch = require("node-fetch");

const albums = searchAlbums("Incubus");

albums.then(
  data =>
    data.albums &&
    data.albums.items &&
    data.albums.items.map(item => console.log(item.name))
);
