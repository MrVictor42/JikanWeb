import React, { useState, useEffect } from 'react';

import { getListManga } from '../../api/manga';

import ListManga from '../lists/ListManga';

const MangaList = () => {

    const [loading, setLoading] = useState(true);
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        syncList();
    },[]);

    async function syncList() {
        setLoading(true);
        const manga = await getListManga();
        setMangaList(manga.data.top);
        setLoading(false);
    }

    return (
        <ListManga 
            mangaList = { mangaList } loading = { loading }
            messageType = 'Manga List'
            message = 'Loading Manga List, Wait For ...'
        />
    )
};

export default MangaList;