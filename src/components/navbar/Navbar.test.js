
import { render } from '@testing-library/react'

import Navbar from './Navbar'

describe('it should render properly', () => {
    it('everything is fine', () => {
        const { queryByTitle } = render(
            <Navbar />
        )
        expect(queryByTitle('navbar')).toBeTruthy()
    })
})
