const storageService = {
    save: (label, data) => {
        localStorage.setItem(label, data);
    },
    read(label) {
        return localStorage.getItem(label);
    },
    clear() {
        localStorage.clear();
    }
}

export default storageService;