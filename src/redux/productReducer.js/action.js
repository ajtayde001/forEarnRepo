import {  GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontype"
import axios from "axios";


export const getProductDAta =(page,yourConfig) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    return axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`, yourConfig)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAILURE})
    });
}
