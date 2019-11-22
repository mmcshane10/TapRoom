import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';

function Admin(props) {
  return (
    <div>
      <TapList
        tapList={props.tapList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;