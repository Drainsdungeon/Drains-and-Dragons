art = new Mongo.Collection('art');

var getArt = function(){
  return (art.find().fetch());
}
