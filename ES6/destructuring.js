// 1. Destructuring in Practice

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

isEngineer(profile);

// 2. Array Destructuring in Practice
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});

// 3. Recursion with Destructuring
const numbers = [1, 2, 3];

function double([num, ...rest]) {
    if (!num) return []
    return [num*2, ...double(rest)]
};
