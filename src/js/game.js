/* eslint no-underscore-dangle: 0 */

export default class Game {
  constructor(element) {
    this._element = element;
  }

  clearAll() {
    // const el = document.querySelectorAll('.grid-item');
    this._element.forEach((elem) => {
      elem.setAttribute('src', 'img/no_goblin.png');
    });
  }

  addGoblin(position) {
    // const el = document.querySelectorAll('.grid-item');
    this._element[position].setAttribute('src', 'img/goblin.png');
  }
}
