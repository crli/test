import '@/libs/tools/flexible';
import '@/libs/css/normalize';
import '@/css/common';
import '@/about.html';
import '@/css/about.scss';
$("body").css("background","rgba(0,0,0,.8)")
import {getJSON} from '@/libs/js/ajax';
getJSON("https://api.github.com/search/users?q=1").then(function(json) {
  console.log('Contents: ' + json.items[0].id);
}, function(error) {
  console.error('出错了', error);
});