const getParamsFromUrl = (url) => {
    var result = {};
    const pm = url.split('?');
    const params = pm[1].split('&');

    for(var i=0; i<params.length; i++){
        var param = params[i].split('=');
        var key = param[0];
        var value = decodeURI(param[1], 'UTF-8');

        result[key] = value;
    }

    return result;
};

const setParamsToUrl = (url, params) => {
    var result = url;
    var first = true;

    if(params != null){
        for(var key in params){
            var ch = '';

            if(first){
                ch = "?";
                first = false;
            }
            else{
                ch = "&";
            }

            result += (ch + key + "=" + encodeURI(encodeURI(params[key]), 'UTF-8'));
        }
    }

    return result;
};