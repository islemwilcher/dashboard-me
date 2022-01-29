import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    nav:{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: '#9addfb',
        height: '100%',
    },
    menu:{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b3e5fc',
        position: 'absolute',
        zIndex: '10',
    },
    menubtn:{
        zIndex: '11'
    },

    [theme.breakpoints.down('md')]: {
        menu:{
            width: '100vw',
            height: '100vh',
        },
    },


}))