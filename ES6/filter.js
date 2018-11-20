// 1. Filtering values
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

numbers.filter(function(number) {
    if (number >= 50) {
        filteredNumbers.push(number)
    }
});

// 2. Handling Permissions with Filter

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin === true;
});


// 3. Challenging! Implementing 'reject'
var numbersB = [10, 20, 30];


function reject(array, iteratorFunction) {
    return array.filter(function(a) {
        return !iteratorFunction(a);
    });
}

var lessThanFifteen = function(number) {
    return number > 15;
};

reject(numbersB, lessThanFifteen);
