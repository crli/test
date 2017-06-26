import '@/libs/tools/flexible';
import '@/libs/css/normalize';
import '@/css/common';
import '@/index.html';
import '@/css/index.scss';
$("body").css("background","blue")
$("#box").html("你2好222142111")

import {getJSON} from '@/libs/js/ajax';
getJSON("https://api.github.com/search/users?q=1").then(function(json) {
  console.log('Contents: ' + json.items[0].id);
}, function(error) {
  console.error('出错了', error);
});