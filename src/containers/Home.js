import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Carousel from './Carousel'

// import eceblue from '../assets/images/ECE_logo_blue.svg';
// import ecewhite from '../assets/images/ECE_logo_white.svg';

class Home extends Component{
  constructor(props) {
		super(props);
	  this.state = {
			counter: ''
		}
		// console.log('%c PROPS at HOME constructor ', 'color:black;background:skyblue;padding:6px;border:2px  black', this.props);
		// console.log('%c STATE at HOME constructor ', 'color:black;background:skyblue;padding:6px;border:2px  black', this.state);
  }

  // renderPlaceholder = () => {
  //   return (<div>
  //     <div className="placeholder" >
  //       <h3><Link to="/features/chair" > Electrical and Computer Engineering </Link></h3>
  //     </div>
  //   </div>);
  // {this.renderPlaceholder()}
  // }

  render() {
    return (
      <div className="home-container">
        {/* <Link to="/features/chair" > */}
            <Carousel />
        {/* </Link> */}
      </div>
    );
  }
}

export default withRouter(Home);
