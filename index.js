easy=[
     0,9,0,0,5,3,7,0,6,
     6,7,0,1,9,0,0,5,0,
     5,0,4,0,0,2,0,0,1,
     4,0,0,6,0,0,2,3,0,
     3,1,0,0,0,9,0,6,5,
     0,0,0,5,3,0,0,8,7,
     0,0,0,0,2,5,9,0,0,
     0,0,1,9,0,0,5,0,3,
     0,5,3,8,0,0,0,7,0 
 ]

 medium=[
    9,0,0,0,0,8,5,0,0,
    0,0,5,0,0,4,0,0,0,
    7,2,0,9,1,0,0,0,0,
    6,4,0,8,0,0,0,1,0,
    0,0,0,0,0,0,0,6,0,
    8,0,0,0,0,0,2,0,0,
    0,5,0,0,0,0,0,2,0,
    0,0,0,0,5,0,1,7,4,
    0,0,3,0,9,0,0,0,0
]

hard=[
    0,0,0,0,8,0,0,1,0,
    7,0,0,0,0,1,0,2,0,
    0,8,0,0,0,2,3,0,0,
    0,0,5,0,0,0,4,0,9,
    2,0,1,0,0,9,8,7,0,
    0,0,9,0,0,0,0,3,0,
    0,0,0,6,9,0,0,0,0,
    0,0,0,0,7,0,0,8,3,
    0,0,0,4,0,0,0,0,0
]


window.onload = loadeasy();

y = document.getElementById(x);
 function loadeasy(){
     validatecolor(0,91);
      
     arr=easy;
     for(i=1;i<82;i++){
        y = document.getElementById("" + i);
        y.value = easy[i-1];
        if(y.value!=0){
            y.classList.add("inputpre");
            y.readOnly="true";
        }
        else{
            y.value="";
            y.classList.remove("inputpre");
            y.removeAttribute("readOnly");
        }
    }
 }
 function loadmedium(){
    validatecolor(0,91);
     
     arr=medium;
     for(i=1;i<82;i++){
     y= document.getElementById("" + i);
     y.value = medium[i-1];
     if(y.value!=0){
        y.classList.add("inputpre");
        y.readOnly="true";
    }
    else{
        y.value="";
        y.classList.remove("inputpre");
        y.removeAttribute("readOnly");
    }
     }
 }
 function loadhard(){
    validatecolor(0,91);
     
    arr=hard;
    for(i=1;i<82;i++){
    y= document.getElementById("" + i);
    y.value = hard[i-1];
    if(y.value!=0){
        y.classList.add("inputpre");
        y.readOnly="true";
    }
    else{
        y.value="";
        y.classList.remove("inputpre");
        y.removeAttribute("readOnly");
    }
    }
}
 
var x;

function validatecell(x){
    
   z=document.getElementById("" + x);
   z.classList.remove("indirectselect");
   z.classList.add("directselect"); 

    for(t=1;t<82;t++){
        x=t;
      xvalue = document.getElementById("" + x).value;
      
      flag=0;
    rowcheck = true;
    colcheck = true;
    boxcheck = true;
    column = x%9;
    if(column==0)
    column=9;

    if(column==9){
    row = x/9;
        }
    else{
    row = parseInt((x/9)+1);
    }
    
     for(i=column;i<82;i+=9){ 
        z = document.getElementById("" + i).value;  
        if(z == xvalue)
         flag++;
        
     }
      
     if(flag>1){
         flag=0;
         colcheck =  false;
     }
     else{
     flag=0;
     colcheck=true;
     
     }
     
    rowstart= ((row-1)*9+1); 
    r2=rowstart;
    
    for(i=0;i<9;i++)
    {   
        rowstart =r2+i ;
        z = document.getElementById("" + rowstart).value;
        if(z == xvalue)
            flag++;
    }
   
    if(flag>1){
        flag=0;
        rowcheck = false;
    }
    else{
    flag = 0;
    rowcheck = true;
    }
    
   for(k=1;k<10;k++){
    if(y.classList.contains("box"+k))
        {   
             z=document.getElementsByClassName("box"+k);
              
             for(i=0;i<z.length;i++){
                if(z[i].value==xvalue)
                 flag++;
             }
        }
    }
    if(flag>1){
        flag=0;
        boxcheck = false;
    }
    else{
    flag = 0;
    boxcheck = true;
    }

   if(xvalue<1)
   {
       rowcheck=colcheck=boxcheck = true;
   } 

    if(rowcheck==false || colcheck== false || boxcheck == false){
      checkarr[x]=1;
      validatecolor(1,x);
    }
    else{
        validatecolor(0,x);
    }


  }
}

  function validatecolor(a,x) {
      y= document.getElementById(x);
      if(a==1){
        y.classList.add("wrong");
      }
      else if(a==0&& x ==91){
          for(i=1;i<82;i++){
          y=document.getElementById(i);
      y.classList.remove("wrong");        
        }
        }
    else{
        y.classList.remove("wrong");
    }
      }

 function highlight(x){
    y=document.getElementById(x);
   
    column = x%9;
    if(column==0)
        column=9;

    if(column==9){
        row = x/9;
    }
    else{
        row = parseInt((x/9)+1);}
    for(i=column;i<82;i+=9){
        z = document.getElementById("" + i);
        z.classList.add("indirectselect");     
 }

    rowstart= ((row-1)*9+1); 
    r2=rowstart;
 
    for(i=0;i<9;i++)
    {   
     rowstart =r2+i ;
     z = document.getElementById("" + rowstart);
     z.classList.add("indirectselect");
    }

    for(k=1;k<10;k++){
    if(y.classList.contains("box"+k))
        {   
             z=document.getElementsByClassName("box"+k);
           
             for(i=0;i<z.length;i++){
                 z[i].classList.add("indirectselect");   
             }
            
        }
    }
    y=document.getElementById("" + x);
     
     
}


 function removehighlight(x){
    y=document.getElementById(x);
    y.classList.remove("directselect");
    column = x%9;
    if(column==0)
        column=9;

    if(column==9){
        row = x/9;
    }
    else{
        row = parseInt((x/9)+1);}
    for(i=column;i<82;i+=9){
        z = document.getElementById("" + i);
        z.classList.remove("indirectselect");     
    }  
    rowstart= ((row-1)*9+1); 
    r2=rowstart;

    for(i=0;i<9;i++)
    {   
    rowstart =r2+i ;
    z = document.getElementById("" + rowstart);
    z.classList.remove("indirectselect");
    }
    for(k=1;k<10;k++){
        if(y.classList.contains("box"+k))
            {   
                 z=document.getElementsByClassName("box"+k);
                 for(i=0;i<z.length;i++){
                     z[i].classList.remove("indirectselect");
                   
                 }
            }
        }

 }
  
 checkarr= [0,0,0,0,0,0,0,0,0];

 function validate(){
    checkarr= [0,0,0,0,0,0,0,0,0];
     result = false;
     sum=0;
     wrong=0;
     for(i=1;i<82;i++)
     {
         y=document.getElementById("" + i);
         
         if(Number(y.value)<10 && Number(y.value)>0)
           sum += Number(y.value);
        
           checkarr[y.value-1]++;
         
            
        }
         console.log(checkarr);
        for(i=0;i<9;i++){
            if(checkarr[i]!=9)
            wrong++;
        }
        console.log(wrong);
        console.log(sum);
         if(wrong ==0 && sum==405)
         alert("The Sudoku is solved successfully!")
         else
         alert("The Sudoku isnt solved yet. Try again.")

     }
     
 

