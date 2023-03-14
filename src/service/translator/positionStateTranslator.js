const positionStateTranslator = {
    fromState: function (state) {
        switch (state) {
            case "NOT_ORDERED":
                return "Nie zamówiono";
            case "ORDERED":
                return "Zamówiono";
            case "DELIVERED":
                return "Dostarczono";
            default:
                return "Nie rozpoznano";
        }
    }
}

export default positionStateTranslator;