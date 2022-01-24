import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        display: 'flex !important',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '30px auto',
    },
    chart: {
    },
    chartPaper:{
        width: '100%',
    },
    manage: {
        height: '100%',
    },
    managePaper:{
        width: '100%',
        height: '300px',
        padding: '12px',
        display: 'flex',
        alignItems: 'end'
    },

    [theme.breakpoints.down('sm')]: {
        chartPaper:{
            width: '98%',
        },
    }
}))