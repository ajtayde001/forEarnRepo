import {
  GET_PRODUCT_SUCCESS,
 
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actiontype";

const initialstate = {
  isAge: "",
  isLastName: "",
  isLoading: false,
  isError: false,
 
  products: [],
  
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
   
      case GET_PRODUCT_SUCCESS:
        return { ...state, isLoading: false, products: payload };
      
    default:
      return initialstate;
  }
};
