  var shareNode = '<div class="bdsharebuttonbox"><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a></div>';
  console.log("shareNode ready");
  if (document.querySelector("#fancy-header .wf-table")) {
    document.querySelector("#fancy-header .wf-table").innerHTML += shareNode;
    window._bd_share_config = {
      "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "1",
        "bdSize": "16"
      },
      "share": {},
      "image": {
        "viewList": ["tsina", "weixin", "sqq", "douban"],
        "viewText": "分享到：",
        "viewSize": "24"
      },
      "selectShare": {
        "bdContainerClass": null,
        "bdSelectMiniList": ["tsina", "weixin", "sqq", "douban"]
      }
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src =
      'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)
    ];
  }
