import React from 'react'

class Fun extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section id="fun" style={{ minHeight: '500px' }}>
                <div className="container-fluid">
                    <div className="animate-box section-header" data-animate-effect="fadeInLeft">
                        <span className="font-note">Fun!</span>
                        <h2 className="header">My Stories</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="story-box">
                        <div className="services">
                            <span className="icon text-center">
                                <i className="fa fa-lightbulb-o fa-2x"></i>
                            </span>
                            <div className="story-body">
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4" style={{maxHeight:"350px",overflowY:"scroll"}}>
                                            <img src="/images/exConvert.jpg" className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8" style={{display:"flex",alignItems:"center"}}>
                                            <div className="card-body">
                                                <h3>1. WeChat Mini Program</h3>
                                                <p></p>
                                                <p className="card-text">A simple and straight-forward mini program for converting currencies using rates retrieved from a 3rd party API</p>
                                                <p className="card-text"><small className="text-muted">Rates credits to https://exchangeratesapi.io/</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="story-box">
                        <div className="services">
                            <span className="icon text-center">
                                <i className="fa fa-lightbulb-o fa-2x"></i>
                            </span>
                            <div className="story-body">
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4" style={{maxHeight:"350px",overflowY:"scroll"}}>
                                            <img src="/images/weirdThing.jpg" className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8" style={{display:"flex",alignItems:"center"}}>
                                            <div className="card-body">
                                                <h3>2. WeirdThing - Community Portal</h3>
                                                <p></p>
                                                <p className="card-text">An interactive site hosted on firebase where users can register and then add posts and share with others</p>
                                                <p className="card-text"><a href="https://my-react-project-32388.firebaseapp.com/">Check it out</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Fun