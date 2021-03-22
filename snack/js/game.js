var that;
// 建立游戏对象
function Game(map) {
    this.food = new Food();
    this.snake = new Snack();
    this.map = map;
    that = this;
}
// 添加游戏中对象
Game.prototype.start = function() {
        this.food.render(this.map);
        this.food.render(this.map);
        this.food.render(this.map);
        this.snake.render(this.map);
        // 游戏逻辑
        // 蛇自己动起来
        runSnake()
            // 上下左右控制蛇运动
        bindkey();
    }
    // 封装上下函数
function bindkey() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                that.snake.direction = "left";
                break;
            case 38:
                that.snake.direction = "top";
                break;
            case 39:
                that.snake.direction = "right";
                break;
            case 40:
                that.snake.direction = "bottom";
                break;
        }
    }
}
// 封装蛇动的函数
function runSnake() {
    // 开启一个定时器让蛇连续运动起来
    var timer = setInterval(function() {
        // 让蛇动起来
        that.snake.move();
        that.snake.remove(that.map);
        that.snake.render(that.map);
        //记录数据
        var maxX = that.map.offsetWidth / that.snake.width;
        var maxY = that.map.offsetHeight / that.snake.height;
        var headX = that.snake.body[0].x;
        var headY = that.snake.body[0].y;
        var hx = headX * that.snake.width;
        var hy = headY * that.snake.height;
        // 吃掉食物
        for (var i = 0; i < that.food.elements.length; i++) {
            if (that.food.elements[i].offsetLeft === hx && that.food.elements[i].offsetTop === hy) {
                that.food.remove(that.map, i);
                that.food.render(that.map);
                var last = that.snake.body[that.snake.body.length - 1];
                that.snake.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color
                });
            }
        }
        // 进行判断，超出范围则游戏结束
        if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
            alert("Game over!");
        }
    }, 150);
}