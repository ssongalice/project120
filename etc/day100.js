// 1. Simple If Statements

// Before

if (user && user.canDeletePost) {
    deletePost();
}

// After

user && user.canDeletePost && deletePost();

// 2. If..else Statements

// Before
let strength = null

if (password.length > 7) {
    strength = 'Strong';
} else {
    strength = 'Weak';
}

// After_using the conditional operator

const strength = (password.length > 7) && 'Strong' || 'Weak';

// After_using the ternary operator
const strength = (password.length > 7) ? 'Strong' : 'Weak';


// another example
// Before
let xmlhttp = null;

if(window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}


// After_using the conditional operator
const xmlhttp = window.XMLHttpRequest && new XMLHttpRequest()
                || window.ActiveXObject && new ActiveXObject('Microsoft.XMLHTTP')
                || null;

// After_using the ternary operator
const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest()
                : window.ActiveXObject
                    ? new ActiveXObject('Microsoft.XMLHTTP')
                    : null;
