import React from "react";

const SubmitButton = ({ children }) => {
  return (
    <button
      type="submit"
      href="#_"
      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
