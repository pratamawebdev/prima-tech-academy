const Button = ({
    type = "button",
    onClick,
    classname,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            type={type}
            onClick={onClick}
            className={`w-fit rounded-3xl flex items-center justify-center px-4 py-2 ${classname}`}
        >
            {children}
        </button>
    );
};

export default Button;
