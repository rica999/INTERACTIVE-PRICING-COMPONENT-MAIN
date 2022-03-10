let bartype = document.getElementById("bartype")
let pageviews = document.getElementById("pageviews")
let price1 = document.getElementById("price1")
let price2 = document.getElementById("price2")
let check = document.getElementById("check")

function Price(){
    if(bartype.value==0){
        pageviews.textContent="10K PAGEVIEWS"
        if(check.checked==true){
            price1.textContent=8-(8*0.25)
            price2.textContent=8-(8*0.25)
        }
        else{
            price1.textContent=8
            price2.textContent=8
        }
    }
    if(bartype.value==25){
        pageviews.textContent="50K PAGEVIEWS"
        if(check.checked==true){
            price1.textContent=12-(12*0.25)
            price2.textContent=12-(12*0.25)
        }
        else{
            price1.textContent=12
            price2.textContent=12
        }
    }
    if(bartype.value==50){
        pageviews.textContent="100K PAGEVIEWS"
        if(check.checked==true){
            price1.textContent=16-(16*0.25)
            price2.textContent=16-(16*0.25)
        }
        else{
            price1.textContent=16
            price2.textContent=16
        }
    }
    if(bartype.value==75){
        pageviews.textContent="500K PAGEVIEWS"
        if(check.checked==true){
            price1.textContent=24-(24*0.25)
            price2.textContent=24-(24*0.25)
        }
        else{
            price1.textContent=24
            price2.textContent=24-(24*0.25)
        }
    }
    if(bartype.value==100){
        pageviews.textContent="1M PAGEVIEWS"
        if(check.checked==true){
            price1.textContent=36-(36*0.25)
            price2.textContent=36-(36*0.25)
        }
        else{
            price1.textContent=36
            price2.textContent=36
        }
    }
}
bartype.addEventListener('input', Price);
check.addEventListener("click",function(){
    if(check.checked==false){
        Price()
    }
    else{
        Price()
    }
})
