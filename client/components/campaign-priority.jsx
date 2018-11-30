import React from 'react';
import PropTypes from 'prop-types';

const CampaignPriority = ({ priority }) => {
  function renderPriorities() {
    return priority.map((item, i) => (
      <div className="priority">
        <p>{item}</p>
        {i !== priority.length - 1 && <button id="arrow-down" type="button" />}
        {i !== 0 && <button id="arrow-up" type="button" />}
      </div>
    ));
  }

  return (
    <div id="priority-container">
      <h2>Campaign Priorities</h2>
      {renderPriorities()}
    </div>
  );
};

CampaignPriority.propTypes = {
  priority: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default CampaignPriority;

