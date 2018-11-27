// 1. Refactoring Keyword functions
const fibonacci =  n => {
    if (n<3) return 1;
    return  fibonacci(n - 1) + fibonacci(n - 2);
}

// 2. Arrow Functions Aren't Always a solution
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};

profile.getName();
