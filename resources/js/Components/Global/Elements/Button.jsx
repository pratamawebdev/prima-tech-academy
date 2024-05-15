const Button = (props) => {
    const { type = "button", onClick, classname, children } = props;
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-fit rounded-3xl px-4 py-2 flex items-center justify-center ${classname}`}
        >
            {children}
        </button>
    );
};

export default Button;
