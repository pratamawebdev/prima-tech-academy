export const getCurrentDate = () => {
    const date = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Jakarta",
    };
    return date.toLocaleDateString("en-US", options);
};
