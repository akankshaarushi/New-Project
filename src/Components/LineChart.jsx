import React from 'react';
import '../Style/chart.css';

const LineChart = () => {

              const arr = ["20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px","20px","10px","11px","18px","15px"]
              return (
                            <div className='timelinechart'>
                              <div className='colm-box'>
                                {
                                  arr.map((i, index ) => {return   <div className='colm' style={{ width: "18px", height: `${i}`  }} ></div>})
                        
                                }
                              </div>
                            </div>
                          )
}

export default LineChart