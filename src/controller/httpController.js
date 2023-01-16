const axios = require('axios');

module.exports = {
    get: async function(originalUrl, data) {
        var result = null;
    
        var url = originalUrl;
        var first = true;
    
        for(var key in data){
            var conn = '&';
    
            if (first){
                conn = '?';
            }
    
            url += (conn + key + "=" + data[key]);
            first = false;
        }
    
        const response = await axios.get(url);
    
        if(response.status == 200){
            result = response.data;
        }
    
        return result;
    },
    
    post: async function(originalUrl, data) {
        var result = null;
    
        const response = await axios.post(
            originalUrl,
            JSON.stringify(data),
            { headers: { 'Content-Type': 'application/json'} }
            );
    
        if(response.status == 200){
            result = response.data;
        }
    
        return result;
    },
};