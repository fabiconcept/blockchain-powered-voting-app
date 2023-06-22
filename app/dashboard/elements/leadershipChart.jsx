"use client"
import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import { LeadOptionsFloat } from '@/utils/demo_variable';
import { convertColorCode, getRandomData } from '@/utils/helper';


ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler);

const LeadChart = ({chartData}) => {
    const data = {
        labels: [...chartData.map(i=>i.party)],
        datasets: [
            {
                backgroundColor: (context) => {
                    const bgColor = [
                        "rgba(5, 108, 242, 0.5)",
                        "rgba(5, 108, 242, 0.25)",
                        "rgba(5, 108, 242, 0.05)",
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
                borderColor: "rgba(5, 108, 242, 1)",
                borderWidth: 2,
                data: [...chartData.map(i=>i.voteCount)],
                fill: true,

            },
            {
                label: 'Line 1',
                backgroundColor: (context) => {
                    const bgColor = [...convertColorCode("#ff0000")];

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
                data: getRandomData(),
                borderColor: 'red',
                fill: true,
              },
              {
                label: 'Line 2',
                backgroundColor: (context) => {
                    const bgColor = [...convertColorCode("#0000FF")];

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
                data: getRandomData(),
                borderColor: 'blue',
                fill: true,
              },
              {
                label: 'Line 3',
                backgroundColor: (context) => {
                    const bgColor = [...convertColorCode("#00ff00")];

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
                data: getRandomData(),
                borderColor: 'green',
                fill: true,
              },
        ],
    };

    return <Line data={data} options={LeadOptionsFloat} updateMode="show" redraw={true} className='h-full w-full' />;
};

export default LeadChart;
