window.onload = function () {
    var gallary_imgs = document.querySelector('.gallary_imgs');
    if (gallary_imgs) {
        var allImgs = document.getElementsByClassName('gallary_img_item');
        var imgWidth = parseInt(allImgs[0].offsetWidth ? allImgs[0].offsetWidth : getStyle(allImgs[0]).width);
        var gallary_btn_left = document.querySelector(".gallary_btn_left");
        var gallary_btn_right = document.querySelector(".gallary_btn_right");
        var img_num = document.getElementsByClassName('gallary_img_item').length;

        var isPC = imgWidth > 100 ? true : false;
        var borderLength = isPC ? img_num * imgWidth - 7 * imgWidth : img_num * imgWidth - 4 * imgWidth;
        var ifBorder = false;

        function getStyle(ele) {
            return ele.currentStyle ? ele.currentStyle : window.getComputedStyle(ele, null);
        }

        gallary_btn_left.onclick = function () {
            var temLeft = parseInt(getStyle(gallary_imgs).left);
            if (temLeft == 0) {
                return;
            } else {
                gallary_imgs.style.left = temLeft + imgWidth + 20 + 'px';
                ifBorder = false;
            }
        }
        gallary_btn_right.onclick = function () {
            if (!ifBorder) {
                var temLeft = parseInt(getStyle(gallary_imgs).left);
                gallary_imgs.style.left = temLeft - imgWidth - 20 + 'px';
                var afterLeft = parseInt(getStyle(gallary_imgs).left);
                if (afterLeft < -borderLength) {
                    ifBorder = true;
                }
            } else {
                return;
            }
        }
    }
}
