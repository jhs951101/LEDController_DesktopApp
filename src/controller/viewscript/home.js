const path = require('path');
const ledController = require(path.join(__dirname, '..', 'ledController.js'));

var titleLbl = document.getElementById('title');
var red_btn = document.getElementById('red_btn');
var yellow_btn = document.getElementById('yellow_btn');
var green_btn = document.getElementById('green_btn');

window.onload = async function(){
    var name = await ledController.getLed();

    if(name != null){
        titleLbl.innerHTML = "Color: " + name.toUpperCase();
    }
    else{
        alert('통신 중 오류가 발생하였습니다.');
    }
};

async function setLedName(name){
    if(await ledController.setLed(name)){
        titleLbl.innerHTML = "Color: " + name.toUpperCase();
    }
    else{
        alert('통신 중 오류가 발생하였습니다.');
    }
}

red_btn.addEventListener('click', function(){
    setLedName('red');
});

yellow_btn.addEventListener('click', function(){
    setLedName('yellow');
});

green_btn.addEventListener('click', function(){
    setLedName('green');
});