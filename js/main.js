// 兼容旧版
if(meting_music_api===""){
    meting_api = "https://api.mizore.cn/meting/api.php";
}
var meting_api =
  "https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";

$.ajax({
//   url: "https://api.mizore.cn/meting/api.php?server=netease&type=playlist&id=20173709",
  url: meting_music_api,
  data:{
    server: music_server,
    type: music_type,
    id: music_id
  },
  dataType: "json",
  success: function (audio) {
    const ap = new APlayer({
        container: music_fixed === false ? document.getElementById('aplayer-inner') : document.getElementById('aplayer-fixed') ,
        audio: audio,
        fixed: music_fixed === false ? false : true,
        autoplay: music_autoplay,
        order: music_order,
        listFolded :true,
        volum: music_volume,
        mini: music_fixed === true ? true:music_mini,
        lrcType: 3,
        preload:"auto",
        loop: music_loop

        
    });
  },
});
