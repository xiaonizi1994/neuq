/**
 * Created by Administrator on 2016/6/3.
 */
window.onload=function(){

    var pic=document.getElementsByClassName("picScroll")[0];
    var pre=document.getElementsByClassName("picScroll")[0].getElementsByClassName("pre")[0];//getElementsByClassName("pre")[0];
    var next=document.getElementsByClassName("picScroll")[0].getElementsByClassName("next")[0];
    var ul=document.getElementsByClassName("picScroll")[0].getElementsByTagName("ul")[0];//getElementsByTagName("li");
    var animated=false;
    var time;
    ul.style.left="-1233px";
    function animate(offset){
        var left=parseInt(ul.style.left)+offset;
        var time=1000;
        var intevar=50;
        var speed=offset/(time/intevar);
        function go() {
            if (offset > 0 && parseInt(ul.style.left) < left || offset< 0 && parseInt(ul.style.left) > left) {
                ul.style.left = parseInt(ul.style.left) +speed + "px";
                setTimeout(go,intevar);
                animated=true;
            }
            else {
                ul.style.left = left + "px";
                if (left > -1233) {
                    ul.style.left = "-2466px";
                }
                if (left < -2466) {
                    ul.style.left = "-1233px";
                }
                animated=false;
            }
        }
        go();
    }
    function play(){
        time=setInterval(function(){
            if(!animated) {
                animate(-20);
                animated=true;
            }
        },50);

    }
    function stop(){
        animated=false;
        clearInterval(time);
    }

   //animate(6000);
    pre.onclick=function(){
        if(!animated) {
            animate(1233);
        }
    }
    next.onclick=function(){
        if(!animated){
        animate(-1233);
        }
    }
    play();
    pic.onmouseout=play;
    pic.onmouseover=stop;



}