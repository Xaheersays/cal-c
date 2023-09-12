document.addEventListener('DOMContentLoaded',function(){

let keys = document.getElementsByClassName('btn');
var ip   = document.getElementsByClassName('div-ip-nums')[0]
var exp  = ip.innerHTML
var reset = document.getElementById("reset")
var equal = document.getElementById('btns-eq')
reset.addEventListener('click',Reset)
equal.addEventListener('click',Evaluate)
var flag = false;


for (let key of keys){
    // console.log(key)
    key.addEventListener("click",build)
}

function Evaluate(event){
    flag= true;
    // console.log(exp)
    if (exp==="" || (!exp.includes('+') && !exp.includes('-') && !exp.includes('/')  && !exp.includes('*')) ){
        console.log('condi')
        if (exp.includes('w')){
            exp = ""
        }
        ip.innerHTML = exp;
    }
    else{
        let res = "";
        try{
            res = eval(exp)
        }
        catch{
            res = "wrong query"
        }
        ip.innerHTML = res
        exp=ip.innerHTML

    }
    
}


function Reset(event){
    exp = ""
    ip.innerHTML=exp
}

function build(event){
    let key = event.target
    let curr_key_val = key.innerHTML;
    if (curr_key_val=="DEL"){
        // console.log(exp)
        if (exp.includes('w') || flag ===true){
            // console.log(1)
            ip.innerHTML= ""
            flag = false
        }
        else{
            
            ip.innerHTML = ip.innerHTML.slice(0, -1)
        }
        exp = ip.innerHTML
    }
    else if (!exp.includes("w")){
    ip.innerHTML = exp + curr_key_val

    }
    else {
        ip.innerHTML=curr_key_val

    }
    exp = ip.innerHTML

}


});