
//hooks
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { getStatistic } from '../../actions/projects'

//components
import { Card, Grid, Paper, Button, CardMedia } from '@material-ui/core'
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
        <div className={classes.main}>
            <div className={classes.leftside}>
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
                <h2>4</h2>
                <h2>5</h2>
            </div>
            <div className={classes.rightside}>
                <Grid className={classes.top}>
                    <Grid className={classes.chart} item xs={12} md={8} lg={8}>
                        <div className={classes.container}>
                            <Paper className={classes.chartPaper} elevation={6}>
                                <Chart data={projectStats} grid dataKey='added projects' />
                            </Paper>
                        </div>
                    </Grid>
                    <Grid className={classes.manage} item xs={12} md={4} lg={2} >
                        <Card className={classes.card} raised elevation={3}>
                            <CardMedia className={classes.media} image={IMG} />
                            <div className={classes.action}>
                                <Button className={classes.button}>manage projects</Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Dashboard;
