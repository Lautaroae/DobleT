import axios from "axios"

const productsActions = {
    fetchApiData: () => {
        return async (dispatch, getState) => {
            const response = await axios.get("")
            dispatch({ type: "fetch", payload: response.data.response.ciudades })
        }
    },
    // chargeProducts:
}