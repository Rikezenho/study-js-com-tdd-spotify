import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from "../src/main";

global.fetch = require("node-fetch");

chai.use(sinonChai);
sinonStubPromise(sinon);

describe("Spotify Wrapper", () => {
  describe("smoke tests", () => {
    // search (genérico) - + de 1 tipo
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists

    it("should exist the search method", () => {
      expect(search).to.exist;
    });

    it("should exist the searchAlbums method", () => {
      expect(searchAlbums).to.exist;
    });

    it("should exist the searchArtists method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exist the searchTracks method", () => {
      expect(searchTracks).to.exist;
    });

    it("should exist the searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe("Generic Search", () => {
    it("should call fetch function", () => {
      const fetchedStub = sinon.stub(global, "fetch");
      search();

      expect(fetchedStub).to.have.been.calledOnce;
      fetchedStub.restore();
    });
    it("should receive the correct url to fetch", () => {
      const fetchedStub = sinon.stub(global, "fetch");
      search("Incubus", "artist");

      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=artist"
      );

      search("Incubus", "album");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=album"
      );
    });
  });
});
