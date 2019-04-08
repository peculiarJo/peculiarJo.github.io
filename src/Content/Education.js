import React from 'react'

class Education extends React.Component{
    constructor(){
        super();
        this.state={collapse:false};
    }

    toggle(){
        this.setState({
            collapse:!this.state.collapse
        });
    }

    render() {
       return (
           <section id="education">
    			<div className="container-fluid">
    				<div className="animate-box section-header" data-animate-effect="fadeInLeft">
    					<span className="font-note">Education</span>
    					<h2 className="header">Education</h2>
    				</div>
                    <div className="panel panel-default section-content">
                      <div className="panel-heading">
                        <h2 className="panel-title">
                            <button className="btn btn-block" onClick={this.toggle.bind(this)}>Bachelor of Engineer
                                <i className={this.state.collapse?'fa fa-plus pull-right':'fa fa-minus pull-right'}></i>
                            </button>
                        </h2>
                      </div>
                      <div className={this.state.collapse?'collapse':'panel-body'}>
                        <blockquote className="mb-0">
                           <span>National University of Singapore, 2009-2013</span>
                           <p className="panel-content">Enrolled in NUS under the SM2 (senior middle school) scholarship scheme in 2009. Majored in Electrical Engineering. 
                           Graduated in 2013 with a GPA of 4.75/5, First Honor degree. Achievements in school include,<br/> 
                           Dean’s List: 2009/2010 SEM1, 2010/2011 SEM1, 2010/2011 SEM2.<br/>
                           Innovation & Research Award: Merit Award on Final Year Project</p>
                        </blockquote>
                      </div>
                    </div>
    			</div>
    		</section>
       )
    }
}
export default Education