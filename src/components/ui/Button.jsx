const Button = ({ children, handleClick }) => {
    return (
        <button className="btn btn-ghost mx-2" onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
