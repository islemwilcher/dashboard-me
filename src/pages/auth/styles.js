import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root:{
        backgroundColor: 'whitesmoke'
    },
    container:{
        display: 'flex',
        height: '100vh',
    },
    grid:{
        margin: 'auto',
    },
    paper:{
        margin:'auto',
        borderRadius: '10px'
    },
    form:{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    title:{
        margin: '30px'
    },
    textfield:{
        margin: '10px'
    },
    buttonSubmit:{
        margin: '30px'
    }
}))