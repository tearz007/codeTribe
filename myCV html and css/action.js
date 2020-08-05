function navigate(){
        window.location = "cv.html";
}

window.onload=function(){
    
 /* var login_btn = document.querySelector(".btn");
    login_btn.addEventListener('click', function () {
    window.location = "cv.html";
    });*/
    var btn = document.querySelector(".nev_btn");
    var home = document.querySelector("#act");
    var education = document.querySelector("#act1");
    var experiance = document.querySelector("#act2");
    var skill = document.querySelector("#act3");
    var contact = document.querySelector("#act4");


   
    btn.addEventListener('click', function () {

        this.classList.toggle("active");
    });

    home.addEventListener('click', function () {
        // alert("li 1");
        document.getElementById("edu").style.display = "none";
        document.getElementById("exp").style.display = "none";
        document.getElementById("skill").style.display = "none";
        document.getElementById("contact").style.display = "none";
    });
    education.addEventListener('click', function () { 
      
        document.getElementById("edu").style.display="block";
        document.getElementById("exp").style.display = "none";
        document.getElementById("skill").style.display = "none";
        document.getElementById("contact").style.display = "none";   
    });
    experiance.addEventListener('click', function () {   
        document.getElementById("edu").style.display = "none";
        document.getElementById("exp").style.display = "block";
        document.getElementById("skill").style.display = "none";
        document.getElementById("contact").style.display = "none";
    });
    skill.addEventListener('click', function () {
        document.getElementById("edu").style.display = "none";
        document.getElementById("exp").style.display = "none";
        document.getElementById("skill").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.display = "none";
    });
    contact.addEventListener('click', function () {
        document.getElementById("edu").style.display = "none";
        document.getElementById("exp").style.display = "none";
        document.getElementById("skill").style.display = "none";
        document.getElementById("contact").style.display = "block";
    });
}


