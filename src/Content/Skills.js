import React from 'react'

class Skills extends React.Component{
    constructor(){
        super();
        this.state={activePane:0};
    }

    toggle(activePane){
        if(activePane==this.state.activePane)
            activePane=null;
        this.setState({
            activePane:activePane
        });
    }

    render() {
       return (
           <section id="skills">
    			<div className="container-fluid">
    				<div className="animate-box section-header" data-animate-effect="fadeInLeft">
    					<span className="font-note">Skills</span>
    					<h2 className="header">My Skills</h2>
    				</div>
                    <div className="panel panel-default section-content">
                        <div className="panel-heading">
                          <h2 className="panel-title">
                              <button className="btn btn-block" onClick={this.toggle.bind(this,0)}>Programming
                                  <i className={this.state.activePane!=0?'fa fa-plus pull-right':'fa fa-minus pull-right'}></i>
                              </button>
                          </h2>
                        </div>
                        <div className={this.state.activePane==0?'panel-body':'collapse'}>
                            <div className="container">
                                <h5>Languages</h5>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        JavaScript
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="80"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
					        	    	  	</div>
					        	    	</div>
                                        HTML5
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="80"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
					        	    	  	</div>
					        	    	</div>
                                        CSS3
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
						      	        <div className="progress">
						      	         	<div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
						      	          	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
						      	          	</div>
						      	        </div>
                                        C#
                                    </div>
                                    <div className="col-sm">
						      	        <div className="progress">
						      	         	<div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
						      	          	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
						      	          	</div>
						      	        </div>
                                        SQL/MS SQL Server
                                    </div>
                                    <div className="col-sm">
						      	        <div className="progress">
						      	         	<div className="progress-bar color-1" role="progressbar" aria-valuenow="50"
						      	          	aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
						      	          	</div>
						      	        </div>
                                        Python
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="60"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
					        	    	  	</div>
					        	    	</div>
                                        C/C++
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="50"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Java
                                    </div>
                                    <div className="col-sm">
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="container">
                                <h5>Frameworks & Libraries</h5>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        AngularJs/Angular
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        ASP.Net/ASP.Net Core
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="60"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
					        	    	  	</div>
					        	    	</div>
                                        React
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
					        	    	  	</div>
					        	    	</div>
                                        D3.js
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
					        	    	  	</div>
					        	    	</div>
                                        jQuery
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="80"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Bootstrap
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default section-content">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <button className="btn btn-block" onClick={this.toggle.bind(this,1)}>Languages
                                    <i className={this.state.activePane!=1?'fa fa-plus pull-right':'fa fa-minus pull-right'}></i>
                                </button>
                            </h2>
                        </div>
                        <div className={this.state.activePane==1?'panel-body':'collapse'}>    
                            <div className="container">
                                <h5>Chinese (Native)</h5>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="100"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Listening
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Reading
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="90"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Writing
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="container">
                                <h5>English</h5>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Listening
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="80"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Reading
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Writing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default section-content">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <button className="btn btn-block" onClick={this.toggle.bind(this,2)}>Others
                                    <i className={this.state.activePane!=2?'fa fa-plus pull-right':'fa fa-minus pull-right'}></i>
                                </button>
                            </h2>
                        </div>
                        <div className={this.state.activePane==2?'panel-body':'collapse'}>    
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Agile development (Scrum)
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
					        	    	  	</div>
					        	    	</div>
                                        SDLC & Version controleading (git/bitbucket)
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="75"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
					        	    	  	</div>
					        	    	</div>
                                        API generator (Swagger)
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="85"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
					        	    	  	</div>
					        	    	</div>
                                        RESTful API
                                    </div>
                                    <div className="col-sm">
					        	    	<div className="progress">
					        	    	 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="60"
					        	    	  	aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
					        	    	  	</div>
					        	    	</div>
                                        Machine learning
                                    </div>
                                    <div className="col-sm">
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
export default Skills