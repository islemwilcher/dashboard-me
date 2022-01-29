
import useStyles from './styles'

const MenuLinks = () => {
    const classes = useStyles()
    return (
        <>
            <button className={classes.btn} onClick={() => console.log('links')}>hi</button>
        </>
    );
};

export default MenuLinks;
