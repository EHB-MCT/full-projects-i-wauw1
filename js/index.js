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

function homeCarousel() {
    if (document.getElementById("homeWorkshop").style.display == "none") {
        document.getElementById("homeOver").style.display = "none";
        document.getElementById("homeWorkshop").style.display = "grid";
    } else {
        document.getElementById("homeOver").style.display = "grid";
        document.getElementById("homeWorkshop").style.display = "none";
    }
}

function cdOpen() {
    document.getElementById("hoesje").style.paddingLeft = "0";
}

function cdToe() {
    document.getElementById("hoesje").style.paddingLeft = "47%";
}

function checkKinderen() {
    if (document.getElementById("kinderCheck").checked) {
        document.getElementById("ouder").style.display = "none";
        document.getElementById("spanOuderEen").style.display = "none";

        document.getElementById("ouderTwee").style.display = "none";
        document.getElementById("spanOuderTwee").style.display = "none";

        document.getElementById("spanIedereen").style.display = "none";
        document.getElementById("iedereen").style.display = "none";
    } else {
        document.getElementById("ouder").style.display = "grid";
        document.getElementById("spanOuderEen").style.display = "grid";

        document.getElementById("ouderTwee").style.display = "grid";
        document.getElementById("spanOuderTwee").style.display = "grid";

        document.getElementById("spanIedereen").style.display = "grid";
        document.getElementById("iedereen").style.display = "grid";
    }
}

function checkVolwassenen() {
    if (document.getElementById("checkVolwassenenId").checked) {
        // alert("yeey");
        document.getElementById("kinderen").style.display = "none";
        document.getElementById("spanKinderenTwee").style.display = "none";

        document.getElementById("kinderenTwee").style.display = "none";
        document.getElementById("spanIedereen").style.display = "none";
        document.getElementById("iedereen").style.display = "none";
    } else {
        //alert("yeeyFout");
        document.getElementById("kinderen").style.display = "grid";
        document.getElementById("spanKinderenTwee").style.display = "grid";

        document.getElementById("kinderenTwee").style.display = "grid";
        document.getElementById("spanIedereen").style.display = "grid";
        document.getElementById("iedereen").style.display = "grid";
    }
}

function checkIedereen() {
    if (document.getElementById("iedereenCheck").checked) {
        // alert("yeey");
        document.getElementById("kinderen").style.display = "none";
        document.getElementById("spanKinderenTwee").style.display = "none";

        document.getElementById("kinderenTwee").style.display = "none";
        document.getElementById("spanIedereen").style.display = "none";

        document.getElementById("ouder").style.display = "none";
        document.getElementById("spanOuderEen").style.display = "none";

        document.getElementById("ouderTwee").style.display = "none";
        document.getElementById("spanOuderTwee").style.display = "none";

        document.getElementById("spanIedereen").style.display = "none";
    } else {
        //alert("yeeyFout");
        document.getElementById("kinderen").style.display = "grid";
        document.getElementById("spanKinderenTwee").style.display = "grid";
        document.getElementById("kinderenTwee").style.display = "grid";
        document.getElementById("ouder").style.display = "grid";
        document.getElementById("spanOuderEen").style.display = "grid";
        document.getElementById("ouderTwee").style.display = "grid";
        document.getElementById("spanOuderTwee").style.display = "grid";
        document.getElementById("spanIedereen").style.display = "grid";
    }
}