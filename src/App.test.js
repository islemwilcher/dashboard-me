import { render } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe('test the app', () => {
    const initialState = { output: 0 };
    const mockStore = configureStore();
    let store;

    it('it works fine', () => {
        store = mockStore(initialState)
        const { queryByTitle } = render( 
        <Provider store={store}>
            <App />
        </Provider>
        );

        expect(queryByTitle("app")).toBeTruthy()
    })
})