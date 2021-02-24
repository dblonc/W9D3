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
    $ul.css('width', '500px');
    $ul.css('padding', '0px');
    $ul.css('margin', '0px');
    for (let index = 0; index < 9; index++) {
      $ul.append($('<li>'));
    }
    this.$el.append($ul);
    let $li = $("li");
    $li.css('width','150px');
    $li.css('height','150px');
    $li.css('background-color','gray');
    $li.css('list-style','none');
    $li.css('border','5px solid black');
    $li.text("Test");
  }
  
}

module.exports = View;
