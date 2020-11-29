import React, { Component } from 'react';
import { GoX } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayMenu} from '../actions';
import ImgDesign from './img_design';


const image_designs = ["garden_trolley.svg", "happy_father.svg", "black_white_rainbow.svg", "guitar_player.svg", "black_horse.svg", "crewdragon.png", "crewdragon2.png"];

class FindDesign extends Component {
  closeMenu = (e) => {
    this.props.displayMenu(e);
  }


  renderList = () => {
    return image_designs.map(imgArt =>
          <div className="col-md-3 col-xs-6">
            <ImgDesign name={imgArt} key={imgArt}/>
          </div>
    )
  }

  render(){
    return(
      <div>
        <h3>Find a design
          <span>
            <GoX style= {{float: "right"}} onClick={(e) => {this.closeMenu('')}} />
          </span>
        </h3>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { displayMenu: displayMenu }, dispatch );
};


export default connect(null, mapDispatchToProps) (FindDesign);
