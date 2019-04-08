import React from 'react'
import './Layout.css'
import Content from './../Content/Content'
import Side from './Side/Side'

class Layout extends React.Component {
    constructor(){
        super();
        this.state={open:false};
    }

    toggle(){
        this.setState({
            open:!this.state.open
        });
    }
	render() {

		return (
			<div className="content-wrap">	  	
			<i className={this.state.open?"menu-collapse fa-2x fa-angle-double-left fa":"fa fa-2x fa-bars menu-open"}
			   onClick={this.toggle.bind(this)}
			>
			</i>
              <div className={this.state.open||this.state.width>767?'side':'collapse'}>		
				  	<Side />
			  </div>
              <div className="content">
			  <Content />
			  </div>
            </div>
		)
	}
	
    updateDimensions=()=> {
        this.setState({width: window.innerWidth});
    }
    componentWillMount=()=> {
        this.updateDimensions();
    }
    componentDidMount=()=> {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount=()=> {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default Layout