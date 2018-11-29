import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCity: '',
      userIndustry: '',
      userCompanySize: '',
    };
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    fetch('/userData')
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(new Error('Unable to fetch user data'));
      })
      .then((userData) => {
        const { City, Industry, Size } = userData[0];
        this.setState({
          userCity: City,
          userIndustry: Industry,
          userCompanySize: Size,
        });
      })
      .catch(err => console.error(err));
  }


  render() {
    return (
      <div>
        <div>{this.state.userCity} - {this.state.userIndustry} - {this.state.userCompanySize}</div>
      </div>
    )
  }
}