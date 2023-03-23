const positionUnitTranslator = {
    fromUnit: function (unit) {
        switch (unit) {
            case "PACKAGE":
                return "Opakowań";
            case "PCS":
                return "Sztuk";
            case "METRES":
                return "Metrów";
            default:
                return "Nie rozpoznano";
        }
    }
}

export  default positionUnitTranslator;