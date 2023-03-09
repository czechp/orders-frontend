export const orderStateTranslator = {
    from: (state) => {
        switch (state) {
            case "PREPARATION":
                return "W przygotowaniu";
            case "EXECUTION":
                return "W realizacji";
            case "CLOSED":
                return "Zamknięte";
            default:
                return "Nie rozpoznano"
        }
    }
}