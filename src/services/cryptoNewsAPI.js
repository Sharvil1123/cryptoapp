import {createApi , fetchBaseQuery,  } from '@reduxjs/toolkit/query/react';


const cryptoNewsheaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '0f3f83c853msh458acb7e0c0c36cp1b52dajsnd622eb17f5d1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search7.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsheaders});

export const cryptoNewsAPI = createApi({
    reducerPath : 'cryptoNewsAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    }) 
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsAPI;
