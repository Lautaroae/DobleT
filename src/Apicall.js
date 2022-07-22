import axios from "axios";

export const getAllProducts = async () => {
    try {
        let data = await axios.get("");
        return data
    } catch (error) {
        throw error
    }
};

export const chargeData = async (dataInputs) => {
    console.log(dataInputs);
    try {
        let data = await axios.post("");
        return data;
    } catch (error) {
        throw error;
    }
};
export const deleteProduct = async (id) => {
    console.log(id)
    try {
        let data = await axios.delete("");
        return data;
    } catch (error) {
        throw error
    }
};
export const modifyProduct = async (id, dataInputs) => {
    console.log(id, dataInputs);
    try {
        let data = await axios.put("");
        return data
    } catch (error) {
        throw error
    }
};