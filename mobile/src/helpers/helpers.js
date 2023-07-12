import numeral from 'numeral';
export const formatCurrency = (value) => {
    return numeral(value).format('0,0 ');
};

export const timeStamp = (timeStamp) => {
    const date = new Date(timeStamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dateString = `${day}/${month}/${year}`;

    return dateString;
}