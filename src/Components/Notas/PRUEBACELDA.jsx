// import React from "react";


// class DynamicTextAreaComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         textAreas: ["Texto largo..."], // Array inicial con un textarea
//       };
//     }
  
//     handleAddTextArea = () => {
//       this.setState((prevState) => ({
//         textAreas: [...prevState.textAreas, ""], // Agregar un textarea vacío al array
//       }));
//     };
  
//     handleRemoveTextArea = (index) => {
//       this.setState((prevState) => {
//         const updatedTextAreas = [...prevState.textAreas];
//         updatedTextAreas.splice(index, 1); // Eliminar el textarea en el índice especificado
//         return { textAreas: updatedTextAreas };
//       });
//     };
  
//     handleChange = (event, index) => {
//       const { value } = event.target;
//       this.setState((prevState) => {
//         const updatedTextAreas = [...prevState.textAreas];
//         updatedTextAreas[index] = value; // Actualizar el valor del textarea en el índice correspondiente
//         return { textAreas: updatedTextAreas };
//       });
//     };
  
//     render() {
//       return (
//         <div>
//           {this.state.textAreas.map((text, index) => (
//             <div className="Row-Guion" key={index}>
//               <textarea
//                 type="text"
//                 className="excel-cell-input"
//                 // value={text}
//                 onChange={(event) => this.handleChange(event, index)}
//                 rows={10}
//                 style={{ width: "100%", resize: "none" }}
//               />
//                <textarea
//                 type="text"
//                 className="excel-cell-input"
//                 // value={text}
//                 onChange={(event) => this.handleChange(event, index)}
//                 rows={10}
//                 style={{ width: "100%", resize: "none" }}
//               />
//               <button onClick={() => this.handleRemoveTextArea(index)}>
//                 Eliminar
//               </button>
//             </div>
//           ))}
//           <button onClick={this.handleAddTextArea}>Agregar textarea</button>
//         </div>
//       );
//     }
//   }
  

//   export default DynamicTextAreaComponent


import React, { useState } from 'react';

const MyComponent = () => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setTextareaValue(value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  return (
    <div className="Row-Guion">
          <textarea
            id="myTextarea"
            value={textareaValue}
            onChange={handleChange}
          ></textarea>
          <textarea
            id="myTextarea"
            value={textareaValue}
            onChange={handleChange}
          ></textarea>
    </div>

  );
};

export default MyComponent;
