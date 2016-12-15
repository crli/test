const Tool = {};
/**
 * 发送ajax请求和服务器交互
 * @param {object} mySetting 配置ajax的配置
 */
Tool.ajax = function (mySetting) {

    var setting = {
        url: window.location.pathname, //默认ajax请求地址
        async: true, //true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false
        type: 'GET', //请求的方式
        data: {}, //发给服务器的数据
        dataType: 'json',
        success: function (text) {}, //请求成功执行方法
        error: function () {} //请求失败执行方法
    };


    var aData = []; //存储数据
    var sData = ''; //拼接数据
    //属性覆盖
    for (var attr in mySetting) {
        setting[attr] = mySetting[attr];
    }
    if(setting.data){
        for (var attr in setting.data) {
            aData.push(attr + '=' + filter(setting.data[attr]));
        }
        sData = aData.join('&');
    }
    setting.type = setting.type.toUpperCase();

    var xhr = new XMLHttpRequest();
    try {
        if (setting.type == 'GET') { //get方式请求
            if(sData.length){
                sData = setting.url + '?' + sData;
                xhr.open(setting.type, sData + '&' + new Date().getTime(), setting.async);
            }else{
                sData = setting.url;
                xhr.open(setting.type, sData , setting.async);
            }
            xhr.send();
        } else { //post方式请求
            xhr.open(setting.type, setting.url, setting.async);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(sData);
        }
    } catch (e) {
        return httpEnd();
    }

    if (setting.async) {
        xhr.addEventListener('readystatechange', httpEnd, false);
    } else {
        httpEnd();
    }

    function httpEnd() {
        if (xhr.readyState == 4) {
            var head = xhr.getAllResponseHeaders();
            var response = xhr.responseText;
            //将服务器返回的数据，转换成json

            if (/application\/json/.test(head) || setting.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
                response = JSON.parse(response);
            }

            if (xhr.status == 200) {
                setting.success(response, setting, xhr);
            } else {
                setting.error(setting, xhr);
            }
        }
    }
    xhr.end = function () {
        xhr.removeEventListener('readystatechange', httpEnd, false);
    }

    function filter(str) { //特殊字符转义
        str += ''; //隐式转换
        str = str.replace(/%/g, '%25');
        str = str.replace(/\+/g, '%2B');
        str = str.replace(/ /g, '%20');
        str = str.replace(/\//g, '%2F');
        str = str.replace(/\?/g, '%3F');
        str = str.replace(/&/g, '%26');
        str = str.replace(/\=/g, '&3D');
        str = str.replace(/#/g, '%23');
        return str;
    }
    return xhr;
};
/**
 * 封装ajax post请求
 * @param {string} pathname 服务器请求地址
 * @param {object} data     发送给服务器的数据
 * @param {function} success  请求成功执行方法
 * @param {function} error    请求失败执行方法
 */
Tool.post = function (pathname, data, success, error) {
    var setting = {
        url: pathname, //默认ajax请求地址
        type: 'POST', //请求的方式
        data: data, //发给服务器的数据
        success: success || function () {}, //请求成功执行方法
        error: error || function () {} //请求失败执行方法
    };
    return Tool.ajax(setting);
};
/**
 * 封装ajax get请求
 * @param {string} pathname 服务器请求地址
 * @param {object} data     发送给服务器的数据
 * @param {function} success  请求成功执行方法
 * @param {function} error    请求失败执行方法
 */
Tool.get = function (pathname, data, success, error) {
    var setting = {
        url: pathname, //默认ajax请求地址
        type: 'GET', //请求的方式
        data: data, //发给服务器的数据
        success: success || function () {}, //请求成功执行方法
        error: error || function () {} //请求失败执行方法
    };
    return Tool.ajax(setting);
};

/*
    合并对象属性
*/
Tool.merged = (...arg) => {
    var obj = {};
    for (let i=0;i<arg.length;i++) {
        
        for (let key in arg[i]) {
            let curObj = arg[i][key];
            
            if (Tool.isJson(curObj)) {
                if (Tool.isJson(obj[key])) {
                    obj[key] = Tool.merged(obj[key], curObj); // obj 此属性已经是对象，则和该对象原来的属性合并
                } else {
                    obj[key] = Tool.merged(curObj); // obj 此属性不是对象，则和该对象原来的属性合并
                }
            } else {
                obj[key] = curObj; //属性不是obj
            }
        }
        
    }
    return obj;
};

/*
    判断对象是不是Json
*/
Tool.isJson = (obj) => {
    return typeof(obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length; //true 是 false不是
}

/*
    判断对象是不是数组
*/
Tool.isArray = (arr) => {
    return Object.prototype.toString.call(arr).toLowerCase() === '[object array]'; //true 是 false不是
}

export default Tool;