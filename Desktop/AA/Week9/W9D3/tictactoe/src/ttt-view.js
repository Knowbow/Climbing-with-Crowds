class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
    } catch (error) {
      alert("This is an invalid move");
      return;
    }
    $square.addClass(currentPlayer);

    if(this.game.isOver()){
      this.$el.off("click");
      this.$el.addClass("game-over");
      const winner = this.game.winner();

      this.$el.addClass(`winner-${winner}`);
      const $figcaption = $(`<figcaption>YOU WIN ${winner}</figcaption>`);
      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
   
    for(let row = 0; row < 3; row++){
      for(let col = 0; col < 3; col++){
        let $li = $("<li>");
        $li.data('pos', [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
