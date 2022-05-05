// react & hooks
import useAnimation from "../../hooks/use-animation";
import PropTypes from "prop-types";

const TextButton = ({ handleClick, btnText, animationType }) => {
    const { shouldAnimate } = useAnimation();

    return (
        <div className="mx-auto mt-10">
            {shouldAnimate ? (
                <button
                    onClick={handleClick}
                    className={`animate-${animationType} btn border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content`}
                >
                    {btnText}
                </button>
            ) : (
                <button
                    onClick={handleClick}
                    className="btn border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content"
                >
                    {btnText}
                </button>
            )}
        </div>
    );
};

TextButton.propTypes = {
    handleClick: PropTypes.func,
    btnText: PropTypes.string.isRequired,
    animationType: PropTypes.string,
};

export default TextButton;
