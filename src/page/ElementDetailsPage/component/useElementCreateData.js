import React, {useState} from "react";

const useElementCreateData = () => {
    const [producerId, setProducerId] = useState(0);

    return {
        producer: {
            value: producerId,
            setProducer: setProducerId
        }
    }
}

export default useElementCreateData;