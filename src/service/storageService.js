const storageService = {
    save: (label, data) => {
        localStorage.setItem(label, data);
    }
}

export default storageService;