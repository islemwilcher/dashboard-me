
import { useRef, useState } from 'react'

import useStyles from './styles'
import Menu from './Menu'
import {RiMenu5Line} from 'react-icons/ri'
import { Button } from '@material-ui/core'

import useBurger from './useBurger'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useBurger(ref, () => setIsVisible(false))

    const classes = useStyles()
    return(
        <>
            <div ref={ref} className={classes.nav}>
                <Button className={classes.menubtn} type="button" onClick={() =>setIsVisible(!isVisible)}><RiMenu5Line size='24' /></Button>
            </div>
            {isVisible && <Menu />}
        </>
    )
};

export default Navbar;
