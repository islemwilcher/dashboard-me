
import { render } from "@testing-library/react";

import Chart from './Chart';

describe('testing the render of the chart', () => {
    it('it renders fine', () => {
        const { queryByTitle } = render(
            <Chart />
        );
        expect(queryByTitle('chart')).toBeTruthy()
    })
})
