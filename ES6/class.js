// 1. Game class

class Monster {
  constructor({ name }) {
      this.health = 100;
      this.name = name;
  }
}

const monster = new Monster({name: 'Songyi'});

// 2. Subclassing Monsters
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }

    bite(options) {
        return options.health -= 10;
    }
}
