jQuery(document).ready(function () {
  if (window.location.href.indexOf('en.suis.com.cn') > -1) {
    var clstr =
      '<div class="campusListPanel"><div class="listTabs"><ul><li class="listTabs_item listTabs_itemActive">ALL</li><li class="listTabs_item">Primary</li><li class="listTabs_item">Secondary</li><li class="listTabs_item">High</li></ul></div><div class="campusList"><div class="campusListLeft"><li class="campus_item"><a href="https://jiaoke-en.suis.com.cn" target="_blank">Jiao Ke,ShangHai</a></li><li class="campus_item hongqiao"><div class="hqsub"><a href="https://hongqiao-en.suis.com.cn" target="_blank" class="hqsub_item">Domestic</a><a href="https://hongqiaois-en.suis.com.cn" target="_blank" class="hqsub_item">International</a></div><a href="#" target="_blank">Hong Qiao,ShangHai</a></li><li class="campus_item"><a href="https://shangyin-en.suis.com.cn" target="_blank">Shang Yin,ShangHai</a></li><li class="campus_item"><a href="https://gubei-en.suis.com.cn" target="_blank">Gu Bei,ShangHai</a></li><li class="campus_item"><a href="https://pudong-en.suis.com.cn" target="_blank">Pu Dong,ShangHai</a></li></div><div class="campusListRight"><li class="campus_item"><a href="https://wanyuan-en.suis.com.cn" target="_blank">Wan Yuan,ShangHai</a></li><li class="campus_item"><a href="https://wuxi-en.suis.com.cn" target="_blank">Wuxi</a></li><li class="campus_item"><a href="https://wenzhou-en.suis.com.cn" target="_blank">Wenzhou</a></li><li class="campus_item"><a href="https://xiamen-en.suis.com.cn" target="_blank">Xiamen</a></li></div></div></div>'
  } else {
    var clstr =
      '<div class="campusListPanel"><div class="listTabs"><ul><li class="listTabs_item listTabs_itemActive">所有校区</li><li class="listTabs_item">小学校区</li><li class="listTabs_item">初中校区</li><li class="listTabs_item">高中校区</li></ul></div><div class="campusList"><div class="campusListLeft"><li class="campus_item"><a href="https://jiaoke.suis.com.cn" target="_blank">教科校区</a></li><li class="campus_item hongqiao"><div class="hqsub"><a href="https://hongqiao.suis.com.cn" target="_blank" class="hqsub_item">虹桥国内部</a><a href="https://hongqiaois.suis.com.cn" target="_blank" class="hqsub_item">虹桥国际部</a></div><a href="#">虹桥校区</a></li><li class="campus_item"><a href="https://shangyin.suis.com.cn" target="_blank">尚音校区</a></li><li class="campus_item"><a href="https://gubei.suis.com.cn" target="_blank">古北校区</a></li><li class="campus_item"><a href="https://pudong.suis.com.cn" target="_blank">浦东校区</a></li></div><div class="campusListRight"><li class="campus_item"><a href="https://wanyuan.suis.com.cn" target="_blank">万源校区</a></li><li class="campus_item"><a href="https://wuxi.suis.com.cn" target="_blank">无锡校区</a></li><li class="campus_item"><a href="https://wenzhou.suis.com.cn" target="_blank">温州校区</a></li><li class="campus_item"><a href="https://xiamen.suis.com.cn" target="_blank">厦门校区</a></li></div></div></div>'
  }
  jQuery("#main-nav li.menu-item-608").append(clstr);
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
      disableCampus([0, 11, 5, 16]);
      break;
    case 2:
    case 6:
      disableCampus([1, 2, 3, 12, 13, 14]);
      break;
    case 3:
    case 7:
      disableCampus([1,2,3, 12,13,14, 4, 15, 6, 17]);
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
