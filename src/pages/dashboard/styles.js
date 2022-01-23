import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    paper: {
        padding: '10px',
        height: '240px',
    },
    [theme.breakpoints.down('sm')]: {
        paper: {
            height: '150px',
        }
    }
}))