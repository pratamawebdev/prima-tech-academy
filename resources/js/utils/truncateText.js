export const truncateText = (text, number) => {
    return text.length > number ? `${text.substring(0, number)}...` : text;
};
