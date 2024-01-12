"use client";
import React from 'react';
import {ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar} from "recharts";

type Props = {};

const data = [
    {
        "month": "Jan",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Feb",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Mar",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Apr",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "May",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Jun",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Jul",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Aug",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Sep",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Oct",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Nov",
        "value": Math.floor(Math.random() * 5000) + 1000,
    },
    {
        "month": "Dec",
        "value": Math.floor(Math.random() * 5000) + 1000,
    }
]

const BarGraph = ({}: Props) => {
    return (
        <ResponsiveContainer width={"100%"} height={350}>
            <BarChart data={data}>
                <XAxis dataKey={'month'} tickLine={false} axisLine={false} stroke="#888888" fontSize={12}/>
                <YAxis dataKey={'value'} tickLine={false} axisLine={false} stroke="#888888" fontSize={12}
                       tickFormatter={(value) => {
                           return `$ ${value}`;
                       }}/>
                {/*<Tooltip />*/}
                <Bar dataKey="value" radius={[4, 4, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarGraph;