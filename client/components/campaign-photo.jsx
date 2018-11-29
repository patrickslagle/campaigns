import React from 'react';

const CampaignPhoto = ({ userCity, userCompanySize, userIndustry, priority }) => {
  // finds and renders photo for matching campaign
  function renderPhoto() {
    let imgName = '';
    let counter = 0;
    // iterate through the priority until a match is found or iterated through whole priority list
    while (!imgName.length) {
      // if user doesn't match any of the campaigns, render shurg pic
      if (counter === 6) imgName = 'shrug';
      // check if the user matches any of the priority campaigns
      else {
        switch (priority[counter]) {
          case userCity:
            imgName = userCity;
            break;
          case userCompanySize:
            if (userCompanySize === '0-50') imgName = 'proof';
            else if (userCompanySize === '100-200') imgName = 'smb';
            break;
          case userIndustry:
            imgName = userIndustry;
            break;
          default:
            break;
        }
        // iterate to next campaign priority
        counter += 1;
      }
    }
    return <img src={`./assets/${imgName}.jpg`} alt="campaign" />;
  }

  return (
    <div>
      {renderPhoto()}
    </div>
  );
};

export default CampaignPhoto;
