import React from 'react'

class Home extends React.Component{
    constructor(){
        super();
    }

    render() {
       return (
           <section id="home" style={{backgroundImage:"url(/images/home.jpg)",marginLeft:'-20px',marginTop:0}}>
				<div className="container-fluid">
					<div className="row" style={{minHeight:'500px'}}>
						<div className="col align-self-center col-sm-6 welcome-banner">
				   			<h1>Hi! <br/>I'm Wu Zhou</h1>
				   			<h2>Welcome to my personal page</h2>
							<p><a className="btn btn-outline-secondary" href="/file/cv wuzhou - software engineer.pdf">Download CV <i className="fa fa-download"></i></a></p>									
						</div>
					</div>
				</div>
    		</section>
       )
    }
}
export default Home