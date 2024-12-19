/*Javascript Document*/
const banner = document.getElementById("bannerFrame");
var i = 0;
var autoSwitch = true;

setInterval(function (params) {
    if(i == 2)
    {
        i = 0;
    }
    else{
        i++;
    }
    if(autoSwitch)
    {
        slide(i);
    }
}, 4000);

function slide(e)
{
    i = e;
    banner.style.left = ((0 - e)*100) + "%";    
}

function switcherOff(params) {
    if(autoSwitch){
        autoSwitch = false;
        setTimeout(() => {
            autoSwitch = true;
        }, 10000);    
    }
}