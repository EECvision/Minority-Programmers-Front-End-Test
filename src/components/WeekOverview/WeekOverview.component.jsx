import React from 'react';
import './WeekOverview.css';

function WeekOverview() {
  return (
    <div className="weekContainer">
      <div class="circular">
        <div class="inner"></div>
        <div class="number">100%</div>
        <div class="circle">
          <div class="bar left">
            <div class="progress"></div>
          </div>
          <div class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default WeekOverview;