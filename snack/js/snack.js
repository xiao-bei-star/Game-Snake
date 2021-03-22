var ps = "absolute";
//蛇对象的创建
function Snack(option) {
    option = option instanceof Object ? option : {};
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.body = [{ x: 3, y: 2, color: "yellow" }, { x: 2, y: 2, color: "pink" }, { x: 1, y: 2, color: "pink" }, ];
    this.direction = "right";
    this.elements = [];
};
// 蛇的渲染
Snack.prototype.render = function(map) {
    for (var i = 0, len = this.body.length; i < len; i++) {
        var pie = this.body[i];
        // 创建元素
        var ele = document.createElement("div");
        // 添加属性
        ele.style.width = this.width + "px";
        ele.style.height = this.height + "px";
        ele.style.left = pie.x * this.width + "px";
        ele.style.top = pie.y * this.height + "px";
        ele.style.backgroundColor = pie.color;
        ele.style.position = ps;
        // 追加到父级
        map.appendChild(ele);
        this.elements.push(ele);
    }
};
// 蛇的运动方法
Snack.prototype.move = function() {
    for (var i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
    }
    var head = this.body[0];
    switch (this.direction) {
        case "right":
            head.x += 1;
            break;
        case "left":
            head.x -= 1;
            break;
        case "top":
            head.y -= 1;
            break;
        case "bottom":
            head.y += 1;
            break;
    }
};
// 删除蛇之前的运动
Snack.prototype.remove = function(map) {
    for (var i = this.elements.length - 1; i >= 0; i--) {
        map.removeChild(this.elements[i]);
    }
    this.elements = [];
};
// var map = document.getElementById("map");
// var snake = new Snack();
// snake.render(map);
// snake.move();
// snake.render(map);
// snake.remove(map);