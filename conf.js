let btn=document.getElementById("btn");
let fname=document.querySelector("input[type='text']");
let email=document.querySelector("input[type='email']");
let errormessage=document.querySelectorAll(".error-message");
let upload=document.querySelectorAll(".upload")[0];
let upload2=document.querySelectorAll(".upload")[1];
document.getElementById("img").addEventListener("change", function(event) {
    let file = event.target.files[0];
   // Hide the upload button after file selection

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        
       
        reader.onload = function() {
           
            
            localStorage.setItem("uploadedFile", reader.result);
            upload.style.display = "none"; 
            upload2.style.display = "none"; 
            let img = document.getElementById("preview");
            img.src = reader.result;
            img.style.display = "block"; // Ensure it's visible
        
            
            console.log("File saved! You can access it on another page.");
        };
    }
});
btn.addEventListener("click",function(e){
    e.preventDefault();
   
    let name = fname ? fname.value : "";
    let mail = email ? email.value : "";
    if (name !== "" && email !== "") {
        namevalue = fname.value;
        mailvalue = email.value;
       
           console.log("redirecting to",window.location.href = `ticket.html?name=${encodeURIComponent(namevalue)}&email=${encodeURIComponent(mailvalue)}`); 
        } 
        
    if(name=="" ||mail==""){
        if (errormessage[0]) {
            errormessage[0].textContent = "⚠Please fill out all fields!";
        }
        if (errormessage[1]) {
            errormessage[1].textContent = "⚠Please fill out all fields!";
            
        }
      }else{
        fname.value="";
        email.value="";
        errormessage[0].textContent="";
        errormessage[1].textContent="";
       console.log("Form submitted successfully");

    }
})

