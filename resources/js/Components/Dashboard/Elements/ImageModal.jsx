import { useEffect, useState } from "react";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            setTimeout(() => setShow(false), 300);
        }
    }, [isOpen]);

    if (!show) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={onClose}
        >
            <div
                className="flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full max-w-[80%] max-h-[80vh] transition-transform duration-300 transform ease-in-out scale-100"
                />
            </div>
        </div>
    );
};

export default ImageModal;
