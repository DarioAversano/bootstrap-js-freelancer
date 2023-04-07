// Tutti questi codici sconoto se usati applicano il 25%
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let BackendDevelopmenSelected = 20.50;
BackendDevelopmenSelected = parseInt(BackendDevelopmenSelected);
let FrontendDevelopmenSelected = 15.30;
FrontendDevelopmenSelected = parseInt(FrontendDevelopmenSelected);
let ProjectAnalisysSelected = 33.60;
ProjectAnalisysSelected = parseInt(ProjectAnalisysSelected);


// Ore selezionate.

if (BackendDevelopmenSelected == true) {

    switch (BackendDevelopmenSelected) {
        case "1":
            BackendDevelopmenSelected *= 1;
            break;
        case "2":
            BackendDevelopmenSelected *= 2;
            break;
        case "3":
            BackendDevelopmenSelected *= 3;
            break;
        case "4":
            BackendDevelopmenSelected *= 4;
            break;
        case "5":
            BackendDevelopmenSelected *= 5;
            break;
        case "6":
            BackendDevelopmenSelected *= 6;
            break;
        case "7":
            BackendDevelopmenSelected *= 7;
            break;
        case "8":
            BackendDevelopmenSelected *= 8;
            break;
        case "9":
            BackendDevelopmenSelected *= 9;
            break;
        case "10":
            BackendDevelopmenSelected *= 10;
            break;
        case "11":
            BackendDevelopmenSelected *= 11;
            break;
        case "12":
            BackendDevelopmenSelected *= 12;
            break;
        case "13":
            BackendDevelopmenSelected *= 13;
            break;
        case "14":
            BackendDevelopmenSelected *= 14;
            break;
        case "15":
            BackendDevelopmenSelected *= 15;
            break;
        case "16":
            BackendDevelopmenSelected *= 16;
            break;
        case "17":
            BackendDevelopmenSelected *= 17;
            break;
        case "18":
            BackendDevelopmenSelected *= 18;
            break;
        case "19":
            BackendDevelopmenSelected *= 19;
            break;
        case "20":
            BackendDevelopmenSelected *= 20;
            break;
        case "21":
            BackendDevelopmenSelected *= 21;
            break;
        case "22":
            BackendDevelopmenSelected *= 22;
            break;
        case "23":
            BackendDevelopmenSelected *= 23;
            break;
        case "24":
            BackendDevelopmenSelected *= 24;
            break;
    } else if (FrontendDevelopmenSelected == true) {

        switch (FrontendDevelopmenSelected) {
            case "1":
                FrontendDevelopmenSelected *= 1;
                break;
            case "2":
                FrontendDevelopmenSelected *= 2;
                break;
            case "3":
                FrontendDevelopmenSelected *= 3;
                break;
            case "4":
                FrontendDevelopmenSelected *= 4;
                break;
            case "5":
                FrontendDevelopmenSelected *= 5;
                break;
            case "6":
                FrontendDevelopmenSelected *= 6;
                break;
            case "7":
                FrontendDevelopmenSelected *= 7;
                break;
            case "8":
                FrontendDevelopmenSelected *= 8;
                break;
            case "9":
                FrontendDevelopmenSelected *= 9;
                break;
            case "10":
                FrontendDevelopmenSelected *= 10;
                break;
            case "11":
                FrontendDevelopmenSelected *= 11;
                break;
            case "12":
                FrontendDevelopmenSelected *= 12;
                break;
            case "13":
                FrontendDevelopmenSelected *= 13;
                break;
            case "14":
                FrontendDevelopmenSelected *= 14;
                break;
            case "15":
                FrontendDevelopmenSelected *= 15;
                break;
            case "16":
                FrontendDevelopmenSelected *= 16;
                break;
            case "17":
                FrontendDevelopmenSelected *= 17;
                break;
            case "18":
                FrontendDevelopmenSelected *= 18;
                break;
            case "19":
                FrontendDevelopmenSelected *= 19;
                break;
            case "20":
                FrontendDevelopmenSelected *= 20;
                break;
            case "21":
                FrontendDevelopmenSelected *= 21;
                break;
            case "22":
                FrontendDevelopmenSelected *= 22;
                break;
            case "23":
                FrontendDevelopmenSelected *= 23;
                break;
            case "24":
                FrontendDevelopmenSelected *= 24;
                break;
        }else if (ProjectAnalisysSelected == true) {
            switch (ProjectAnalisysSelected) {
                case "1":
                    ProjectAnalisysSelected *= 1;
                    break;
                case "2":
                    ProjectAnalisysSelected *= 2;
                    break;
                case "3":
                    ProjectAnalisysSelected *= 3;
                    break;
                case "4":
                    ProjectAnalisysSelected *= 4;
                    break;
                case "5":
                    ProjectAnalisysSelected *= 5;
                    break;
                case "6":
                    ProjectAnalisysSelected *= 6;
                    break;
                case "7":
                    ProjectAnalisysSelected *= 7;
                    break;
                case "8":
                    ProjectAnalisysSelected *= 8;
                    break;
                case "9":
                    ProjectAnalisysSelected *= 9;
                    break;
                case "10":
                    ProjectAnalisysSelected *= 10;
                    break;
                case "11":
                    ProjectAnalisysSelected *= 11;
                    break;
                case "12":
                    ProjectAnalisysSelected *= 12;
                    break;
                case "13":
                    ProjectAnalisysSelected *= 13;
                    break;
                case "14":
                    ProjectAnalisysSelected *= 14;
                    break;
                case "15":
                    ProjectAnalisysSelected *= 15;
                    break;
                case "16":
                    ProjectAnalisysSelected *= 16;
                    break;
                case "17":
                    ProjectAnalisysSelected *= 17;
                    break;
                case "18":
                    ProjectAnalisysSelected *= 18;
                    break;
                case "19":
                    ProjectAnalisysSelected *= 19;
                    break;
                case "20":
                    ProjectAnalisysSelected *= 20;
                    break;
                case "21":
                    ProjectAnalisysSelected *= 21;
                    break;
                case "22":
                    ProjectAnalisysSelected *= 22;
                    break;
                case "23":
                    ProjectAnalisysSelected *= 23;
                    break;
                case "24":
                    ProjectAnalisysSelected *= 24;
                    break;
            }
        }
    }
    console.log(selectedhours);
    return priceworkhours
}

let selectedhours = document.getElementById("hours-selected").value;



// codice sconto sul prezzo lavoro
let discountCodeUser = document.getElementById("coupon").value;

let isDoscountCodeAvailable = discountCodes.includes(discountCodeUser);

if (isDoscountCodeAvailable) {
    priceworkhours = priceworkhours * 0.75;
    discountCodes = removeElementFromArray(discountCodes, discountCodeUser);

    console.log(discountCodes);

    document.getElementById("result-applied-discount").innerHTML = "Il codice sconto è stato corettamente applicato!";
} else if (discountCodeUser != "") {
    document.getElementById("result-applied-discount").innerHTML = "Il codice sconto non è valido!";
} else {
    document.getElementById("result-applied-discount").innerHTML = "";
}

// ------------------- FUNZIONI GENERICHE --------------------
function removeElementFromArray(array, elementToRemove) {

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}

// lavoro selezionato

BackendDevelopmenSelected = document.getElementById("BackendDevelopmenSelected").selected;
FrontendDevelopmenSelected = document.getElementById("FrontendDevelopmenSelected").selected;
ProjectAnalisysSelected = document.getElementById("ProjectAnalisysSelected").selected;


