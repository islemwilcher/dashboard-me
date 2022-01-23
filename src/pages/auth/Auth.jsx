
//hooks
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

//styles hook
import useStyles from './styles'

//material-iu components
import { Typography, Button, TextField, Paper, Container, Grid } from "@material-ui/core"

//actions
import { signin } from '../../actions/auth'

const Auth = () => {

    const [formData, setFormData] = useState({ email: '', password: '' })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const classes = useStyles()
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(signin(formData, navigate))
    }

    return(
    <div className={classes.root}>
        <Container className={classes.container} >
        <Grid container className={classes.grid}>
            <Grid item className={classes.gridItem} xs={12} md={8} lg={6}>
                <Paper className={classes.paper} elevation={3}>
                    <form className={classes.form} autoComplete='off' noValidate onSubmit={handleSubmit}>
                        <Typography className={classes.title} variant='h4'>Log In</Typography>
                        <TextField className={classes.textfield} name='email' variant='outlined' label='Email' fullWidth onChange={handleChange} />
                        <TextField className={classes.textfield} name='password' variant='outlined' label='Password' type='password' fullWidth onChange={handleChange} />
                        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Log In</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
        </Container>
    </div>
    )
};

export default Auth;
