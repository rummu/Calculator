let screen=document.getElementById('screen');
let output=document.getElementById('output');
let outputvalue='';
let screenValue='';

 let buttons=document.querySelectorAll('button');
 for (item of buttons){
     item.addEventListener('click',(e)=>{
         buttonText=e.target.innerText;
         console.log('Button text is',buttonText);
         if (buttonText=='×') {
             buttonText='*'
             screenValue += buttonText;
             screen.value =screenValue;
             
         }
         else if (buttonText=='÷') {
             buttonText='/'
             screenValue += buttonText;
             screen.value =screenValue;
             
         }
         else if (buttonText=='BACK') {
             buttonText=''
             screenValue = screenValue.slice(0,-1) ;
             screen.value =screenValue;
             
         }
         else if (buttonText=='=') {
             output.value = eval(screenValue);
             
         }
         else if (buttonText=='C') {
             screenValue="";
             screen.value=screenValue;
             
         }
         else{
             screenValue+=buttonText;
             screen.value=screenValue;
         }
       
     })
 }