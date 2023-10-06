const inputEl=document.getElementById("inputBox");
const btnEl=document.querySelectorAll("button");
let string ="";
let arr = Array.from(btnEl);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
         if(e.target.innerText =='='){
            string=eval(string);
            inputEl.value=string;
         }
        else if(e.target.innerText == 'AC'){
            string="";
            inputEl.value=string;
        }
        else if(e.target.innerText == 'DEL'){
            string = string.slice(0,-1);
            inputEl.value=string;
        }
        else{
            string += e.target.innerText;
            inputEl.value=string;
        }
    }) ;  
});


    
        

