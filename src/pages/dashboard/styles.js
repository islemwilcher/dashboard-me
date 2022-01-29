import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    main:{
        display: 'flex',
        height: '100vh',
        width: '100vw',
    },
    leftside:{
        width: '60px',
        height: '100vh',
        display: 'flex',
        alignItems: 'start',
    },
    rightside: {
        width: '100%',
        margin: 'auto',
        height: '100%',
    },
    top: {
        width: '90%',
        margin: '30px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    chart: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chartPaper:{
        width: '100%',
        height: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    manage: {
        height: '100%',
        width: '100%',
        margin: 'auto',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '5px',
        height: '180px',
        margin: 'auto',
        width: '250px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    button: {
        backgroundColor: 'lightblue',
        width: '100%',
        margin: '5px auto',
    },

    [theme.breakpoints.down('md')]: {
        top: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        chart: {
            width: '90%',
        },
        manage: {
            width: '80%',
            height: '60%',
        },
    },

    [theme.breakpoints.down('sm')]: {
        manage: {
            marginTop: '30px',
            width: '260px',
        },
    },

}))