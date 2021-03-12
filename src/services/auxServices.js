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

export const genreList = () => {

    let genres = [];    
    const names = [
        'Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Mystery',
        'Drama', 'Ecchi', 'Fantasy', 'Game', 'Hentai', 'Historical', 'Horror', 
        'Kids', 'Magic', 'Martial Arts', 'Mecha', 'Music', 'Parody', 'Samurai',
        'Romance', 'School', 'Sci-Fi', 'Shoujo', 'Shoujo Ai', 'Shounen', 
        'Shounen Ai', 'Space', 'Sports', 'Super Power', 'Vampire', 'Yaoi', 'Yuri',
        'Harem', 'Slice of Life', 'Supernatural', 'Military', 'Police', 'Psychological',
        'Thriller', 'Seinen', 'Josei'
    ];

    for(let aux = 0; aux < names.length; aux ++) {
        genres.push({
            value: aux + 1,
            label: names[aux]
        });
    }

    return genres;
};