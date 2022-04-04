// React & Hooks
import React, { useState } from "react";

const Input = ({ handleSubmit }) => {
    const [value, setValue] = useState(0);

    return (
        <form onSubmit={handleSubmit}>
            <input type="num" className="self-center w-10" placeholder="0" />
        </form>
    );
};

export default Input;
