
//hooks
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { getStatistic } from '../../actions/projects'

//components
import { Container, Paper, Grid, Typography, Button } from '@material-ui/core'
import Chart from '../../components/chart/Chart'
import IMG from '../../assets/manage.jpg'

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

    const styles = {
            backgroundImage: 'url(' + IMG + ')',
            ackgroundSize: 'contain'
    }

    return (
        <>
            <Grid className={classes.flex}>
                <Grid className={classes.chart} item xs={12} md={8} lg={8}>
                    <div className={classes.container}>
                        <Paper className={classes.chartPaper} elevation={6}>
                            <Chart data={projectStats} title='Projects Analytics' grid dataKey='added projects' />
                        </Paper>
                    </div>
                </Grid>
                <Grid className={classes.manage} item xs={12} md={4} lg={2} >
                    <Paper elevation={3} className={classes.managePaper} style={styles}>
                        <Button variant='contained' color='primary' size='large' fullWidth >Manage</Button>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
