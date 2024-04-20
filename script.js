const btns = document.querySelectorAll('button')
const err = document.querySelector('.error')
const cnt = document.querySelector('.spa')

let count = 0

btns[0].addEventListener("click",()=>{
    count--
    if(count<0){
        count=0
        err.innerHTML= "<p>Error cannot go below 0</p>"
        err.style.cssText = `
            color:red
        `
    }
    else if(count==0){
        btns[2].style.cssText =`
            display:none
        ` 
    }
        cnt.innerHTML=`${count}`
})

btns[1].addEventListener("click",()=>{
    count++
    cnt.innerHTML=`${count}`
    btns[2].style.cssText =`
        display:inline
    ` 
})

btns[2].addEventListener("click",()=>{
    count=0
    cnt.innerHTML=`${count}`
    btns[2].style.cssText =`
        display:none
    ` 
})
