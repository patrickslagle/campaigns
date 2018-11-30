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
      priority: ['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200'],
    };
    this.fetchUserData = this.fetchUserData.bind(this);
    this.changePriority = this.changePriority.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
  }

  // fetches userData based on user IP
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
      .catch(err => console.error('Unknown User'));
  }

  changePriority(direction, index) {
    const { priority } = this.state;
    const newPriority = Object.assign(priority);
    // move priority up, swapping places with priority above
    if (direction === 'up') {
      const temp = newPriority[index];
      newPriority[index] = newPriority[index - 1];
      newPriority[index - 1] = temp;
    }
    // move priority down, swapping places with priority below
    else if (direction === 'down') {
      const temp = newPriority[index];
      newPriority[index] = newPriority[index + 1];
      newPriority[index + 1] = temp;
    }
    this.setState({ priority: newPriority });
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
        <CampaignPriority
          priority={priority}
          changePriority={this.changePriority}
        />
      </div>
    );
  }
}
