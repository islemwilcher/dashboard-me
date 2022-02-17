
import { useRef, useState } from 'react'

import useStyles from './styles'
import Menu from './Menu'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Button } from '@material-ui/core'

import useBurger from './useBurger'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useBurger(ref, () => setIsVisible(false))

    const classes = useStyles()
    return(
        <>
            <div ref={ref} className={classes.nav} title='navbar' >
                <Button className={classes.menubtn} type="button" onClick={() =>setIsVisible(!isVisible)}><HiMenuAlt1 size='40' /></Button>
            </div>
            {isVisible && <Menu />}
        </>
    )
};

export default Navbar;
