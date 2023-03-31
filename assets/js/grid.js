
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "hsla(0,0%,100%,0.8)";
        var blur = document.getElementById("navbar");
        blur.classList.add("blur");
        

    } else {
        
        document.getElementById("navbar").style.background = "hsl(210, 17%, 98%,0)";
        var blur = document.getElementById("navbar");
        blur.classList.remove("blur");
    }
}
