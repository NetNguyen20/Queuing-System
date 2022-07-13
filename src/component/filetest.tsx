import ApexCharts, { Props } from 'react-apexcharts';
import React, { Component } from 'react';


const Check: React.FC<Props> = ({ tasks }: Props) => {
    const options = {
        chart: {

            height: '100px',

            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100]

                }
            },

        },
        xaxis: {
            categories: [1, 7, 11, 13, 15, 19, 21, 26, 31]

        },
        dataLabels: {
            enabled: false
        },

    };

    const series = [
        {
            data: [2500, 4200, 3100, 3500, 3100, 4221, 3500, 4350, 3500]
        }

    ];

    return (
        <ApexCharts
            type="area"
            options={options}
            series={series}
            width={600}
            height={200}
        />
    );
};

export default Check;