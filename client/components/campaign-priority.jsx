import React from 'react';
import PropTypes from 'prop-types';

const CampaignPriority = ({ priority, changePriority }) => {
  // renders each campaign priority with a button to move priority.
  // an up arrow button does not show for top priority. Down button does not show for last priority
  function renderPriorities() {
    return priority.map((item, i) => {
      const down = <button id="arrow-down" type="button" onClick={() => changePriority('down', i)} />;
      const up = <button id="arrow-up" type="button" onClick={() => changePriority('up', i)} />;
      return (
        <div key={i} className="priority">
          <p>{item}</p>
          {i !== priority.length - 1 && down}
          {i !== 0 && up}
        </div>
      );
    });
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
  changePriority: PropTypes.func.isRequired,
};

export default CampaignPriority;
