import React, {PropTypes} from 'react';

class PeopleTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-bordered table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>

        {this.props.people.map(person => {
          return (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleTable;
