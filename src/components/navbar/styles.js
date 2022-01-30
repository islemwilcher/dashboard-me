import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    nav:{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: '#68cdf8',
        height: '100%',
    },
    menu:{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#68cdf8',
        position: 'absolute',
        zIndex: '10',
        animation: `$slowEffect 2000ms ${theme.transitions.easing.easeOut}`,
    },

    "@keyframes slowEffect": {
        "0%": {
            opacity: 0.5,
            transform: "translateX(-100%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        }
    },

    menubtn:{
        zIndex: '11',
        marginTop: '20px',
    },
    menu_link_container: {
        display: 'flex',
        flexDirection: 'column',
    },
    menu_link:{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'black',
        borderRadius: '10px',
        padding: '0px 20px',
        '&:hover': {
            background: '#81d4fa',
        },
    },
    menu_link_h3:{
        marginLeft: '10px',
    },
    icon:{
        color: 'gray',
        '&:hover': {
            color: 'black',
        },
    },

    [theme.breakpoints.down('md')]: {
        menu:{
            width: '100vw',
            height: '100vh',
        },
    },


}))