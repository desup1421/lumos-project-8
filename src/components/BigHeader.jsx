import React from "react";
import PropTypes from "prop-types";

const BigHeader = ({ children }) => {
  return (
    <header className="border-b border-y border-text p-4">
      <h1 className="font-bold uppercase text-center text-[72px] tablet:text-[160.8px] desktop:text-[243.8px]">
        {children}
      </h1>
    </header>
  );
};

BigHeader.propTypes = {
  children: PropTypes.string,
};
export default BigHeader;
