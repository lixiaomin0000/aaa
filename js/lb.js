 var $imga = $(".lunbo .box a");
    var len = $imga.length
    var bw = $(".lunbo .box").width();
    var btn = $(".lunbo li");
    var index = 0;
    var next = 0;
    //图片初始化
    $imga.css("left", bw).eq(0).css("left", 0)
    //计时器
    var t = setInterval(movel, 2000);
    //轮播
    function movel() {
        next++;
        if (next == len) {
            next = 0;
        }
        //下一张图片准备
        $imga.eq(next).css({"left": bw});
        //当前图片离开
        $imga.eq(index).animate({"left": -bw});
        //下一张图片显示
        $imga.eq(next).animate({"left": 0})
        //按钮颜色
        btn.eq(index).removeClass("hot");
        btn.eq(next).addClass("hot");
        index = next;
    }