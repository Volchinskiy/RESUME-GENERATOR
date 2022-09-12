import { createStore } from "redux";

import { formikReducer } from "./reducers/formikReducer";

export const store = createStore(formikReducer);
