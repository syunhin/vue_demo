//页面高度设置
var height = $(window).height();
$(".content").each(function(index, element) {
    $(element).css({"paddingTop":$(this).siblings(".header-fixed").height()+'px'});
});
var heights = parseInt($(".content").css("height"))+parseInt($(".content").css("padding-top"));
var height_ = $(".wrap-page").height();
$(".content-l").css("height","100%");
$(".content-r").css("height","100%");
// $(".content-detail").css("height",heights);

// 取页面跳转的参数
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

