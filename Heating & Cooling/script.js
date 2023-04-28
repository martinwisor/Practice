let actualTemp = 92
let desiredTemp = 70
if (actualTemp < desiredTemp){
    console.log("Run heat")
}
else if(desiredTemp<actualTemp){
    console.log("Run A/C")
}

else if(actualTemp === desiredTemp){
    console.log("Standby")
}

let tempCelsius = 20;
let targetUnit = "F";
switch(targetUnit){
    case 'K':
        console.log(tempCelsius + 273.15);
        break;
        case 'F':
            console.log((tempCelsius*1.8)+32);
            break;
            case "C":
                console.log(tempCelsius)
}

