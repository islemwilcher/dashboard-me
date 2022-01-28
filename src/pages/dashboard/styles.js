import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    main:{
        display: 'flex',
        height: '100vh'
    },
    leftside:{
        flex: '2',
        backgroundColor: 'whitesmoke',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightside: {
        flex: '6',
        height: '100%',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    chart: {
        width: '100%',
    },
    chartPaper:{
        width: '100%',
        height: '200px',
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
        chartPaper:{
            width: '100%',
        },
        top: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        chart: {
            width: '90%',
        },
        manage: {
            backgroundColor: 'purpul',
            width: '80%',
            height: '60%',
        },
        leftside: {
            flexDirection: 'row',
        },
    },

    [theme.breakpoints.down('sm')]: {
        chartPaper:{
            width: '100%',
        },
        chart: {
            width: '90%',
        },
        manage: {
            marginTop: '30px',
            width: '260px',
        },
    },

}))