const Modal = ({ open, onClose, children, title }) => {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${
                open ? "visible bg-black/20" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl w-[90%] sm:w-[60%] md:w-[60%] lg:w-[40%] shadow p-6 transition-all ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-0"
                }`}
            >
                <button
                    onClick={onClose}
                    className="absolute p-1 text-gray-400 bg-white rounded-lg top-2 right-2 hover:bg-gray-50 hover:text-gray-600"
                >
                    <img
                        src={"../images/xmark.svg"}
                        alt="xmark icon"
                        className="w-20 h-20"
                    />
                </button>

                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold text-black">
                        {title}
                    </span>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
