
import { useState } from 'react'
import { Grow, Container, Grid } from '@material-ui/core'

import Form from './form/Form'
import Projects from '../projects/Projects'

import useStyles from './styles'

const Manage = () => {

    const [currentId, setCurrentId] = useState(0)
    const classes = useStyles()
    
    return (
        <Grow in>
            <Container>
                <Grid className={classes.grid} container align='center' spacing={3}>
                    <Grid item >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item >
                        <Projects setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
        </Container>
        </Grow>
    )
};

export default Manage;
