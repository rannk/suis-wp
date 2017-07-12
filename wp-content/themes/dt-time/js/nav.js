$('.menu-item-608 ul').append('<li id="menu-details"><ul><li class="all-menu primary-menu"><a href="#">Hong Qiao，ShangHai</a></li>\
	<li class="all-menu primary-menu"><a href="#">Pu Dong，ShangHai</a></li><li class="all-menu primary-menu"><a href="#">Wan Yuan，ShangHai</a></li>\
	<li class="all-menu secondary-menu"><a href="#">Wuxi</a></li><li class="all-menu primary-menu"><a href="#">Gubei，ShangHai</a></li>\
	<li class="all-menu primary-menu"><a href="#">Wenzhou</a></li><li class="all-menu primary-menu"><a href="#">Shang Yin，ShangHai</a></li>\
	<li class="all-menu secondary-menu"><a href="#">Xiamen</a></li><li class="all-menu high-menu"><a href="#">Jiao Ke，ShangHai</a></li></ul></li>');
$('.menu-item-608').css({'width':'600px'});
$('.menu-item-608 ul li:not(#menu-details)').css({'margin-left':'55px','float':'left'});
$('#menu-details').css({'float':'left'});
$('#menu-details ul li').css({'margin':'20px','width':'250px','border-bottom':'1px solid #ccc','pointer-events':'none'});
$('#menu-details ul li a').css({'text-decoration':'none','color':'gray'});
function setall(){
    for (var i = 0; i <= 3; i++) {
        $('.menu-item-608 ul li').eq(i).css({'color':'gray','border-bottom':'none'});
    }
    $('.menu-item-608 ul li').eq(0).css({'color':'black','border-bottom':'2px solid black'});
    $('.all-menu a').css({'color':'#0080FF','pointer-events':'auto'});
}
$('.menu-item-608').on('mouseenter',setall);
for (var i = 0; i <= 3; i++) {
    $('.menu-item-608 ul li').eq(i).mouseover(function(){
        $('.menu-item-608').off('mouseenter',setall);
        var type = $(this).children('a').children('span').text().toLowerCase()+'-menu';
        $(this).siblings('li:not(#menu-details)').css({'color':'gray','border-bottom':'none'});
        $(this).css({'color':'black','border-bottom':'2px solid black'});
        $('.all-menu a').css({'color':'gray','pointer-events':'none'});
        $('.'+type).children('a').css({'color':'#0080FF','pointer-events':'auto'});
    })
}
$('.menu-item-608').mouseleave(function(){
    $('.menu-item-608').on('mouseenter',setall);
})