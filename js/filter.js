const cart = document.querySelectorAll('.cart')
const cartAll = document.querySelectorAll('.section-card')
const title = document.querySelectorAll('.section-top-block .section-btn-a')
const tabcontent = document.querySelectorAll('.cart-tabcontent')



title.forEach((elem) =>{

tabcontent[0].style.display = 'flex'
title[0].classList.add('active-elem')
    elem.addEventListener('click' , function(e){
        for(let i = 0; i<title.length; i++){
            title[i].classList.remove('active-elem')
        }
        elem.classList.add('active-elem')
        for(let i = 0; i<tabcontent.length; i++){
            tabcontent[i].style.display = `none`
        }
        const tabname = e.target.dataset.id
            document.getElementById(tabname).style.display = 'flex'
          
    })
    for(let i = 0; i<tabcontent.length;i++){
        tabcontent[i].classList.add('tab-none')
    }

})