import { ADD_NEW_INPUT } from "./../constants";

const initialValues = {
  name: "",
};

export const formikReducer = (state = initialValues, action: any) => {
  switch (action.type) {
    case ADD_NEW_INPUT: {
      console.log(state);
      const { length } = Object.keys(state);
      return { ...state, ["rr" + length]: "" };
    }
    default:
      return state;
  }
};
