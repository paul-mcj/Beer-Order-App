// // note: component is unused!

// // React & Hooks
// import React, { useRef } from "react";
// import PropTypes from "prop-types";

// const Input = ({ handleSubmit, currentItemAmount }) => {
//     const handleInput = (e) => {
//         e.preventDefault();
//         // validation for non-zero numbers and character inputs
//         if (
//             isNaN(inputRef.current.value) ||
//             Number(inputRef.current.value) < 0 ||
//             inputRef.current.value.trim().length <= 0
//         )
//             // notification
//             console.log("not a number");
//         // valid inputs will convert to type number before passing to parent component
//         else handleSubmit(Number(inputRef.current.value));
//     };

//     const inputRef = useRef();

//     return (
//         <form onSubmit={handleInput}>
//             {/* <input ref={inputRef} className="self-center w-10" placeholder="0" /> */}
//             <h1>{currentItemAmount}</h1>
//         </form>
//     );
// };

// Input.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     currentItemAmount: PropTypes.number.isRequired
// };

// export default Input;
