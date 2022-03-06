$(document).ready(function () {
    window.addEventListener("scroll", function(){
        console.log(this.scrollY);
        let scrollPos = this.scrollY;    
        var color = 'rgba(' + 11 + ',' + 23 + ',' + 39 +',' + (Math.floor(this.scrollY)/400) + ')';
        if (scrollPos >= 400) {
            $(".fixed").css("background-color", "rgb(11, 23, 39)");
        } else {
            $(".fixed").css("background-color", color);
        }
    });
});