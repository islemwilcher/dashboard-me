import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    title: {
        marginBottom: '20px',
    },
    chart:{
        width: '100%',
        height: '80%',
        margin: '20px 0',
    },

    [theme.breakpoints.down('sm')]: {
        chart: {
            height: '50%',
            margin: 'auto',
        },
    },
}))