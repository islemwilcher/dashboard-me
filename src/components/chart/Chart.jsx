
//components
import { Container, Paper, Grid, Typography } from '@material-ui/core'
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, ResponsiveContainer } from 'recharts'

//styles hook
import useStyles from './styles'

const Chart = ({ data, title, grid, dataKey }) => {
    const classes = useStyles()
    console.log(data);

    return (
        <div className={classes.chart}>
            <Typography className={classes.title} variant='h5'>{title}</Typography>
            <ResponsiveContainer width="100%"  aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey='Projects' stroke="#5550bd" />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
