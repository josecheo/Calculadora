function dis(value) 
{ 
    document.getElementById("resultado").value+=value 
    
} 

function clr() 
         { 
             document.getElementById("resultado").value = "" 
         } 
         function igual() 
         { 
             let x = document.getElementById("resultado").value 
             let y = eval(x) 
             document.getElementById("resultado").value = y 
         } 