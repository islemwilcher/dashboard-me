import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '5px',
        height: '100%',
        position: 'relative',
    },
    media: {
        height: '150px',
        paddingTop: '56,25%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'darken',
        position: 'relative',
    },
    actions: {
        position: 'absolute',
        top: '10px',
        right: '0px',
        color: 'white',
    },
    details: {
        textAlign: 'left',
        display: 'block',
        margin: 'auto 0',
        paddingLeft: '15px',
        paddingBottom: '5px',
    },
    name: {
        color: 'gray',
        fontWeight: '300',
    },
    link: {
        cursor: 'pointer',
        color: 'lightblue',
    },
    project: {
        cursor: 'pointer',
    },
})