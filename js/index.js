function toonLijst() {
    document.getElementById("lijstHamburger").style.visibility = 'visible';
    document.getElementById("lijstHamburger").style.height = '200px';
    document.getElementById("hamburger").style.display = 'none';
    document.getElementById("x-nav-id").style.visibility = 'visible';
}

function sluitLijst() {
    document.getElementById("lijstHamburger").style.visibility = 'hidden';
    document.getElementById("lijstHamburger").style.height = '0px';
    document.getElementById("hamburger").style.display = 'grid';
    document.getElementById("x-nav-id").style.visibility = 'hidden';
}