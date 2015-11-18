//控制移动端nav出现
$("#burger-icon").click(function(){
    $("#mb-nav").fadeIn(500).find("nav").animate({
        left:'0'
    });
});

//控制移动端nav隐藏
$("#mb-nav").click(function (e) {
    var mbnav = $("#mb-nav"),
    nav = $("#mb-nav nav")[0],
    target = e.target;
    if (nav !== target && !$.contains(nav, target)) {
        $("nav").animate({left:'-70%'}).parent().fadeOut(500);
    }
});