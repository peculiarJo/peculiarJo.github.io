import React from 'react'

class About extends React.Component{
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
           <section id="about">
    			<div className="container-fluid">
    				<div className="animate-box section-header" data-animate-effect="fadeInLeft">
    					<span className="font-note">About Me</span>
    					<h2 className="header">Who Am I</h2>
    				</div>
                    <div className="container-fluid">
                        <p>
                            I am from China and have been living in Singapore since 2007. I am a software engineer currently developing data related IT products
                            for digital media industry. I enjoy problem solving, particularly those involve logical thinking. With 5-year experience in software industry, my
                            passion for technologies never fades but only grows stronger. I am constantly working towards bringing out my potentials and skills to deliver products that can make an impact
                            on people's life. In my spare time, I like to travel. I enjoy solo travelling as well as trips with friends.
                        </p>
                    </div>
    			</div>
    		</section>
       )
    }
}
export default About