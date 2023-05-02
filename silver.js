function names() { 
    
    let name1= document.getElementById("name1").value;
    let name2= document.getElementById("name2").value;
    let phone= document.getElementById("phone").value;
    let email= document.getElementById("email").value;
    let textarea= document.getElementById("textarea").value;
    let box= document.getElementById("box");
    let check;
    let obj = document.createElement('div'); 

     if (box.checked == true){
        obj.style.cssText = 'border: 2px solid red';
      } else {
        obj.style.cssText = 'border: 2px solid black';
      }
   

    
    obj.id = "testii"; 
    
    obj.innerText= name1 + " " + name2 + " " + email + " " + phone + " " + textarea;
    document.getElementById("testi2").appendChild(obj);


    document.getElementById("name1").value = "";
    document.getElementById("name2").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("textarea").value="";
   

    
    document.getElementById("info").innerHTML= "Kiitos kun täytit tietosi " ;
    

}

    
    