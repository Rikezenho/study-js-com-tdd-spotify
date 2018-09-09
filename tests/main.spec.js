import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists
} from "../src/main";

global.fetch = require("node-fetch");

chai.use(sinonChai);

describe("Spotify Wrapper", () => {
  let fetchedStub;
  beforeEach(() => {
    fetchedStub = sinon.stub(global, "fetch");
    fetchedStub.resolves({ json: () => ({ body: "json" }) });
  });
  afterEach(() => {
    fetchedStub.restore();
  });

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
      search();
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch with the correct URL", () => {
      context("passing one type", () => {
        search("Incubus", "artist");

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist"
        );

        search("Incubus", "album");
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=album"
        );
      });
      context("passing more than one type", () => {
        search("Incubus", ["artist", "album"]);

        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist,album"
        );
      });
    });
    it("should return the JSON data from the promise", () => {
      search("Incubus", "artist").then(data => {
        expect(data).to.be.eql({ body: "json" });
      });
    });
  });

  describe("searchArtists", () => {
    it("should call fetch function", () => {
      searchArtists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch function", () => {
      searchArtists("Incubus");

      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=artist"
      );
    });
  });

  describe("searchAlbums", () => {
    it("should call fetch function", () => {
      searchAlbums("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch function", () => {
      searchAlbums("Incubus");

      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=album"
      );
    });
  });

  describe("searchTracks", () => {
    it("should call fetch function", () => {
      searchTracks("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch function", () => {
      searchTracks("Incubus");

      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=track"
      );
    });
  });

  describe("searchPlaylists", () => {
    it("should call fetch function", () => {
      searchPlaylists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should call fetch function", () => {
      searchPlaylists("Incubus");

      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=playlist"
      );
    });
  });
});
