function passwordchecking(){
    const password=document.getElementById("password").value;
    const email = document.getElementById("email").value.trim();

    consterrors=[];
    if(!fullname){
        console.log("please enter your name");
        errors.push("name");
    }
    if(!email){
        console.log("please your email");
        errors.push("email");
    }
    if(!password){
        console.log("please your password");
        errors.push("password");
    }
    if(!errors.length === 0){
        console.log("form submitted successfully!");
        //You camn submit  the form or do something else here.

        
    }
}
function passwordchecking(){
    const password =document.getElementById("password").value;
    Commentmsg = document.getElementById("passwordmsg")
    console.log(password);
    if(password.length>8){
        Mesg.innerHTML= "<span class ='success'>password is strong</span>";
}else if(password.length>6){
    msg.innerHTML="<span class='warning' > password is medium</span>";
}else{ password.lenth>4
    msg.innerHTML="<span class= 'error'> password is weakasf</span>";

}
}