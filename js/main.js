window.onload = function(){
    var nav_a = document.getElementById("navbar-brand-hover");
    nav_a.onmouseover = function(){
        nav_a.classList.remove("icon--hired");
        nav_a.classList.add("icon--hired-dark");
    };
    nav_a.onmouseout= function(){
        nav_a.classList.remove("icon--hired-dark");
        nav_a.classList.add("icon--hired");
    };
    var submit_btn = document.getElementById("sign_in");
    submit_btn.onclick = function() {
        var email_val = document.getElementById("user_email").value;
        var passowrd_val = document.getElementById("user_password").value;
        var result=false;
        if (email_val!=""&&passowrd_val!="") {
            var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            result=pattern.test(email_val);
        } 
        if (result==false) {
            document.getElementById("flashbar_error").innerHTML="Invalid email or password.";
            document.getElementById("flashbar").style.display="block";            
        }
        return result;
    };
    var close_bar = document.getElementById("flashbar_close");
    close_bar.onclick = function(){
        location.reload(true);
        return false;
    };

};