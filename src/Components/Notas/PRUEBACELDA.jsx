// // import React from "react";
// import React, { useState } from 'react';



// const MyComponent = () => {
//   const [textareaValue, setTextareaValue] = useState('');

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setTextareaValue(value);
//     event.target.style.height = 'auto';
//     event.target.style.height = event.target.scrollHeight + 'px';
//   };

//   return (
//     <div class="textarea-container" >
//           <textarea
//             class="textarea-left"
//              id="textarea-left"
//              style={{ width: "300px", resize: "none", height: "80px" }}
//             onChange={handleChange}
//           ></textarea>
//           <textarea
//             class="textarea-right"
//              id="textarea-right"
//              style={{ width: "300px", resize: "none"}}
//           ></textarea>
//     </div>

//   );
// };

// export default MyComponent;


import React, { useState } from "react";

const MyComponent = () => {
  const [textAreas, setTextAreas] = useState(["Texto largo..."]);

    const [textareaValue, setTextareaValue] = useState('');

  const handleAddTextArea = () => {
    setTextAreas((prevState) => [...prevState, ""]);
  };

  const handleRemoveTextArea = (index) => {
    const updatedTextAreas = [...textAreas];
    updatedTextAreas.splice(index, 1);
    setTextAreas(updatedTextAreas);
  };

  const handleChange = (event, index) => {
    const { value } = event.target;
    const updatedTextAreas = [...textAreas];
    updatedTextAreas[index] = value;
    setTextAreas(updatedTextAreas);
    setTextareaValue(value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  return (
    <div>
      {textAreas.map((text, index) => (
            <div class="textarea-container" >
          <textarea
            class="textarea-left"
             id="textarea-left"
             style={{ width: "300px", resize: "none", height: "80px" }}
            onChange={handleChange}
          ></textarea>
          <textarea
            class="textarea-right"
             id="textarea-right"
             style={{ width: "300px", resize: "none"}}
          ></textarea>
     </div>
      ))}
      <button onClick={handleAddTextArea}>Agregar textarea</button>
    </div>
  );
};

export default MyComponent;
