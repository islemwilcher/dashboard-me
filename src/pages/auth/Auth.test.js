import { render } from "@testing-library/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './Auth'

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe('test the auth', () => {
    const initialState = { output: 0 };
    const mockStore = configureStore();
    let store;

    it('auth renders fine', () => {
        store = mockStore(initialState)
        const { queryByTitle } = render(
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path='/' element={<Auth />} />
                    </Routes>
                </Router>
            </Provider>
        );
        expect(queryByTitle('auth')).toBeDefined()
    })
})