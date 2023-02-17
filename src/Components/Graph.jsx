import React from 'react';
import '../Style/Graph.css';
import LineChart from './LineChart';

const Graph = () => {
  return (
    <div className='graph_content'>
      <div className="graph">
        <div className="data">
        <h6>sales Graph</h6><h6>$10,430</h6>
        </div>
       <div className="graph_styling">
       <LineChart/>
       </div>
      </div>
    </div>
  )
}

export default Graph