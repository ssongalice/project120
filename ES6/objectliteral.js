// 1. Multiple properties with Enhanced Notation

const COLORS = { red: '#ff0000', blue: '#0000ff' };

// 2. condensing code with enhanced Literals
const props = { fields: ['firstName', 'lastName', 'phoneNumber'] };

// 3. Literals in Functions
const canvasDimensions = function(width, initialHeight) {
  return {
    width: width,
    height: (initialHeight * 9 /16)
  };
}

// 4. Refactor to use enhanced literal Notation
const Car = {
  color: 'red',
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
