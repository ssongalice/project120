// 1. Using default arguments
function sum(a=0, b=0) {
  return a + b;
}


// 2. dumping unused code
function addOffset(style={}) {

  style.offset = '10px';

  return style;
}
