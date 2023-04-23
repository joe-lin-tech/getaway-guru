import React, { useRef, useEffect } from 'react'
// Initialization for ES Users
import {
    Chart,
    initTE,
  } from "tw-elements";
  
  initTE({ Chart });
  
export default function RadarGraph() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if(canvasRef.current && typeof window !== 'undefined'){
            const canvas = canvasRef.current;
            if (canvas.chart) {
                // Destroy the previous chart instance
                canvas.chart.destroy();
              }
              
              // Create a new chart instance
              var chart = new Chart(canvas, {
                // chart configuration options
              });
              
              // Store the chart instance on the canvas element
              canvas.chart = chart;
        }
    }, [])
  return (
    <div class="mx-auto w-3/5 overflow-hidden">
        <canvas
            data-te-chart="radar"
            data-te-dataset-label="Activity Breakdown"
            data-te-labels="['Monuments', 'Nightlife' , 'Food' , 'Outdoors' , 'Museums' , 'Cultural' , 'Shopping']"
            data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
            ref={canvasRef}>
        </canvas>
    </div>
  )
}