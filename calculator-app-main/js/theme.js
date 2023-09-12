document.addEventListener("DOMContentLoaded",function(){
    var ptr = 0;
    var  slider = document.getElementsByClassName("slide")[0]
    var circle = document.getElementsByClassName('circle')[0]
    // console.log(circle)
    slider.addEventListener('click',change)
    function change(event){
        // element = event.target
        ptr+=1
        if (ptr%3===0){
            // slider.remove("style","")
            slider.removeAttribute("style","justify-content: center")
        }
        else if(ptr%3===1){
            slider.setAttribute("style","justify-content: center");
        }
        else{
            slider.removeAttribute("style","justify-content: center");
            slider.setAttribute("style","justify-content:flex-end")
        }

    }
    
});
