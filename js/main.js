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
        if (email_val!="") {
            var pattern = "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b";
            pattern.test(email_val);
        } else if (email_val="" || passowrd_val=="") {
            document.getElementById("flashbar_error").innerHTML="Invalid email or password.";
            document.getElementById("flashbar").style.display="block";
        }
        return false;
    };
    var close_bar = document.getElementById("flashbar_close");
    close_bar.onclick = function(){
        location.reload(true);
        return false;
    };

};