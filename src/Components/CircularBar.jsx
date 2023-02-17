import React from 'react';
import '../Style/circular.css';

const CircularBar = () => {
              return (
                            <div>
                                          <div className="box">
                                                        <div className="percentage">
                                                                      <div class="progress-bar">
                                                                                    <progress value="75" min="0" max="100" className='prgressvalue'></progress>
                                                                      </div>
                                                                      <div className="number">
                                                                                    <h5>27<span>%</span></h5>
                                                                      </div>
                                                                      <div className="active">
                                                                                    <span>92,980</span>
                                                                                    <p>active users</p>
                                                                      </div>
                                                        </div>

                                                        <div className="percentage">
                                                                      <div class="progress-bar1">
                                                                                    <progress value="75" min="0" max="100"className='prgressvalue'></progress>
                                                                      </div>
                                                                      <div className="number1">
                                                                                    <h5>67<span>%</span></h5>
                                                                      </div>
                                                                      <div className="active1">
                                                                                    <span>22,652</span>
                                                                                    <p>New users</p>
                                                                      </div>
                                                        </div>
                                          </div>
                            </div>
              )
}

export default CircularBar