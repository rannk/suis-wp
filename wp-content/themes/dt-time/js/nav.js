jQuery('.menu-item-608 ul').append('<li id="menu-details"><ul><li class="all-menu primary-menu"><a href="#">Hong Qiao，ShangHai</a></li>\
	<li class="all-menu primary-menu"><a href="#">Pu Dong，ShangHai</a></li><li class="all-menu primary-menu"><a href="#">Wan Yuan，ShangHai</a></li>\
	<li class="all-menu secondary-menu"><a href="#">Wuxi</a></li><li class="all-menu primary-menu"><a href="#">Gubei，ShangHai</a></li>\
	<li class="all-menu primary-menu"><a href="#">Wenzhou</a></li><li class="all-menu primary-menu"><a href="#">Shang Yin，ShangHai</a></li>\
	<li class="all-menu secondary-menu"><a href="#">Xiamen</a></li><li class="all-menu high-menu"><a href="#">Jiao Ke，ShangHai</a></li></ul></li>');
jQuery('.menu-item-608').css({'width':'600px'});
jQuery('.menu-item-608 ul li:not(#menu-details)').css({'margin-left':'55px','float':'left'});
jQuery('#menu-details').css({'float':'left'});
jQuery('#menu-details ul li').css({'margin':'20px','width':'250px','border-bottom':'1px solid #ccc','pointer-events':'none'});
jQuery('#menu-details ul li a').css({'text-decoration':'none','color':'gray'});
function setall(){
    for (var i = 0; i <= 3; i++) {
        jQuery('.menu-item-608 ul li').eq(i).css({'color':'gray','border-bottom':'none'});
    }
    jQuery('.menu-item-608 ul li').eq(0).css({'color':'black','border-bottom':'2px solid black'});
    jQuery('.all-menu a').css({'color':'#0080FF','pointer-events':'auto'});
}
jQuery('.menu-item-608').on('mouseenter',setall);
for (var i = 0; i <= 3; i++) {
    jQuery('.menu-item-608 ul li').eq(i).mouseover(function(){
        jQuery('.menu-item-608').off('mouseenter',setall);
        var type = jQuery(this).children('a').children('span').text().toLowerCase()+'-menu';
        jQuery(this).siblings('li:not(#menu-details)').css({'color':'gray','border-bottom':'none'});
        jQuery(this).css({'color':'black','border-bottom':'2px solid black'});
        jQuery('.all-menu a').css({'color':'gray','pointer-events':'none'});
        jQuery('.'+type).children('a').css({'color':'#0080FF','pointer-events':'auto'});
    })
}
jQuery('.menu-item-608').mouseleave(function(){
    jQuery('.menu-item-608').on('mouseenter',setall);
})