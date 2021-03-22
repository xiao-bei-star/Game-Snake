var Tools = {
    // 获取随机数
    getRandom: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    //获取随机颜色
    getColo: function() {
        var r = this.getRandom(0, 255);
        var g = this.getRandom(0, 255);
        var b = this.getRandom(0, 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
};