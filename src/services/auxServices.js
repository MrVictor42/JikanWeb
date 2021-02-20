export const compareDates = (date1, date2) => {
    if (date1 > date2) {
        return ('Already Launched!');
    } else if (date1 < date2) {
        return ('Not Yet Released!');
    }
    else {
        return ('Released Today!');
    } 
}