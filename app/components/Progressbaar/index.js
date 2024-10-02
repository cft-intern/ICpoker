import React from 'react';
import PropTypes from 'prop-types';
const Progressbaar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="h-full rounded-full bg-[#26D2DC]"
        style={{ width: `${progress}%` }} // Use the progress prop to set the width
      />
      <div className="flex justify-between mt-2">
        <h1 className="md:text-[3.5vh] text-[2.5vh] ml-1">Loding </h1>
        <p className="md:text-[3.5vh] text-[2.5vh] mr-1">{progress}%</p>
      </div>
    </div>
  );
};

Progressbaar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Progressbaar;
