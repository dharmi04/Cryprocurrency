import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '593e27f31dmshc4b5badb760f578p156d8cjsnd716c14db0a8',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({
    url,
    headers: cryptoApiHeaders
})

export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
      
    })
})
export const{
    useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,
}= cryptoApi;

// const options = {
// 	method: 'GET',
// 	hostname: 'coinranking1.p.rapidapi.com',
// 	port: null,
// 	path: '/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
// 	headers: {
// 		'x-rapidapi-key': '593e27f31dmshc4b5badb760f578p156d8cjsnd716c14db0a8',
// 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// 	}
// };