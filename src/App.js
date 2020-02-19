// Step 2 - Import connect to connect component to the Redux store

import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature, priceAdjustment } from './actions/actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = props => {
  console.log("App props", props)


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
    props.priceAdjustment(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.priceAdjustment(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }

}

export default connect(mapStateToProps, {addFeature, removeFeature, priceAdjustment})(App);
