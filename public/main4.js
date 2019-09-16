let get = JSON.parse(localStorage.getItem('vacations'));

const list = document.querySelector('.htag');
const list2 = document.querySelector('.htag2');
const list3 = document.querySelector('.htag3');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
for(let i =0; i < get.length;i++){
    
    if(get[i].country==='australia'){
        const row = document.createElement('h4');
        row.innerHTML = `<h4>${get[i].city} - ${get[i].state} - ${get[i].country} </h4>`;
        list.appendChild(row);
        counter1++;
        
    }
    else if (get[i].country==='canada'){
        const row2 = document.createElement('h4');
        row2.innerHTML = `<h4>${get[i].city} - ${get[i].state} - ${get[i].country} </h4>`;
        list2.appendChild(row2);
        counter2++;
        
    }else{
        const row3 = document.createElement('h4');
        row3.innerHTML = `<h4>${get[i].city} - ${get[i].state} - ${get[i].country} </h4>`;
        list3.appendChild(row3);
        counter3++;
        
    }

}

let f1 = false;
let f2 = false;
let f3 = false;

let x = document.getElementsByClassName('htag');
let y = document.getElementsByClassName('htag2');
let z = document.getElementsByClassName('htag3');
let a = document.getElementsByClassName('alter1');
let b = document.getElementsByClassName('alter2');
let c = document.getElementsByClassName('alter3');

if(counter1 ==0){
    f1 = true;
    x[0].style.display='none';
    
}
if (counter2==0){
    f2 = true;
    y[0].style.display='none';
    
    
}if(counter3 ==0){
    f3 = true;
    z[0].style.display='none';
   
}

console.log(f1 , f2 ,f3);
if(f1==true && f2== true && f3 ==true){
    let n = document.getElementsByClassName('.show');
    n[0].style.display='true';
  
}
if(f1==false && f2== false && f3 ==false){
    x[0].style.width="33.33%";
    y[0].style.width="33.33%";
    z[0].style.width="33.33%";
    
}
if(f1==true && f2==true && f3==false){
    z[0].style.width="100.00%";
    c[0].style.width="700px";
    c[0].style.height="500px";
    c[1].style.width="700px";
    c[1].style.height="500px";
    c[2].style.width="700px";
    c[2].style.height="500px";
   
}
if(f1==true && f2==false && f3==true){
    y[0].style.width="100.00%";
    b[0].style.width="700px";
    b[0].style.height="500px";
    b[1].style.width="700px";
    b[1].style.height="500px";
    b[2].style.width="700px";
    b[2].style.height="500px";
    
}
if(f1==false && f2==true && f3==true){
    x[0].style.width="100.00%";
    a[0].style.width="700px";
    a[0].style.height="500px";
    a[1].style.width="700px";
    a[1].style.height="500px";
    a[2].style.width="700px";
    a[2].style.height="500px";
    
}
if(f1==true && f2==false && f3==false){
    
    y[0].style.width="50.00%";
    z[0].style.width="50.00%";
    
    b[0].style.width="450px";
    b[0].style.height="300px";
    b[1].style.width="450px";
    b[1].style.height="300px";
    b[2].style.width="450px";
    b[2].style.height="300px";

    c[0].style.width="450px";
    c[0].style.height="300px";
    c[1].style.width="450px";
    c[1].style.height="300px";
    c[2].style.width="450px";
    c[2].style.height="300px";
    
}
if(f1==false && f2==true && f3==false){
    x[0].style.width="50.00%";
    z[0].style.width="50.00%";
    a[0].style.width="450px";
    a[0].style.height="300px";
    a[1].style.width="450px";
    a[1].style.height="300px";
    a[2].style.width="450px";
    a[2].style.height="300px";
    c[0].style.width="450px";
    c[0].style.height="300px";
    c[1].style.width="450px";
    c[1].style.height="300px";
    c[2].style.width="450px";
    c[2].style.height="300px";
    
}
if(f1==false && f2==false && f3==true){
    x[0].style.width="50.00%";
    y[0].style.width="50.00%";
    a[0].style.width="450px";
    a[0].style.height="300px";
    a[1].style.width="450px";
    a[1].style.height="300px";
    a[2].style.width="450px";
    a[2].style.height="300px";
    b[0].style.width="450px";
    b[0].style.height="300px";
    b[1].style.width="450px";
    b[1].style.height="300px";
    b[2].style.width="450px";
    b[2].style.height="300px";
    
}
let slideIndex = 0; 
showSlides(); // call showslide method 
   
function showSlides() 
{ 
    let i; 
   
    // get the array of divs' with classname image-sliderfade 
    let slides1 = document.getElementsByClassName('alter1');
    let slides2 = document.getElementsByClassName('alter2');
    let slides3 = document.getElementsByClassName('alter3');
     
    // get the array of divs' with classname dot 
    
    for (i = 0; i < slides1.length; i++) { 
        
        slides1[i].style.display = "none"; 
        slides2[i].style.display = "none"; 
        slides3[i].style.display = "none";  
      
    } 
   
     // increase by 1, Global variable 
    slideIndex++;  
   
     // check for boundary 
    if (slideIndex > slides1.length)  
    { 
        slideIndex = 1; 
    } 
   
    slides1[slideIndex - 1].style.display = "block"; 
    slides2[slideIndex - 1].style.display = "block"; 
    slides3[slideIndex - 1].style.display = "block"; 
  
    setTimeout(showSlides, 4000);  

} 





