jQuery(document).ready(function () {
  if (window.location.href.indexOf('en.suis.com.cn') > -1) {
    var clstr =
      '<div class="campusListPanel"><div class="listTabs"><ul><li class="listTabs_item listTabs_itemActive">ALL</li><li class="listTabs_item">Primary</li><li class="listTabs_item">Secondary</li><li class="listTabs_item">High</li></ul></div><div class="campusList"><div class="campusListLeft"><li class="campus_item"><a href="http://jiaoke-en.suis.com.cn"target="_blank">Jiao Ke,ShangHai</a></li><li class="campus_item"><a href="http://hongqiao-en.suis.com.cn"target="_blank">Hong Qiao,ShangHai</a></li><li class="campus_item"><a href="http://shangyin-en.suis.com.cn"target="_blank">Shang Yin,ShangHai</a></li><li class="campus_item"><a href="http://gubei-en.suis.com.cn"target="_blank">Gu Bei,ShangHai</a></li><li class="campus_item"><a href="http://pudong-en.suis.com.cn"target="_blank">Pu Dong,ShangHai</a></li></div><div class="campusListRight"><li class="campus_item"><a href="http://wanyuan-en.suis.com.cn"target="_blank">Wan Yuan,ShangHai</a></li><li class="campus_item"><a href="http://wuxi-en.suis.com.cn"target="_blank">Wuxi</a></li><li class="campus_item"><a href="http://wenzhou-en.suis.com.cn"target="_blank">Wenzhou</a></li><li class="campus_item"><a href="http://xiamen-en.suis.com.cn"target="_blank">Xiamen</a></li></div></div></div>'
  } else {
    var clstr =
      '<div class="campusListPanel"><div class="listTabs"><ul><li class="listTabs_item listTabs_itemActive">所有校区</li><li class="listTabs_item">小学校区</li><li class="listTabs_item">初中校区</li><li class="listTabs_item">高中校区</li></ul></div><div class="campusList"><div class="campusListLeft"><li class="campus_item"><a href="http://jiaoke.suis.com.cn"target="_blank">教科校区</a></li><li class="campus_item"><a href="http://hongqiao.suis.com.cn"target="_blank">虹桥校区</a></li><li class="campus_item"><a href="http://shangyin.suis.com.cn"target="_blank">尚音校区</a></li><li class="campus_item"><a href="http://gubei.suis.com.cn"target="_blank">古北校区</a></li><li class="campus_item"><a href="http://pudong.suis.com.cn"target="_blank">浦东校区</a></li></div><div class="campusListRight"><li class="campus_item"><a href="http://wanyuan.suis.com.cn"target="_blank">万源校区</a></li><li class="campus_item"><a href="http://wuxi.suis.com.cn"target="_blank">无锡校区</a></li><li class="campus_item"><a href="http://wenzhou.suis.com.cn"target="_blank">温州校区</a></li><li class="campus_item"><a href="http://xiamen.suis.com.cn"target="_blank">厦门校区</a></li></div></div></div>'
  }
  jQuery("#main-nav li.menu-item-608").append(clstr)
  camLbindEvent();
  handleOver(0);
  handleOver(4);
})

function handleOver(index) {
  jQuery(".campus_item a").css("color", "#00499D");
  jQuery(".campus_item a").css("cursor", "pointer");
  jQuery(".campus_item a").attr("onclick", "");
  jQuery(".listTabs_item:eq(" + index + ")").addClass("listTabs_itemActive");
  jQuery(".listTabs_item:eq(" + (index + 4) + ")").addClass("listTabs_itemActive");
  switch (index) {
    case 0:
    case 4:
      break;
    case 1:
    case 5:
      disableCampus([0, 9, 3, 14]);
      break;
    case 2:
    case 6:
      disableCampus([1, 10]);
      break;
    case 3:
    case 7:
      disableCampus([1, 10, 2, 11, 4, 13]);
      break;
  }
}

function disableCampus(arr) {
  for (var i = 0; i < arr.length; i++) {
    jQuery(".campus_item a:eq(" + arr[i] + ")").css("color", "#999");
    jQuery(".campus_item a:eq(" + arr[i] + ")").css("cursor", "not-allowed");
    jQuery(".campus_item a:eq(" + arr[i] + ")").attr("onclick", "return false");
  }
}

function camLbindEvent() {
  jQuery(".listTabs_item").mouseover(function () {
    jQuery(".listTabs_item").removeClass("listTabs_itemActive");
    handleOver(jQuery(this).index());
  })
  jQuery("#main-nav li.menu-item-608").mouseout(function () {
    jQuery(".campusListPanel").css('visibility', 'hidden')
  })
  jQuery("#main-nav li.menu-item-608").mouseover(function () {
    jQuery(".campusListPanel").css('visibility', 'visible')
  })
}
