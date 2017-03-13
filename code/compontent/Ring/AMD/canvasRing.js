define('ring',function () {
    function Circle() {
        this.radius = 55; // 圆环半径
        this.lineWidth = 7; // 圆环边的宽度
        this.strokeStyle = '#ccc'; //边的颜色
        this.fillStyle = 'blue'; //填充色
        this.lineCap = 'round';
        this.x = 65;
        this.y = 65;
    }

    Circle.prototype.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); // 坐标为250的圆，这里起始角度是0，结束角度是Math.PI*2
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke(); // 这里用stroke画一个空心圆，想填充颜色的童鞋可以用fill方法
    };

    function Ring(startAngle, percent) {
        Circle.call(this);
        this.startAngle = startAngle || 3 * Math.PI / 2; //弧起始角度
        this.percent = percent; //弧占的比例
    }

    Ring.prototype = Object.create(Circle.prototype);

    Ring.prototype.drawRing = function(ctx, canvas) {
        this.draw(ctx); // 调用Circle的draw方法画圈圈

        // angle
        ctx.beginPath();
        var anglePerSec = 2 * Math.PI / (100 / this.percent); // 蓝色的弧度
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.startAngle + anglePerSec, false); //这里的圆心坐标要和cirle的保持一致

        //渐变
        //需要添加渐变区域颜色参数
        var gradient=ctx.createLinearGradient(0,0,canvas.width,canvas.height);
        gradient.addColorStop("0","#725afe");
        gradient.addColorStop("1.0","#2aefec");

        ctx.strokeStyle = gradient;
        ctx.lineCap = this.lineCap;
        ctx.stroke();
        ctx.closePath();
    };

    return Ring;
});
