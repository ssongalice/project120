// 1. distance traveled
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(prev, trip) {
    prev += trip.distance;
    return prev;
}, 0);

// 2. Reducing properties
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, desks) {
    prev[desks.type] ++;
    return prev;
}, { sitting: 0, standing: 0 });

// 3. Custom 'Unique' Helper

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((uniqueArr, currentNum) => {
    if (!uniqueArr.find(num => num === currentNum)) {
        uniqueArr.push(currentNum);
    }

    return uniqueArr;

}, []);
}
