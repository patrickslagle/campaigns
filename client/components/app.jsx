import React, { Component } from 'react';
import CampaignPhoto from './campaign-photo.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCity: '',
      userIndustry: '',
      userCompanySize: '',
      priority: ['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200'],
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
    const { userCity, userCompanySize, userIndustry, priority } = this.state;
    return (
      <div>
        <CampaignPhoto
          userCity={userCity}
          userCompanySize={userCompanySize}
          userIndustry={userIndustry}
          priority={priority}
        />
      </div>
    );
  }
}
