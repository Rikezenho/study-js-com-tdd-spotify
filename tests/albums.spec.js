import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { getAlbum, getAlbums, getAlbumTracks } from "../src/albums";
import { API_URL } from "../src/config";

global.fetch = require("node-fetch");

chai.use(sinonChai);

describe("Album", () => {
  let fetchedStub;
  beforeEach(() => {
    fetchedStub = sinon.stub(global, "fetch");
    fetchedStub.resolves({ json: () => ({ body: "json" }) });
  });
  afterEach(() => {
    fetchedStub.restore();
  });

  describe("smoke tests", () => {
    it("should exist getAlbum method", () => {
      expect(getAlbum).to.exist;
    });

    it("should exist getAlbumTracks method", () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe("getAlbum", () => {
    // verifica se o fetch ocorre
    it("should call fetch method", () => {
      getAlbum();
      expect(fetchedStub).to.be.calledOnce;
    });
    // verifica se o fetch ocorre com a url desejada
    it("should call fetch with the correct URL", () => {
      getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`
      );
    });
    // verifica se o dado é recebido pela Promise
    it("should receive the correct data from Promise", () => {
      return getAlbum("4aawyAB9vmqN3uQ7FjRGTy").then(data => {
        expect(data).to.be.eql({ body: "json" });
      });
    });
  });

  describe("getAlbums", () => {
    // verifica se o fetch ocorre
    it("should call fetch method", () => {
      getAlbums();
      expect(fetchedStub).to.be.calledOnce;
    });
    // verifica se o fetch ocorre com a url desejada
    it("should call fetch with the correct URL", () => {
      getAlbums(["4aawyAB9vmqN3uQ7FjRGTy", "4aawyAB9vmqN3uQ7FjRGTk"]);
      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk`
      );
    });
    // verifica se o dado é recebido pela Promise
    it("should receive the correct data from Promise", () => {
      return getAlbums([
        "4aawyAB9vmqN3uQ7FjRGTy",
        "4aawyAB9vmqN3uQ7FjRGTk"
      ]).then(data => {
        expect(data).to.be.eql({ body: "json" });
      });
    });
  });

  describe("getAlbumTracks", () => {
    // verifica se o fetch ocorre
    it("should call fetch method", () => {
      getAlbumTracks();
      expect(fetchedStub).to.be.calledOnce;
    });
    // verifica se o fetch ocorre com a url desejada
    it("should call fetch with the correct URL", () => {
      getAlbumTracks("4aawyAB9vmqN3uQ7FjRGTy");
      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`
      );
    });
    // verifica se o dado é recebido pela Promise
    it("should receive the correct data from Promise", () => {
      return getAlbumTracks("4aawyAB9vmqN3uQ7FjRGTy").then(data => {
        expect(data).to.be.eql({ body: "json" });
      });
    });
  });
});
