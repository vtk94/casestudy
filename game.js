let Game = function (canvas, window) {
    this.setCanvas(canvas);
    this.setBackGroundColor("while");
    this.setWindow(window);
    // this.target = new Target(this);
    this.targets = [];
};

Game.prototype.createTarget = function () {
    for (let i = 0; i < 50; i++) {
        if (this.targets.length < 500) {
            let target = new Target(this);
            this.targets.push(target);
        }
    }
}
;

Game.prototype.showTarget = function () {
    for (let i = 0; i < this.targets.length; i++) {
        this.targets[i].move();
        this.targets[i].draw();
        // console.log(this.targets[i].getPosition())
    }
};

Game.prototype.setCanvas = function (canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
};

Game.prototype.setBackGroundColor = function (backGroundColor) {
    this.backgroundColor = backGroundColor;
    this.canvas.style.backgroundColor = this.backgroundColor;
};

Game.prototype.setWindow = function (window) {
    this.window = window;
    this.setWidth(this.window.innerWidth);
    this.setHeight(this.window.innerHeight);
};

Game.prototype.setWidth = function (width) {
    this.width = width;
    this.canvas.width = this.width;
};

Game.prototype.setHeight = function (height) {
    this.height = height;
    this.canvas.height = this.height;
};

Game.prototype.clear = function () {
    this.context.clearRect(0, 0, game.width, game.height);
};


Game.prototype.click = function () {
    let sult = this;
    sult.canvas.onmousedown = function (event) {
        let x = event.clientX;
        let y = event.clientY;
        for (let i = 0; i < sult.targets.length; i++) {
            if ((x >= sult.targets[i].x && x <= sult.targets[i].x + sult.targets[i].r) && (y >= sult.targets[i].y && y <= sult.targets[i].y + sult.targets[i].r)) {
                sult.targets.splice(i,1);
                i--;
            }
        }
        ;
    };
};