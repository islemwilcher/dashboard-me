
import { Typography, Button, TextField, Paper, Container, Grid } from "@material-ui/core";

import useStyles from './styles'

const Auth = () => {

    const classes = useStyles()

    const handleSubmit = () => {}

    return(
    <>
        <Container className={classes.container} >
            <Grid className={classes.grid} xs={12} md={8} lg={6}>
                <Paper className={classes.paper} raised elevation={3}>
                    <form className={classes.form} autoComplete='off' noValidate onSubmit={handleSubmit}>
                        <Typography className={classes.title} variant='h4'>Log In</Typography>
                        <TextField className={classes.textfield} name='email' variant='outlined' label='Email' fullWidth />
                        <TextField className={classes.textfield} name='password' variant='outlined' label='Password' type='password' fullWidth />
                        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Log In</Button>
                    </form>
                </Paper>
            </Grid>
        </Container>
    </>
    )
};

export default Auth;
