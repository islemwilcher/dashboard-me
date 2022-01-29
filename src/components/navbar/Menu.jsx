
import useStyles from './styles'
import MenuLinks from './MenuLinks'

const Menu = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.menu}>
                <h1>hello menu</h1>
                <MenuLinks />
            </div>
        </>
    );
};

export default Menu;
