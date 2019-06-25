import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from './_actions';
import './UserTable.css';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    this.props.dispatch(getUsers());
  }

  getUserRows() {
    let hasBackgroundColor = false;

    return this.props.users.map(user => {
      let style = {
        backgroundColor: 'white'
      }

      if(hasBackgroundColor) {
        style.backgroundColor = '#eee';
        hasBackgroundColor = !hasBackgroundColor;
      } else {
        style.backgroundColor = 'white'
        hasBackgroundColor = !hasBackgroundColor;
      }

      return (
        
        <tr style={style} key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.company.name}</td>
        </tr>
       
      );
    });
  }

  render() {
    return  (
      <table>
        <tbody>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Email</th> 
            <th>City</th>
            <th>Company</th>
          </tr>
          {this.getUserRows()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(UserTable);