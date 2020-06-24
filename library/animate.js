{
    function animate(obj, target, callback) {

        let step;

        obj.timer = setInterval(function () {
            // 设置步长（缓动效果）
            step = (target - obj.offsetLeft) / 10;
            step > 0 ? Math.ceil(step) : Math.floor(step);

            if (obj.offsetLeft === target) {
                // 停止动画
                clearInterval(obj.timer)
            }

            obj.style.left = obj.offsetLeft + step + 'px';

            }, 15);
        // 回调函数
        if (callback) {
            callback();
        }
    }
}
