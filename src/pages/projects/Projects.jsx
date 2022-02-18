
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProjects } from '../../actions/projects'

import { Container, Grid } from '@material-ui/core'
import Project from '../../components/project/Project'

import useStyles from './styles'

const Projects = ({ setCurrentId }) => {

    const classes = useStyles()

    const { projects } = useSelector((state) => state.projects)
    console.log(projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
    },[dispatch])

    return (
        !projects?.length
        ? (
            <h1>loading...</h1>
        )
        : (
            <Container className={classes.container}>
                <Grid container alignItems='stretch' spacing={3}>
                    {projects.map((item) => (
                        <Grid key={item._id} item xs={12} sm={6} md={4}>
                        <Project item={item} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    )
}

export default Projects