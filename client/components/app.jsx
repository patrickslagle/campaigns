import React, { Component } from 'react';
import CampaignPhoto from './campaign-photo.jsx';
import CampaignPriority from './campaign-priority.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCity: '',
      userIndustry: '',
      userCompanySize: '',
      priority: ['Austin', 'San Francisco', 'Software', 'Sports', '0-50', '100-200'],
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
      .catch(err => console.error('Unable to fetch user data'));
  }


  render() {
    const { userCity, userCompanySize, userIndustry, priority } = this.state;
    return (
      <div id="app">
        <CampaignPhoto
          userCity={userCity}
          userCompanySize={userCompanySize}
          userIndustry={userIndustry}
          priority={priority}
        />
        <CampaignPriority priority={priority} />
      </div>
    );
  }
}
