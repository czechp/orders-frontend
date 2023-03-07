import React from "react";

const useElementCreateData = (nameInit = "", serialNumberInit = "", descriptionInit = "", urlInit = "") => {
    const [name, setName] = React.useState(nameInit)
    const [serialNumber, setSerialNumber] = React.useState(serialNumberInit)
    const [description, setDescription] = React.useState(descriptionInit)
    const [url, setUrl] = React.useState(urlInit)
    const [producerId, setProducerId] = React.useState(0);
    const [categoryId, setCategoryId] = React.useState(0);
    const [providerId, setProviderId] = React.useState(0);

    return {
        name: {
            value: name,
            setValue: setName,
            validation: {
                message: "Nazwa musi mieć przynajmniej 3 znaki",
                validate: (text) => text.length >= 3
            }
        },
        serialNumber: {
            value: serialNumber,
            setValue: setSerialNumber,
            validation: {
                message: "Numer seryjny musi mieć przynajmniej 5 znaki",
                validate: (text) => text.length >= 5
            }
        },
        description: {
            value: description,
            setValue: setDescription
        },
        url: {
            value: url,
            setValue: setUrl,
            validation: {
                message: "Url musi mieć przynajmniej 5 znaków",
                validate: (text) => text.length >= 5
            }
        },
        producer: {
            value: producerId,
            setProducer: setProducerId
        },
        category: {
            value: categoryId,
            setCategory: setCategoryId
        },
        provider: {
            value: providerId,
            setProvider: setProviderId
        },
        validateAllData: function () {
            return this.producer.value !== null
                && this.category.value !== null
                && this.provider.value !== null
                && this.name.validation.validate(this.name.value)
                && this.serialNumber.validation.validate(this.serialNumber.value)
                && this.description.value !== null
                && this.url.validation.validate(this.url.value)
        },
        clear: function () {
            setName("");
            setSerialNumber("");
            setDescription("");
            setUrl("");
        }

    }
}

export default useElementCreateData;