function toonLijst() {
    document.getElementById("lijstHamburger").style.visibility = 'visible';
    document.getElementById("lijstHamburger").style.height = '200px';
    document.getElementById("hamburger").style.display = 'none';
    document.getElementById("x-nav-id").style.visibility = 'visible';
    document.getElementById("x-nav-id").style.display = 'grid';
}

function sluitLijst() {
    document.getElementById("lijstHamburger").style.visibility = 'hidden';
    document.getElementById("lijstHamburger").style.height = '0px';
    document.getElementById("hamburger").style.display = 'grid';
    document.getElementById("x-nav-id").style.visibility = 'hidden';
    document.getElementById("x-nav-id").style.display = 'none';
}

function infoWorkshops() {
    if (document.getElementById("bannerTekst").style.height == "300px" && document.getElementById("bannerTekst").style.overflow == "visible") {
        document.getElementById("bannerTekst").style.height = "220px";
        document.getElementById("bannerTekst").style.overflow = "hidden ";
    } else {
        document.getElementById("bannerTekst").style.height = "300px";
        document.getElementById("bannerTekst").style.overflow = "visible";
    }
}

function infoWorkshopsTwee() {
    if (document.getElementById("bannerTekstTwee").style.height == "300px" && document.getElementById("bannerTekstTwee").style.overflow == "visible") {
        document.getElementById("bannerTekstTwee").style.height = "220px";
        document.getElementById("bannerTekstTwee").style.overflow = "hidden ";
    } else {
        document.getElementById("bannerTekstTwee").style.height = "300px";
        document.getElementById("bannerTekstTwee").style.overflow = "visible";
    }
}