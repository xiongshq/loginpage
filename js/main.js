window.onload = function(){
    var nav_a = document.getElementById("navbar-brand-hover");
    nav_a.onmouseover = function(){
        nav_a.classList.remove("icon--hired");
        nav_a.classList.add("icon--hired-dark");
    };
    nav_a.onmouseout= function(){
        nav_a.classList.remove("icon--hired-dark");
        nav_a.classList.add("icon--hired");
    }
    var submit_btn = document.getElementById("sign_in");
    submit_btn.onclick = function() {
        
    }

};