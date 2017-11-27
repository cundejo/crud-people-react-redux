import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PeopleTable from "./PeopleTable";
import * as peopleActions from '../../actions/peopleActions';

class PeoplePage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>People</h2>
        <button className="btn btn-success btn-sm" onClick={this.goToForm}>Add person</button>
        <br/><br/>
        <PeopleTable people={this.props.people}/>
      </div>
    );
  }
}

PeoplePage.propTypes = {
  people: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
