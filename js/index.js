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
        document.getElementById("actiefKnop").style.backgroundColor = "#d25a27";
        document.getElementById("actiefKnopTwee").style.backgroundColor = "gray ";
    } else {
        document.getElementById("homeOver").style.display = "none";
        document.getElementById("homeWorkshop").style.display = "grid";
        document.getElementById("actiefKnop").style.backgroundColor = "gray";
        document.getElementById("actiefKnopTwee").style.backgroundColor = "#d25a27";
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
    if (naamEen == "demo" && wachtwoord == "demo" || naamEen == "Demo" && wachtwoord == "demo") {
        document.getElementById("loginText").style.display = "none";
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'nl',
        autoDisplay: false,
        includedLanguages: 'nl,fr,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    function changeGoogleStyles() {
        if ($('.goog-te-menu-frame').contents().find('.goog-te-menu2').length) {
            $('.goog-te-menu-frame').contents().find('.goog-te-menu2').css({
                'max-width': '100%',
                'overflow-x': 'auto',
                'box-sizing': 'border-box',
                'height': 'auto'
            });
        } else {
            setTimeout(changeGoogleStyles, 50);
        }
    }
    changeGoogleStyles();
}

function homePijlte() {
    document.getElementById("architectId").style.display = "none";
    document.getElementById("artId").style.display = "grid";
}

function artTerug() {
    document.getElementById("artId").style.display = "none";
    document.getElementById("architectId").style.display = "grid";
}

function artDoor() {
    document.getElementById("artId").style.display = "none";
    document.getElementById("utopiaId").style.display = "grid";
}

function utopiaTerug() {
    document.getElementById("utopiaId").style.display = "none";
    document.getElementById("artId").style.display = "grid";
}

function utopiaDoor() {
    document.getElementById("utopiaId").style.display = "none";
    document.getElementById("urbanismId").style.display = "grid";
}

function urbanismTerug() {
    document.getElementById("urbanismId").style.display = "none";
    document.getElementById("utopiaId").style.display = "grid";
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