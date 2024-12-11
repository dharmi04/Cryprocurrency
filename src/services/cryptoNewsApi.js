import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryproNewsHeaders={
    'x-rapidapi-key': '593e27f31dmshc4b5badb760f578p156d8cjsnd716c14db0a8',
	'x-rapidapi-host': 'bing-search-apis.p.rapidapi.com'
}

const baseUrl='https://bing-search-apis.p.rapidapi.com'

const createRequest = (url) =>({
    url,
    headers: cryproNewsHeaders
})

export const cryptoNewsApi= createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})
export const{
    useGetCryptoNewsQuery,
}= cryptoNewsApi;


// const http = require('https');

// const options = {
// 	method: 'GET',
// 	hostname: 'bing-search-apis.p.rapidapi.com',
// 	port: null,
// 	path: '/api/rapid/web_search?keyword=how-to-use-excel-for-free&page=0&size=30',
// 	headers: {
// 		'x-rapidapi-key': '593e27f31dmshc4b5badb760f578p156d8cjsnd716c14db0a8',
// 		'x-rapidapi-host': 'bing-search-apis.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();