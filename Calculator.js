let input=document.getElementById("takeinput");

let buttons=document.querySelectorAll('button')

//To store result

let res="";

let arr=Array.from(buttons)
arr.forEach( button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            res=eval(res);
            input.value=res;
        }
        else if(input.value =="undefined"){
            res="";
            input.value= 0;
        }
        else if(e.target.innerHTML == 'AC'){
            res="";
            input.value=res;
        }
        else if(e.target.innerHTML == 'Del'){
            res=res.substring(0,res.length-1)
            input.value=res
        }
        else if(e.target.innerHTML == 'undefined'){
            alert("gv")
        }
        else{
        res+= e.target.innerHTML;
        input.value=res;
        }
        
    })
})