
import { useEffect } from 'react'
//components
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

//styles hook
import useStyles from './styles'

const Chart = ({ data, grid, dataKey }) => {
    const classes = useStyles()

    var width = window.innerWidth

    return (
        <div className={classes.chart}>
            {width > 800 ? (

            <ResponsiveContainer width="100%"  aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey='Projects' stroke="#5550bd" />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
            ):
            (
                <ResponsiveContainer width="100%"  aspect={4 / 2.5}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey='Projects' stroke="#5550bd" />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
            )}
        </div>
    );
};

export default Chart;
