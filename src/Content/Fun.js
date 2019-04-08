import React from 'react'

class Fun extends React.Component{
    constructor(){
        super();
    }

    render() {
       return (
           <section id="fun" style={{minHeight:'500px'}}>
    			<div className="container-fluid">
    				<div className="animate-box section-header" data-animate-effect="fadeInLeft">
    					<span className="font-note">Fun!</span>
    					<h2 className="header">My Stories</h2>
    				</div>
    			</div>
                <div className="container-fluid">
                    To be updated!
                </div>
    		</section>
       )
    }
}
export default Fun