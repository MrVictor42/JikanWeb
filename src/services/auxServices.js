export const dayOfWeek = () => {

    const day = new Date();
    const weekday = new Array(7);
    weekday[0] = 'sunday';
    weekday[1] = 'monday';
    weekday[2] = 'tuesday';
    weekday[3] = 'wednesday';
    weekday[4] = 'thursday';
    weekday[5] = 'friday';
    weekday[6] = 'saturday';

    return weekday[day.getDay()];
};

export const currentSeasonAnime = (currentMonth) => {
    
    let season = '';

    if(currentMonth >= 3 && currentMonth <= 5) {
        season = 'spring';
    } else if(currentMonth > 5 && currentMonth <= 8) {
        season = 'summer';
    } else if(currentMonth > 8 && currentMonth <= 11) {
        season = 'fall';
    } else {
        season = 'winter';
    }

    return season;
};