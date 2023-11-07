// Object of sample response of news API
const sampleNews = {
  status: 'ok',
  totalResults: 70,
  articles: [
    {
      source: {
        id: null,
        name: 'CNBCTV18'
      },
      author: 'Hormaz Fatakia',
      title: 'Zomato Share Price: Three analysts expect stock to reach its all-time high in 12 months - CNBCTV18',
      description: '25 of the 29 analysts that track Zomato have a buy recommendation on the stock, while the other four have a sell rating.',
      url: 'https://www.cnbctv18.com/market/zomato-share-price-q2-results-profit-nearly-double-in-2023-all-time-high-analysts-18247681.htm',
      urlToImage: 'https://images.cnbctv18.com/wp-content/uploads/2023/01/zomato-1019x573.jpeg',
      publishedAt: '2023-11-06T03:57:56Z',
      content: null
    }
  ]
}
// Array of countries for filtering news
const countriesList = [
  {
    code: 'ar',
    name: 'Argentina'
  },
  {
    code: 'au',
    name: 'Australia'
  },
  {
    code: 'at',
    name: 'Austria'
  },
  {
    code: 'be',
    name: 'Belgium'
  },
  {
    code: 'br',
    name: 'Brazil'
  },
  {
    code: 'bg',
    name: 'Bulgaria'
  },
  {
    code: 'ca',
    name: 'Canada'
  },
  {
    code: 'cn',
    name: 'China'
  },
  {
    code: 'co',
    name: 'Colombia'
  },
  {
    code: 'cu',
    name: 'Cuba'
  },
  {
    code: 'cz',
    name: 'Czech'
  },
  {
    code: 'eg',
    name: 'Egypt'
  },
  {
    code: 'fr',
    name: 'France'
  },
  {
    code: 'ge',
    name: 'Germany'
  },
  {
    code: 'gr',
    name: 'Greece'
  },
  {
    code: 'hk',
    name: 'Hong Kong'
  },
  {
    code: 'hu',
    name: 'Hungary'
  },
  {
    code: 'in',
    name: 'India'
  },
  {
    code: 'code',
    name: 'Indonesia'
  },
  {
    code: 'ie',
    name: 'Ireland'
  },
  {
    code: 'il',
    name: 'Israel'
  },
  {
    code: 'it',
    name: 'Italy'
  },
  {
    code: 'jp',
    name: 'Japan'
  },
  {
    code: 'lv',
    name: 'Latvia'
  },
  {
    code: 'lt',
    name: 'Lithuania'
  },
  {
    code: 'my',
    name: 'Malaysia'
  },
  {
    code: 'mx',
    name: 'Mexico'
  },
  {
    code: 'ma',
    name: 'Morocco'
  },
  {
    code: 'nl',
    name: 'Netherlands'
  },
  {
    code: 'nz',
    name: 'New Zealand'
  },
  {
    code: 'ng',
    name: 'Nigeria'
  },
  {
    code: 'no',
    name: 'Norway'
  },
  {
    code: 'ph',
    name: 'Philippines'
  },
  {
    code: 'pl',
    name: 'Poland'
  },
  {
    code: 'pt',
    name: 'Portugal'
  },
  {
    code: 'ro',
    name: 'Romania'
  },
  {
    code: 'ru',
    name: 'Russia'
  },
  {
    code: 'sa',
    name: 'Saudi Arabia'
  },
  {
    code: 'rs',
    name: 'Serbia'
  },
  {
    code: 'sg',
    name: 'Singapore'
  },
  {
    code: 'sk',
    name: 'Slovakia'
  },
  {
    code: 'si',
    name: 'Slovenia'
  },
  {
    code: 'za',
    name: 'South Africa'
  },
  {
    code: 'kr',
    name: 'South Korea'
  },
  {
    code: 'se',
    name: 'Sweden'
  },
  {
    code: 'ch',
    name: 'Switzerland'
  },
  {
    code: 'tw',
    name: 'Taiwan'
  },
  {
    code: 'th',
    name: 'Thailand'
  },
  {
    code: 'tr',
    name: 'Turkey'
  },
  {
    code: 'ae',
    name: 'UAE'
  },
  {
    code: 'ua',
    name: 'Ukraine'
  },
  {
    code: 'uk',
    name: 'United Kingdom'
  },
  {
    code: 'us',
    name: 'United States'
  },
  {
    code: 've',
    name: 'Venuzuela'
  }
]
// Array of categories for filtering news
const categoriesList = [
  {
    code: 'business',
    name: 'business'
  },
  {
    code: 'entertainment',
    name: 'entertainment'
  },
  {
    code: 'general',
    name: 'general'
  },
  {
    code: 'health',
    name: 'health'
  },
  {
    code: 'science',
    name: 'science'
  },
  {
    code: 'sports',
    name: 'sports'
  },
  {
    code: 'technology',
    name: 'technology'
  }
]
export { sampleNews, countriesList, categoriesList }
