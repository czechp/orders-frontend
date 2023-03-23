import React from "react";

const useCreateOrderData = (nameInit="", descriptionInit="") => {
    const [name, setName] = React.useState(nameInit);
    const [description, setDescription] = React.useState(descriptionInit);

    return {
        name: {
            value: name,
            setName,
            validation: {message: "Nazwa musi mieć przynajmniej 3 znaki", validate: (text) => text.length >= 3},

        },
        description: {
            value: description,
            setDescription
        },
        validateAll: function () {
            return this.name.validation.validate(this.name.value);
        }
    }
}

export default useCreateOrderData;