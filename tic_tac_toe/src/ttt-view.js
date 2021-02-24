class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul>');
    $ul.css('display','flex');
    $ul.css('flex-wrap','wrap');
    
    for (let index = 0; index < 9; index++) {
      $ul.append($('<li>'));
    }
    this.$el.append($ul);
    let $li = $("li");
    $li.text("Test");
  }
  
}

module.exports = View;
