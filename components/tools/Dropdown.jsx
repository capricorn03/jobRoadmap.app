import React, { useState } from "react";

function DropdownButton({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"} ▼
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

export default DropdownButton;

// import React, { useState } from "react";

// function DropdownButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = ["Option 1", "Option 2", "Option 3"];

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown">
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {selectedOption || "Select an option"} ▼
//       </button>
//       {isOpen && (
//         <ul>
//           {options.map((option, index) => (
//             <li key={index} onClick={() => handleOptionClick(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DropdownButton;
