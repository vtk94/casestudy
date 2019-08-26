let targetBoard = document.getElementById("game");

let game = new Game(targetBoard,window);


game.createTarget();
game.click();

function aa() {
    game.clear();
    game.showTarget();

    setTimeout(aa,1000/60)

};
aa();

// window.addEventListener("click",function () {
//     game.click();
//
// });

