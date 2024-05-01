import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Taskchart = () => {
  const series = [25, 15, 44, 55];
  const options = {
    chart: {
      width: '100%',
      type: 'pie',
    },
    labels: ["Monday", "Tuesday", "Wednesday","Thusday"],
    theme: {
      monochrome: {
        enabled: false
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    title: {
       text: undefined,
    },
    // dataLabels: {
    //   formatter(val, opts) {
    //     const name = opts.w.globals.labels[opts.seriesIndex];
    //     return [name, val.toFixed(1) + '%'];
    //   }
    // },
    legend: {
      show: true
    }
  };

  return (

      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" />
      </div>
      
  
  );
};

export default Taskchart;
