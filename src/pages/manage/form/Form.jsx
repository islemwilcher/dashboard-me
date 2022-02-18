
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'

import { addProject, updatedProject } from '../../../actions/projects'

import useStyles from './styles'
import { Paper, Typography, TextField, Button } from '@material-ui/core'

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()

    const [projectData, setProjectData] = useState({
        name: '', link: '', description: '', image: ''
    })

    const project = useSelector((state) => (currentId ? state.projects.projects.find((project) => project._id === currentId) : null))
    const dispatch = useDispatch()

    useEffect(() => {
        if(project) setProjectData(project)
    }, [project])

    const clear = () => {
        setProjectData(0)
        setProjectData({
            name: '', link: '', description: '', image: ''
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(currentId === 0) {
            dispatch(addProject(projectData))
        } else {
            dispatch(updatedProject(currentId, projectData))
        }

        clear()
    }

    return (
        <Paper className={classes.paper} raised elevation={6}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? `Editing '${project.name}'` : 'Add project'}</Typography>
                <TextField 
                    className={classes.textField}
                    name='name' 
                    variant='outlined' 
                    label='name' 
                    fullWidth 
                    value={projectData.name} 
                    onChange={(e) => setProjectData({ ...projectData, name: e.target.value })} />
                <TextField 
                    className={classes.textField}
                    name='link' 
                    variant='outlined' 
                    label='link' 
                    fullWidth 
                    value={projectData.link} 
                    onChange={(e) => setProjectData({ ...projectData, link: e.target.value })} />
                <TextField 
                    className={classes.textField}
                    name='description' 
                    variant='outlined' 
                    label='description' 
                    fullWidth 
                    value={projectData.description} 
                    onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase 
                    type='file' 
                    multiple={false} 
                    onDone={({ base64 }) => setProjectData({ ...projectData, image: base64 })} />
                </div>
                <Button 
                className={classes.buttonSubmit} 
                variant='contained' 
                style={{ backgroundColor: 'green', color: 'white' }}
                size='large' 
                type='submit' 
                fullWidth>Submit</Button>
                <Button  
                variant='contained' 
                color='secondary' 
                size='large' 
                onClick={clear}
                fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form