class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul>');
    $ul.attr('display','flex');
    $ul.attr('flex-wrap','wrap');
    this.$el.append($('<ul>'));

    for (let index = 0; index < 9; index++) {
      $ul.append($('<li>'))
    }
  }
  
}

module.exports = View;
