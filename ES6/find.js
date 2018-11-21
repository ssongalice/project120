// 1. Finding Admin users
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin === true;
});

// 2. What's your balance?
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
    return account.balance === 12;
});

// 3. Custom findWhere Helper
var ladders = [
    { id : 1, height: 20},
    { id : 3, height: 25}
];

function findWhere(array, criteria) {
    var relist = array.find(function(a) {
        return a.height === criteria['height'];
    });

    return relist
}

findWhere(ladders, {height: 25});
