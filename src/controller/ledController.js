const path = require('path');
const appInfo = require(path.join(__dirname, 'components', 'appInfo.js'));
const httpController = require('./httpController.js');

module.exports = {
    getLed: async function() {
        var result = null;
        const response = await httpController.get(
            appInfo.serverDomain + 'getled.php',
            {}
        );
    
        if(response != null){
            if(response.success){
                result = response.name;
            }
        }
    
        return result;
    },
    
    setLed: async function(name) {
        var result = false;
        const response = await httpController.post(
            appInfo.serverDomain + 'setled.php',
            {
                name: name,
            }
        );
    
        if(response != null){
            result = response.success;
        }
    
        return result;
    },
};