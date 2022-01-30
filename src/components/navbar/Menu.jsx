
import useStyles from './styles'
import MenuLinks from './MenuLinks'

const Menu = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.menu}>
                <MenuLinks />
            </div>
        </>
    );
};

export default Menu;
