{
    let flag = true;
    function swiper(item,num) {
        if (flag) {
            flag = false;
            let index = item.getAttribute('data-index');
            index = Math.round(index) + num;
            if (index >= length) {
                index = 0;
            }else if (index < 0) {
                index = length - 1;
            }
            for (let i = 0; i < length; i++) {
                items[i].classList.remove('active');
                btns[i].classList.remove('active');
            }
            items[index].classList.add('active');
            btns[index].classList.add('active');
            setTimeout(function () {
                flag = true
            }, 600)
        }
    }
}