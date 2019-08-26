let Target = function (game) {
    this.game = game;
    this.x = Random.position(window.innerWidth);
    this.y = 0;
    this.vX = Random.velocity(5);
    this.vY = Random.velocity(5);
    this.r = Random.radius(50);
    this.color = Random.color();

};

Target.prototype.getPosition = function () {
    return this.x ;
};



Target.prototype.moveToward = function () {
    this.x += this.vX;
    this.y += this.vY;
};


Target.prototype.move = function () {
    this.moveToward();
    if (this.isOverHorizontal()) {
        this.reverseHorizonDirection();
    }
    if (this.isOverVertical()) {
        this.reverseVerticalDirection();
    }

};
Target.prototype.isOverHorizontal = function () {
    return this.x < 0 || this.x > this.game.width;
};

Target.prototype.isOverVertical = function () {
    return this.y < 0 || this.y > this.game.height;
};

Target.prototype.reverseHorizonDirection = function () {
    this.x = this.x - this.vX;
    this.vX = -this.vX;
};



Target.prototype.reverseVerticalDirection = function () {
    this.y = this.y - this.vY;
    this.vY = -this.vY;
};

Target.prototype.draw = function () {
    let context = this.game.canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = this.color.toString();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.fill();
    context.closePath();
};