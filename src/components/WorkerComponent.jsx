import React, { Component } from 'react';
import PropTypes from 'prop-types';
import linkedInImg from '../img/teamPage/linkedInImg.png'

class WorkerComponent extends Component {
      constructor(props) {
            super(props);
            this.state = { onHover: null };
      }
      render() {
            const { worker } = this.props
            return (
                  <div className='workerBlock' >
                        <div className='workerImgContainer'>
                              <img
                                    onMouseOver={() => this.setState({ onHover: true })}
                                    className='workerImg'
                                    src={worker.imageSrc}
                                    alt='Team'
                              />
                              <div
                                    style={this.state.onHover ? { display: 'block' } : { display: 'none' }}
                                    onMouseLeave={() => this.setState({ onHover: false })}
                                    className='workerHover'
                              >
                                    <p
                                          className='workerDescription'
                                    >
                                          {worker.description}
                                    </p>
                                    <a
                                          target='_blank'
                                          rel='noopener noreferrer'
                                          className='workerLink'
                                          href={worker.link}
                                    >
                                          <img src={linkedInImg} alt='Linkedin Icon' />
                                    </a>

                              </div>
                        </div>
                        <h4 className='workerName'>
                              {worker.name}
                        </h4>
                        <h5 className='workerPosition'>
                              {worker.position}
                        </h5>
                        <hr className='workerLine' />
                  </div>
            );
      }
}

WorkerComponent.propTypes = {
      worker: PropTypes.object
}

export default WorkerComponent;
