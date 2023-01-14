import {createApi , fetchBaseQuery,  } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '0f3f83c853msh458acb7e0c0c36cp1b52dajsnd622eb17f5d1'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoAPI = createApi({
    reducerPath : 'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    }) 
}) 
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/supply',
//     headers: {
//       'X-RapidAPI-Key': '0f3f83c853msh458acb7e0c0c36cp1b52dajsnd622eb17f5d1',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
//Get coin supply

export const {
    useGetCryptosQuery,
} = cryptoAPI;