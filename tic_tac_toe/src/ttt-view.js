
class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }
  
  
  bindEvents() {
    const $ul = $("ul");
    // $ul.on('mouseenter', "li", event => $(event.currentTarget).css('background-color', 'yellow'));
    // $ul.on('mouseleave', "li", event => $(event.currentTarget).css('background-color', 'gray'));
    $ul.on("click", "li", event => {
      const $li = $(event.currentTarget);
      const pos = $li.data("pos");
      try {
        const currentPlayer = this.game.currentPlayer
        this.game.playMove(pos);
        $li.text(currentPlayer);
        $li.addClass("white");
        if (this.game.isOver()) {
          alert(currentPlayer.toUpperCase() + " wins!");
          return;
        }
        
      }
      catch(err) {
        alert(err);
      }

    });
  }
  
  makeMove($square) {}
  
  setupBoard() {
    const $h1 = $('h1');
    $h1.css('display','flex');
    $h1.css('justify-content', 'center');
    $h1.css('font-size', '60px');
    $h1.css('margin-bottom', '20px');
    $h1.css('width', View.BWIDTH);
    $h1.css('padding-inline-start', '40px');
    let $ul = $('<ul>');
    $ul.css('display','flex');
    $ul.css('flex-wrap','wrap');
    $ul.css('width', View.BWIDTH);
    $ul.css('padding', '0px');
    $ul.css('margin', '0px');
    for (let index = 0; index < 9; index++) {
      $ul.append($('<li>'));
    }
    this.$el.append($ul);
    let $li = $("li");
    $li.css('width',View.SQSIDE);
    $li.css('height',View.SQSIDE);
    // $li.css('background-color','gray');
    // $li.css('list-style','none');
    // $li.css('border','solid black');
    $($li[0]).css('border-width', View.BORDER+'px ' + (View.BORDER / 2) + 'px ' +(View.BORDER/2) +"px " + (View.BORDER) +"px");
    $($li[1]).css('border-width', View.BORDER+'px ' + (View.BORDER / 2) + 'px ' +(View.BORDER/2) +"px " + (View.BORDER/2) +"px");
    $($li[2]).css('border-width', View.BORDER+'px ' + (View.BORDER) + 'px ' +(View.BORDER/2) +"px " + (View.BORDER/2) +"px");
    $($li[3]).css('border-width', (View.BORDER/2)+'px ' + (View.BORDER / 2) + 'px ' +(View.BORDER/2) +"px " + (View.BORDER) +"px");
    $($li[4]).css('border-width', (View.BORDER/2)+'px ' + (View.BORDER / 2) + 'px ' +(View.BORDER/2) +"px " + (View.BORDER/2) +"px");
    $($li[5]).css('border-width', (View.BORDER/2)+'px ' + (View.BORDER) + 'px ' +(View.BORDER/2) +"px " + (View.BORDER/2) +"px");
    $($li[6]).css('border-width', (View.BORDER/2)+'px ' + (View.BORDER / 2) + 'px ' +(View.BORDER) +"px " + (View.BORDER) +"px");
    $($li[7]).css('border-width', (View.BORDER/2)+'px ' + (View.BORDER / 2) + 'px ' +(View.BORDER) +"px " + (View.BORDER/2) +"px");
    $($li[8]).css('border-width', (View.BORDER/2)+'px ' + (View.BORDER) + 'px ' +(View.BORDER) +"px " + (View.BORDER/2) +"px");
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        $($li[(3*x)+y]).data("pos", [x,y]);
      }
    }
    this.bindEvents();
    // $ul.on('mouseenter', "li", event => $(event.currentTarget).css('background-color','yellow'));
    // $ul.on('mouseleave', "li", event => $(event.currentTarget).css('background-color','gray'));
  }
  
}
Object.defineProperty(View, "BWIDTH", {value: '500px'});
Object.defineProperty(View, "SQSIDE", {value: '150px'});
Object.defineProperty(View, "BORDER", {value: 10});

module.exports = View;
