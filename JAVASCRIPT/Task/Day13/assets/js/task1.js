let title = document.getElementById("title")
title.textContent="Lets read..."

let para = document.querySelectorAll(".para")
para.forEach(function(para,index){
    para.textContent=`Paragraph ${index+1}`
})
