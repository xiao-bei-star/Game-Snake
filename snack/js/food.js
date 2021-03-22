var ps = "absolute";
// 创建食物的构造函数
function Food(option) {
    option = option instanceof Object ? option : {};
    // Object.assign(this, option);
    this.width = option.width || 20;
    this.heigt = option.heigt || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;
    this.color = option.color || "blue";
    this.elements = [];
}
// 渲染
Food.prototype.render = function(map) {
    // 创建元素
    var ele = document.createElement("div");
    // 添加属性
    this.x = Tools.getRandom(0, map.clientWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.clientHeight / this.heigt - 1) * this.heigt;
    ele.style.width = this.width + "px";
    ele.style.height = this.heigt + "px";
    ele.style.left = this.x + "px";
    ele.style.top = this.y + "px";
    ele.style.backgroundColor = this.color;
    ele.style.position = ps;
    //追加元素
    map.appendChild(ele);
    this.elements.push(ele);
};
// 食物的删除
Food.prototype.remove = function(map, i) {
        map.removeChild(this.elements[i])
        this.elements.splice(i, 1);
    }
    // var map = document.getElementById("map");
    // var food = new Food();
    // food.render(map);