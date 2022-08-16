import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function ProbabilitiesGraph(props) 
{
    
    return (
        <div className="bar-graph" style={{width:"50%"}}>
            <ResponsiveContainer aspect={2}>
                <BarChart data={props.data} margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>

                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="vector_string" domain={[0]} label={{ value: 'states', position: 'bottom', offset: -8}}/>
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
