"use client"
import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import { chartOptions } from '@/utils/demo_variable';


ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler);

const Chart = ({chartData}) => {
    const data = {
        labels: [...chartData.map(i=>i.party)],
        datasets: [
            {
                backgroundColor: (context) => {
                    const bgColor = [
                        "rgba(4, 191, 138, 0.5)",
                        "rgba(4, 191, 138, 0.25)",
                        "rgba(4, 191, 138, 0.05)",
                        "rgba(3 , 38, 255, 0)"
                    ]

                    if (!context.chart.chartArea) {
                        return;
                    }

                    const { ctx, data, chartArea:{top, bottom}} = context.chart;
                    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
                    gradientBackground.addColorStop(0, bgColor[0]);
                    gradientBackground.addColorStop(0.5, bgColor[1]);
                    gradientBackground.addColorStop(1, bgColor[2]);
                    return gradientBackground;
                },
                pointBackgroundColor: [...chartData.map(i=>i.partyColor)],
                borderColor: "rgba(4, 191, 138, 1)",
                borderWidth: 2,
                data: [...chartData.map(i=>i.voteCount)],
                fill: true,

            }
        ],
    };

    return <Line data={data} options={chartOptions} updateMode="show" redraw={true} className='bg-background-main flex-1' />;
};

export default Chart;
