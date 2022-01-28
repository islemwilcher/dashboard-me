import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root:{
        backgroundColor: 'whitesmoke',
    },
    container:{
        display: 'flex',
        height: '100vh',
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: 'auto',
    },
    gridItem:{
        backgroundColor: 'whitesmoke',
    },
    paper:{
        margin:'auto',
        borderRadius: '10px',
    },
    form:{
        minHeight: '50vh',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center !important',
        textAlign: 'center !important',
    },
    title:{
        margin: '30px !important',
    },
    textfield:{
        margin: '10px !important',
    },
    buttonSubmit:{
        margin: '30px !important',
    },
    [theme.breakpoints.down('sm')]: {
        form: {
            minHeight: '40vh',
        }
    }
}))