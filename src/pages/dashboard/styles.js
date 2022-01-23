import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper:{
        width: '80%',
    },

    [theme.breakpoints.down('sm')]: {
        paper:{
            width: '98%',
        },
    }
}))