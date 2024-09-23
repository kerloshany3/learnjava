const mybutton = document.getElementById("myButton");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 1000;
let randomnum;
mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * max);
    label1.textContent= "$" + randomnum;

    randomnum = Math.floor(Math.random() * max);
    label2.textContent= "$"+randomnum;

    randomnum = Math.floor(Math.random() * max);
    label3.textContent= "$"+randomnum;
    
}

























/* 
    i=0;
mybutton.addEventListener('click' , () => { i = i+10 ; 
    label1.textContent = "$" + i;
})

mybutton.addEventListener('click' , () => { i = i+20 ; 
    label2.textContent = "$" + i;
})

mybutton.addEventListener('click' , () => { i = i+30 ; 
    label3.textContent = "$" + i;
})

let shit = 0; */