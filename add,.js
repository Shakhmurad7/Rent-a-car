const plus= document.getElementsByClassName('accardion-icon-plus')
const minus = document.getElementsByClassName('accardion-icon-minus')
const accardiontext = document.getElementsByClassName('accardion-p')
const accardion = document.getElementsByClassName('accardion-blok')

 

for(i=0; i<accardion.length; i++){
  accardion[i].addEventListener('click' , function(){
    this.classList.toggle('accardion-active')
  })      
}  



