function getparams(){
    let params=new URLSearchParams(window.location.search);
    let name=params.get("name");
    let email=params.get("email");
    return {name,email};
}
let avatar=document.querySelector(".avatar");
let storedFile = localStorage.getItem("uploadedFile");

      if (storedFile) {
    // let img = document.createElement("img");
    avatar = storedFile;
     
}     else {
    console.log("No file found!");
}
window.onload = function() {
    let {name, email} = getparams();
    if (name && email) {
        let message=document.querySelector(".message");
        let message2=document.querySelector(".message2");
        let ticket=document.querySelector(".ticket");
        
        

       
        let nameSpan = `<span class="gradient-text">${name}</span>`;
        message.innerHTML = `Congrats, ${nameSpan}!, <br> Your ticket has been booked successfully!`;
        message2.innerHTML = `We have emailed your ticket to <span class="gradient-text">${email}</span>.`;
        
         
        ticket.innerHTML = `
            <div class="ticket-header">
                <img src="./assets/images/logo-mark.svg" alt="logo">
                <span>Coding Conf</span>
            </div>
            <div class="ticket-details">
                <span>Jan 31, 2025 / Austin, TX</span>
            </div>
            <div class="ticket-name">
                <img class ="avatar"src="${avatar}" alt="avatar">
                <div>
                    <span class="gradient-text">${name}</span><br>
                   
                </div>
            </div>
            <div class="ticket-id">#0609</div>
        `;
    }
};
