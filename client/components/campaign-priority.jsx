import React from 'react';
import PropTypes from 'prop-types';

const CampaignPriority = ({ priority }) => {

  return (
    <div>
      {priority}
    </div>
  );
};

CampaignPriority.propTypes = {
  priority: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default CampaignPriority;

