import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Layout extends React.Component {
  render(){
    const id = parseInt(this.props.match.params.id);
    const tallys = _.range(id).map((val) => {
      return (
        <div className="tally" key={val}></div>
      );
    });
    return (
      <div>
        <div className="banner">
          <h1>Tally Chart</h1>
        </div>
        <div className="add-one">
          <Link to={`/${id+1}`} className="btn btn-primary">Add 1 to Tally!</Link>
          <h2 className="count">Count: {id}</h2>
        </div>
        <div id="container">
          {tallys}
        </div>
      </div>
    );
  }
}
export default Layout;
