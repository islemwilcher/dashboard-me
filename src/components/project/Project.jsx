
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Card, CardMedia, Button, Typography } from '@material-ui/core'

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { deletedProject } from '../../actions/projects'

import useStyles from './styles'

const Project = ({ item, setCurrentId }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()

    const openProject = () => {
        navigate(`/project/find/${item._id}`)
    }


    return (
        <Card className={classes.card} raised elevation={6}>
            <div className={classes.project} onClick={openProject}>
                <CardMedia className={classes.media} image={item.image} />
                <div className={classes.details}>
                    <Typography className={classes.name} variant='h6'>{item.name}</Typography>
                    <Typography className={classes.link} variant='h6'>{item.link}</Typography>
                </div>
            </div>
            <div className={classes.actions}>
                <Button size='small' onClick={() => setCurrentId(item._id)}>
                    <AiOutlineEdit color='white' fontSize='24px' />
                </Button>
                <Button size='small' onClick={() => dispatch(deletedProject(item._id))}>
                    <AiOutlineDelete color='red' fontSize='24px' />
                </Button>
            </div>
        </Card>
    )
}

export default Project