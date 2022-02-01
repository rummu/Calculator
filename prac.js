let element= document.getElementById('output');
let outputValue='';
let sc=document.getElementById('screen');
 let buttons=document.querySelectorAll('button');
 for( item of buttons){
     item.addEventListener('click',(e)=>{
         buttonText=e.target.innerText;
       
         if (buttonText=='×') {
             buttonText='*';
             outputValue+=buttonText;
             output.value=outputValue;
             
         }
         else if (buttonText=='÷') {
             buttonText='/';
             outputValue+=buttonText;
             output.value=outputValue;


         }
         else if(buttonText=='C'){
            
             outputValue='';
             output.value=outputValue;


         }
        else if (buttonText=='=') {
            outputValue=eval(outputValue);
            sc.value=outputValue;
            
        }
         else if(buttonText=='BACK'){
             buttonText='';
             outputValue = outputValue.slice(0,-1) ;
             output.value = outputValue;
             


         }
         else{
             outputValue+=buttonText;
             output.value=outputValue;
         }

     })
 }
