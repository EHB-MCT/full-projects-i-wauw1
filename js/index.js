function toonLijst() {
    document.getElementById("lijstHamburger").style.visibility = 'visible';
    document.getElementById("lijstHamburger").style.height = '200px';
    document.getElementById("lijstHamburger").style.display = 'grid';
    document.getElementById("hamburger").style.display = 'none';
    document.getElementById("x-nav-id").style.visibility = 'visible';
    document.getElementById("x-nav-id").style.display = 'grid';
}

function sluitLijst() {
    document.getElementById("lijstHamburger").style.display = 'none';
    document.getElementById("lijstHamburger").style.visibility = 'hidden';
    document.getElementById("lijstHamburger").style.height = '0px';
    document.getElementById("hamburger").style.display = 'grid';
    document.getElementById("x-nav-id").style.visibility = 'hidden';
    document.getElementById("x-nav-id").style.display = 'none';
}




function homeCarousel() {
    if (document.getElementById("homeWorkshop").style.display == "grid") {
        document.getElementById("homeOver").style.display = "grid";
        document.getElementById("homeWorkshop").style.display = "none";
    } else {
        document.getElementById("homeOver").style.display = "none";
        document.getElementById("homeWorkshop").style.display = "grid";
    }
}

function cdOpen() {
    document.getElementById("hoesje").style.paddingLeft = "0";
}

function cdOpenTuto() {
    document.getElementById("hoesjeTuto").style.paddingLeft = "0";
}

function cdToe() {
    document.getElementById("hoesje").style.paddingLeft = "47%";
}

function cdToeTuto() {
    document.getElementById("hoesjeTuto").style.paddingLeft = "47%";
}

function log() {
    var naamEen = document.getElementById("gebNaam").value;
    var wachtwoord = document.getElementById("ww").value;
    if (naamEen == "ilhan" && wachtwoord == "anticheat123" || naamEen == "Ilhan" && wachtwoord == "vrijdag") {
        document.getElementById("loginText").style.display = "none";
    }
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
    if (document.getElementById("iedereenCheck").checked && document.getElementById("checkVolwassenenId").checked) {
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