    //httpUrl 请求地址
    /*  data = {
            page: 1;
            count: 10;
            type: "video"
        } 
    */
    //callback(xhr)处理数据的函数
    function getAjax (httpUrl, data, callback) {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }else {
            xhr = new ActiveXObject();
        }
        xhr.open('GET', httpUrl + parseData(data));
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                // 回调函数
                callback(xhr);
            }
        }
    }
    
    function parseData (data) {
        let dataStr = "?";
        for (let key in data) {
            dataStr = dataStr + key + '=' + data[key] + '&';
        }
        return dataStr.substr(0, dataStr.length - 1)
    }