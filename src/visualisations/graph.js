import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function ProbabilitiesGraph(props) 
{
    
    return (
        <div className="bar-graph">
            <ResponsiveContainer width="50%" aspect={2}>
                <BarChart data={props.data} margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>

                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="vector_string" domain={[0]}/>
                    <YAxis datakey="probability" domain={[0, 100]} name="probability" label={{ value: 'Probability', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="chance" legendType='none' fill="#123ABC" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );    
}

export default ProbabilitiesGraph;

export const testData = [
    {
        "vector_string": "0000000000",
        "vector": 0,
        "amplitude": {
            "r": 0.9256373912272347,
            "phi": 0.300000000000005
        },
        "magnitude": 0.9256373912272347,
        "phase": 0.300000000000005,
        "chance": 85.68045800379606
    },
    {
        "vector_string": "0000000001",
        "vector": 1,
        "amplitude": {
            "r": 0.2863331991006677,
            "phi": -0.6707963267948793
        },
        "magnitude": 0.2863331991006677,
        "phase": -0.6707963267948793,
        "chance": 8.19867009072226
    },
    {
        "vector_string": "0000100000",
        "vector": 32,
        "amplitude": {
            "r": 0.23635402982999276,
            "phi": 1.300000000000017
        },
        "magnitude": 0.23635402982999276,
        "phase": 1.300000000000017,
        "chance": 5.586322741687711
    },
    {
        "vector_string": "0000100001",
        "vector": 33,
        "amplitude": {
            "r": 0.07311286916772759,
            "phi": 0.3292036732050651
        },
        "magnitude": 0.07311286916772759,
        "phase": 0.3292036732050651,
        "chance": 0.5345491637937252
    }
];