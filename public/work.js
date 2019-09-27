const TypeWriter = function(txtElement, words, wait = 200){
    this.txtElement = txtElement;
    this.words = words;
    this.txt= '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function(){
    
    // Get full text of current word
    const fulltxt = this.words[0];

    //check if deeleting
    if(this.isDeleting){
        //Remove a character
        this.txt = fulltxt.substring(0,this.txt.length-1);

    }else{
        //add a character
        this.txt = fulltxt.substring(0,this.txt.length+1);
    }
    //Insert txt into element
    this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;
    //Initial Type Speed
    
    let typeSpeed = 200;
    if(this.isDeleting){
        typeSpeed /=2;
    }
    // If word is complete
    if(!this.isDeleting && this.txt == fulltxt){
        //make a pause at end
        typeSpeed = this.wait;
        //set delete to true
        this.isDeleting = true;
        
    }else if (this.isDeleting && this.txt ==''){
        this.isDeleting = false;
    
        //Pause before start typing
        typeSpeed = 100;
    }

    setTimeout(()=>this.type(),typeSpeed)
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const txtElement2 = document.querySelector('.txt-type2');
    const txtElement3 = document.querySelector('.txt-type3');

    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const words2 = JSON.parse(txtElement2.getAttribute('data-words2'));
    const words3 = JSON.parse(txtElement3.getAttribute('data-words3'));

    const wait = txtElement.getAttribute('data-wait');
    const wait2 = txtElement2.getAttribute('data-wait2');
    const wait3 = txtElement3.getAttribute('data-wait3');

    new TypeWriter(txtElement,words,wait);
    new TypeWriter(txtElement2,words2,wait2);
    new TypeWriter(txtElement3,words3,wait3);

}



var slideIndex = 0; 

showSlides(); // call showslide method 
   
function showSlides() 
{ 
    var i; 
   
    // get the array of divs' with classname image-sliderfade 
    var slides = document.getElementsByClassName('slide');  
      
    // get the array of divs' with classname dot 
   // var dots = document.getElementsByClassName('dot');  
    
    for (i = 0; i < slides.length; i++) { 
        // initially set the display to  
        // none for every image. 
        slides[i].style.display = "none";  
      
    } 
   
     // increase by 1, Global variable 
    slideIndex++;  
   
     // check for boundary 
    if (slideIndex > slides.length)  
    { 
        slideIndex = 1; 
    } 
   
   /* for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className. 
                            replace(" active", ""); 
                           
    } */
   
    slides[slideIndex - 1].style.display = "block"; 
   // dots[slideIndex - 1].className += " active"; 
  
    // Change image every 2 seconds 
    setTimeout(showSlides, 4000);  
} 


