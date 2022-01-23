
//hooks
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { getStatistic } from '../../actions/projects'

//components
import { Container, Paper, Grid, Typography } from '@material-ui/core'
import Chart from '../../components/chart/Chart'

//styles hook
import useStyles from './styles'

const Dashboard = () => {

    const dispatch = useDispatch()
    const { statistic } = useSelector(state => state.projects)
    const [projectStats, setProjectStates] = useState([])

    const classes = useStyles()
    
    const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], [])
    
    useEffect(() => {
        dispatch(getStatistic(MONTHS, setProjectStates))
    }, [dispatch, MONTHS])

    return (
        <Container>
            <Paper className={classes.paper} elevation={3} >
                <Chart data={projectStats} title='Projects Analytics' grid dataKey='added projects' />
            </Paper>
        </Container>
    );
};

export default Dashboard;
