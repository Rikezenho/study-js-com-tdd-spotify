const headers = require("./config").getHeaders();

export const getAlbum = id =>
  fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers
  }).then(data => data.json());
export const getAlbumTracks = () => {};
