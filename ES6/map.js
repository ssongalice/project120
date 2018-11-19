// 1. Plucking values
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
    return image.height;
});

// 2. Calculating Values with map
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trips) {
    return (trips.distance / trips.time);
});


// 3.Really Hard - Implementing 'Pluck'
var paints = [ {color: 'red'}, {color:'blue'}, {color:'yellow'}];

function pluck(array, property) {
    var plucks = array.map(function(obj) {
        return obj[property];
    });

    return plucks;
}

pluck(paints, 'color');
