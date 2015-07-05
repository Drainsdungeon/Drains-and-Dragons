bins = new Mongo.Collection('bins');

if (Meteor.isServer){
  Meteor.publish('bins', function() {
    return bins.find({});
  });
}

if (Meteor.isClient){
  Meteor.subscribe('bins', {
    onReady: function(){
      drainCursor = bins.find();
      drainCursor.forEach(function(point){
        console.log("point found");
        var lat = parseFloat(point.geometry.coordinates[1]);
        console.log(lat);
        var long = parseFloat(point.geometry.coordinates[0]);
        console.log(long);
        L.marker(L.latLng(lat,long), title="Bin").addTo(map);
    });
  }
});
}
