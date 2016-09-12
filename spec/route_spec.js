var request = require("request");

var root = "http://localhost:3000/",
    albums;

describe("JSON routes", function(){
  describe("/albums", function(){
    it("returns an array of albums", function(done){
      request(root + "albums.json", function(e, res, body){
        albums = JSON.parse(body);
        expect(albums[0].title).toBeDefined();
        done();
      });
    });
  });

  describe("/ablums/<album>.json", function(){
    it("returns tracks for album", function(done){
      request(root + "albums/" + albums[0].title + ".json", function(e, res, body){
        expect(JSON.parse(body)[0].title).toBeDefined();
        done();
      })
    })
  })
})
