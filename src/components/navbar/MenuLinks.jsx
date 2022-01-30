
import { Link } from 'react-router-dom'

import { MdManageAccounts, MdSettings } from 'react-icons/md'
import { BiLogOutCircle } from 'react-icons/bi'

import useStyles from './styles'

const MenuLinks = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.menu_link_container}>
                <Link to='/dashboard/manage' className={classes.menu_link}>
                    <MdManageAccounts className={classes.icon} size='30' />
                    <h3 className={classes.menu_link_h3}>Manage Projects</h3>
                </Link>
                <Link to='' className={classes.menu_link}>
                    <MdSettings className={classes.icon} size='30' />
                    <h3 className={classes.menu_link_h3}>Settings</h3>
                </Link>
                <Link to='' className={classes.menu_link}>
                    <BiLogOutCircle className={classes.icon} size='30' />
                    <h3 className={classes.menu_link_h3}>LOG OUT</h3>
                </Link>
            </div>
        </>
    );
};

export default MenuLinks;
