let timerHr = document.querySelector('.timer-hr');
let timerMin = document.querySelector('.timer-mins');
let timerSec = document.querySelector('.timer-secs');
let ampm = document.querySelector('.AMPM');
let gud = document.querySelector('.gud');





let timer = ()=>{
    let date = new Date;
    let hrs = date.getHours();
    let sec = date.getMinutes();
    let min = date.getSeconds();

    timerHr.innerText = hrs;
    // console.log(timerHr.innerText);
    timerMin.innerText= sec;
    // console.log(timerMin.innerText);
    timerSec.innerText = min;
    // console.log(timerSec.innerText);

    if (hrs>=12){
        hrs = hrs - 12;
        ampm.innerText="PM"
        timerHr.innerText = hrs;
    }


let grab = document.querySelector('.breakfast');
if(hrs>=12 && hrs<4){
    grab.innerText="LET'S HAVE SOME LUNCH!!"
}
else if(hrs>=4 && hrs<10){
    grab.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING"
}
else if(hrs>=10 && hrs<7){
    grab.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
}
}

let btn = document.querySelector('.clk');
btn.addEventListener('click',()=>{
    let time = new Date();
    hrs = time.getHours();
    let selValue1 = document.getElementById('dropdown1');
    let selValue2 = document.getElementById('dropdown2');
    let selValue3 = document.getElementById('dropdown3');
    let selValue4 = document.getElementById('dropdown4');
   
    let img = document.querySelector('.jpg')
        // console.log(hrs,selValue1,selValue2,selValue3,selValue4);
    if(hrs === parseInt( selValue1.value)){
        gud.innerText="GOOD MORNING!! WAKE UP !!"
        img.src='goodmrng.png'
    }

    if(hrs === parseInt( selValue2.value)){
        gud.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
        img.src="Group.png"
    }
    if(hrs === parseInt( selValue3.value)){
        gud.innerText="GOOD EVENING !!"
        img.src="./Tea time.png"
    }
    if(hrs === parseInt( selValue4.value)){
        gud.innerText="GOOD NIGHT !!"
        img.src="./Sleep time.png"  
    }
   
    let up1 = document.querySelector('.update1');
    let up2 = document.querySelector('.update2');
    let up3 = document.querySelector('.update3');
    let up4 = document.querySelector('.update4'); 
    let all1 = selValue1.options[parseInt( selValue1.value)-1].innerText;
    let all2 = selValue1.options[parseInt( selValue2.value)-1].innerText;
    let all3 = selValue1.options[parseInt( selValue3.value)-1].innerText;
    let all4 = selValue1.options[parseInt( selValue4.value)-1].innerText;
    up1.innerText = `Wake Up Time : ${all1}`;
    up2.innerText = `Lunch Time : ${all2}`;
    up3.innerText = `Nap Time : ${all3}`;
    up4.innerText = `Night Time : ${all4}`;
   

})


setInterval(timer,1000)






