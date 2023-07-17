import './App.css';
import {useEffect, useState} from 'react';
import Navbar from './navbar';
import HeaderInfo from './HeaderInfo';



function App() {

 // const [cryptoData, setCryptoData] = useState(null);
  async function fetchCryptoData() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=wrapped-bitcoin%2Cethereum%2Cdai%2Clusd%2Cusd-coin%2Ctether%2C1inch%2Caave%2Cbalancer%2Ccoinbase-wrapped-staked-eth%2Cconvex-crv%2Cethereum-name-service%2Clido-dao%2Cchainlink%2Cmaker%2Crocket-pool-eth%2Chavven%2Cuniswap%2Cweth%2Cwrapped-steth&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then (respone => respone.json())
    .then(data => {
        console.log(data);
        setCryptoData(data);
    })
    .catch(error => {
        console.log('Error:', error);
    });
  }

  const [cryptoData, setCryptoData] = useState([
    {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "current_price": 1929.82,
        "market_cap": 232208150659,
        "market_cap_rank": 2,
        "fully_diluted_valuation": 232208150659,
        "total_volume": 4643324789,
        "high_24h": 1942.78,
        "low_24h": 1919.15,
        "price_change_24h": -0.3539607372676983,
        "price_change_percentage_24h": -0.01834,
        "market_cap_change_24h": 87389540,
        "market_cap_change_percentage_24h": 0.03765,
        "circulating_supply": 120201013.32982,
        "total_supply": 120201013.32982,
        "max_supply": null,
        "ath": 4878.26,
        "ath_change_percentage": -60.42628,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 0.432979,
        "atl_change_percentage": 445766.80478,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
            "times": 84.26119225497281,
            "currency": "btc",
            "percentage": 8426.119225497281
        },
        "last_updated": "2023-07-17T07:36:26.265Z"
    },
    {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        "current_price": 1,
        "market_cap": 83670253208,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 83670253208,
        "total_volume": 15971035884,
        "high_24h": 1.002,
        "low_24h": 0.998463,
        "price_change_24h": 0.00003489,
        "price_change_percentage_24h": 0.00349,
        "market_cap_change_24h": 6502131,
        "market_cap_change_percentage_24h": 0.00777,
        "circulating_supply": 83649374839.9383,
        "total_supply": 83649374839.9383,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.41355,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.68018,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-07-17T07:35:01.420Z"
    },
    {
        "id": "usd-coin",
        "symbol": "usdc",
        "name": "USD Coin",
        "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
        "current_price": 0.999226,
        "market_cap": 27278542272,
        "market_cap_rank": 6,
        "fully_diluted_valuation": 27281882739,
        "total_volume": 2166894246,
        "high_24h": 1.001,
        "low_24h": 0.998052,
        "price_change_24h": -0.000405280169704647,
        "price_change_percentage_24h": -0.04054,
        "market_cap_change_24h": -538279.1171417236,
        "market_cap_change_percentage_24h": -0.00197,
        "circulating_supply": 27277448376.4123,
        "total_supply": 27280788709.6171,
        "max_supply": null,
        "ath": 1.17,
        "ath_change_percentage": -14.77502,
        "ath_date": "2019-05-08T00:40:28.300Z",
        "atl": 0.877647,
        "atl_change_percentage": 13.8771,
        "atl_date": "2023-03-11T08:02:13.981Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:22.424Z"
    },
    {
        "id": "wrapped-bitcoin",
        "symbol": "wbtc",
        "name": "Wrapped Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
        "current_price": 30248,
        "market_cap": 4779324481,
        "market_cap_rank": 17,
        "fully_diluted_valuation": 4779324481,
        "total_volume": 55329547,
        "high_24h": 30419,
        "low_24h": 30105,
        "price_change_24h": -90.46776970561405,
        "price_change_percentage_24h": -0.2982,
        "market_cap_change_24h": -11968733.587078094,
        "market_cap_change_percentage_24h": -0.2498,
        "circulating_supply": 157874.88677655,
        "total_supply": 157874.88677655,
        "max_supply": 157874.88677655,
        "ath": 70643,
        "ath_change_percentage": -57.1766,
        "ath_date": "2021-11-10T14:40:19.650Z",
        "atl": 3139.17,
        "atl_change_percentage": 863.69025,
        "atl_date": "2019-04-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:27.886Z"
    },
    {
        "id": "uniswap",
        "symbol": "uni",
        "name": "Uniswap",
        "image": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1687143398",
        "current_price": 6.02,
        "market_cap": 4539000820,
        "market_cap_rank": 19,
        "fully_diluted_valuation": 6021758481,
        "total_volume": 129876559,
        "high_24h": 6.12,
        "low_24h": 5.68,
        "price_change_24h": 0.245708,
        "price_change_percentage_24h": 4.25391,
        "market_cap_change_24h": 185188811,
        "market_cap_change_percentage_24h": 4.25349,
        "circulating_supply": 753766667,
        "total_supply": 1000000000,
        "max_supply": 1000000000,
        "ath": 44.92,
        "ath_change_percentage": -86.65247,
        "ath_date": "2021-05-03T05:25:04.822Z",
        "atl": 1.03,
        "atl_change_percentage": 481.98591,
        "atl_date": "2020-09-17T01:20:38.214Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:25.938Z"
    },
    {
        "id": "dai",
        "symbol": "dai",
        "name": "Dai",
        "image": "https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png?1687143508",
        "current_price": 0.999875,
        "market_cap": 4278336518,
        "market_cap_rank": 20,
        "fully_diluted_valuation": 4278336518,
        "total_volume": 102492885,
        "high_24h": 1.002,
        "low_24h": 0.997575,
        "price_change_24h": 0.00021099,
        "price_change_percentage_24h": 0.02111,
        "market_cap_change_24h": -3277659.540599346,
        "market_cap_change_percentage_24h": -0.07655,
        "circulating_supply": 4277944688.02132,
        "total_supply": 4277944688.02132,
        "max_supply": 4277944688.02132,
        "ath": 1.22,
        "ath_change_percentage": -17.99839,
        "ath_date": "2020-03-13T03:02:50.373Z",
        "atl": 0.88196,
        "atl_change_percentage": 13.33199,
        "atl_date": "2023-03-11T07:50:50.514Z",
        "roi": null,
        "last_updated": "2023-07-17T07:35:00.435Z"
    },
    {
        "id": "chainlink",
        "symbol": "link",
        "name": "Chainlink",
        "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
        "current_price": 6.68,
        "market_cap": 3460231742,
        "market_cap_rank": 24,
        "fully_diluted_valuation": 6691610768,
        "total_volume": 171691182,
        "high_24h": 6.87,
        "low_24h": 6.59,
        "price_change_24h": -0.1498858923292179,
        "price_change_percentage_24h": -2.19478,
        "market_cap_change_24h": -68108377.94531631,
        "market_cap_change_percentage_24h": -1.93032,
        "circulating_supply": 517099972.2305644,
        "total_supply": 1000000000,
        "max_supply": 1000000000,
        "ath": 52.7,
        "ath_change_percentage": -87.31735,
        "ath_date": "2021-05-10T00:13:57.214Z",
        "atl": 0.148183,
        "atl_change_percentage": 4410.17747,
        "atl_date": "2017-11-29T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:22.562Z"
    },
    {
        "id": "lido-dao",
        "symbol": "ldo",
        "name": "Lido DAO",
        "image": "https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644",
        "current_price": 2.19,
        "market_cap": 1924616860,
        "market_cap_rank": 32,
        "fully_diluted_valuation": 2190175572,
        "total_volume": 46862391,
        "high_24h": 2.34,
        "low_24h": 2.17,
        "price_change_24h": -0.0810136946890414,
        "price_change_percentage_24h": -3.57231,
        "market_cap_change_24h": -66753713.130634785,
        "market_cap_change_percentage_24h": -3.35215,
        "circulating_supply": 878750034.770967,
        "total_supply": 1000000000,
        "max_supply": 1000000000,
        "ath": 7.3,
        "ath_change_percentage": -70.04359,
        "ath_date": "2021-08-20T08:35:20.158Z",
        "atl": 0.40615,
        "atl_change_percentage": 438.63823,
        "atl_date": "2022-06-18T20:55:12.035Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:28.968Z"
    },
    {
        "id": "aave",
        "symbol": "aave",
        "name": "Aave",
        "image": "https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1601374110",
        "current_price": 78.28,
        "market_cap": 1135034493,
        "market_cap_rank": 41,
        "fully_diluted_valuation": 1253718707,
        "total_volume": 73037134,
        "high_24h": 79.51,
        "low_24h": 76.38,
        "price_change_24h": -1.22475231332092,
        "price_change_percentage_24h": -1.5404,
        "market_cap_change_24h": -5949872.948756695,
        "market_cap_change_percentage_24h": -0.52147,
        "circulating_supply": 14485348.092717433,
        "total_supply": 16000000,
        "max_supply": 16000000,
        "ath": 661.69,
        "ath_change_percentage": -88.18122,
        "ath_date": "2021-05-18T21:19:59.514Z",
        "atl": 26.02,
        "atl_change_percentage": 200.51595,
        "atl_date": "2020-11-05T09:20:11.928Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:25.964Z"
    },
    {
        "id": "rocket-pool-eth",
        "symbol": "reth",
        "name": "Rocket Pool ETH",
        "image": "https://assets.coingecko.com/coins/images/20764/large/reth.png?1637652366",
        "current_price": 2079.91,
        "market_cap": 997681979,
        "market_cap_rank": 44,
        "fully_diluted_valuation": 997681979,
        "total_volume": 487932,
        "high_24h": 2092.15,
        "low_24h": 2067.56,
        "price_change_24h": 0.100842,
        "price_change_percentage_24h": 0.00485,
        "market_cap_change_24h": 769183,
        "market_cap_change_percentage_24h": 0.07716,
        "circulating_supply": 479304.888793995,
        "total_supply": 479304.888793995,
        "max_supply": null,
        "ath": 4814.31,
        "ath_change_percentage": -56.78894,
        "ath_date": "2021-12-01T08:03:50.749Z",
        "atl": 887.26,
        "atl_change_percentage": 134.4641,
        "atl_date": "2022-06-18T20:55:45.957Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:21.604Z"
    },
    {
        "id": "maker",
        "symbol": "mkr",
        "name": "Maker",
        "image": "https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png?1585191826",
        "current_price": 958.79,
        "market_cap": 865945419,
        "market_cap_rank": 50,
        "fully_diluted_valuation": 966120293,
        "total_volume": 92982257,
        "high_24h": 1005.55,
        "low_24h": 939.96,
        "price_change_24h": 4.71,
        "price_change_percentage_24h": 0.4937,
        "market_cap_change_24h": 10555798,
        "market_cap_change_percentage_24h": 1.23403,
        "circulating_supply": 901310.9472893132,
        "total_supply": 977631.036950888,
        "max_supply": 1005577,
        "ath": 6292.31,
        "ath_change_percentage": -84.7282,
        "ath_date": "2021-05-03T21:54:29.333Z",
        "atl": 168.36,
        "atl_change_percentage": 470.77897,
        "atl_date": "2020-03-16T20:52:36.527Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:25.188Z"
    },
    {
        "id": "havven",
        "symbol": "snx",
        "name": "Synthetix Network",
        "image": "https://assets.coingecko.com/coins/images/3406/large/SNX.png?1598631139",
        "current_price": 2.68,
        "market_cap": 861915203,
        "market_cap_rank": 51,
        "fully_diluted_valuation": 863861968,
        "total_volume": 64529534,
        "high_24h": 2.8,
        "low_24h": 2.62,
        "price_change_24h": -0.11268429081395137,
        "price_change_percentage_24h": -4.03165,
        "market_cap_change_24h": -33011076.60375333,
        "market_cap_change_percentage_24h": -3.68869,
        "circulating_supply": 320504673.13952357,
        "total_supply": 321228581.088774,
        "max_supply": 321228581.088774,
        "ath": 28.53,
        "ath_change_percentage": -90.57649,
        "ath_date": "2021-02-14T01:12:38.505Z",
        "atl": 0.0347864,
        "atl_change_percentage": 7629.29535,
        "atl_date": "2019-01-06T00:00:00.000Z",
        "roi": {
            "times": 4.364612741701184,
            "currency": "usd",
            "percentage": 436.4612741701184
        },
        "last_updated": "2023-07-17T07:36:27.600Z"
    },
    {
        "id": "1inch",
        "symbol": "1inch",
        "name": "1inch",
        "image": "https://assets.coingecko.com/coins/images/13469/large/1inch-token.png?1608803028",
        "current_price": 0.570516,
        "market_cap": 520805187,
        "market_cap_rank": 86,
        "fully_diluted_valuation": 822482575,
        "total_volume": 585976544,
        "high_24h": 0.570099,
        "low_24h": 0.38872,
        "price_change_24h": 0.181795,
        "price_change_percentage_24h": 46.76765,
        "market_cap_change_24h": 148653951,
        "market_cap_change_percentage_24h": 39.9445,
        "circulating_supply": 949816816.066468,
        "total_supply": 1500000000,
        "max_supply": 1500000000,
        "ath": 8.65,
        "ath_change_percentage": -93.82566,
        "ath_date": "2021-10-27T08:24:54.808Z",
        "atl": 0.254171,
        "atl_change_percentage": 110.16549,
        "atl_date": "2023-06-15T17:41:38.825Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:28.101Z"
    },
    {
        "id": "ethereum-name-service",
        "symbol": "ens",
        "name": "Ethereum Name Service",
        "image": "https://assets.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg?1635850140",
        "current_price": 9.99,
        "market_cap": 257553096,
        "market_cap_rank": 138,
        "fully_diluted_valuation": 998916980,
        "total_volume": 12655657,
        "high_24h": 10.07,
        "low_24h": 9.65,
        "price_change_24h": 0.183215,
        "price_change_percentage_24h": 1.86907,
        "market_cap_change_24h": 5348501,
        "market_cap_change_percentage_24h": 2.1207,
        "circulating_supply": 25783233.34309683,
        "total_supply": 100000000,
        "max_supply": 100000000,
        "ath": 83.4,
        "ath_change_percentage": -88.03716,
        "ath_date": "2021-11-11T02:20:01.099Z",
        "atl": 7.05,
        "atl_change_percentage": 41.5205,
        "atl_date": "2023-06-15T17:25:58.700Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:21.834Z"
    },
    {
        "id": "convex-crv",
        "symbol": "cvxcrv",
        "name": "Convex CRV",
        "image": "https://assets.coingecko.com/coins/images/15586/large/convex-crv.png?1621255952",
        "current_price": 0.791139,
        "market_cap": 233600116,
        "market_cap_rank": 151,
        "fully_diluted_valuation": 233600116,
        "total_volume": 62697,
        "high_24h": 0.805397,
        "low_24h": 0.786284,
        "price_change_24h": -0.006602082617353845,
        "price_change_percentage_24h": -0.8276,
        "market_cap_change_24h": -3022560.1818106174,
        "market_cap_change_percentage_24h": -1.27738,
        "circulating_supply": 295224063.249392,
        "total_supply": 295224063.249392,
        "max_supply": null,
        "ath": 6.48,
        "ath_change_percentage": -87.78583,
        "ath_date": "2022-01-03T14:01:45.955Z",
        "atl": 0.393069,
        "atl_change_percentage": 101.2442,
        "atl_date": "2022-11-22T11:23:02.517Z",
        "roi": null,
        "last_updated": "2023-07-17T07:33:22.153Z"
    },
    {
        "id": "balancer",
        "symbol": "bal",
        "name": "Balancer",
        "image": "https://assets.coingecko.com/coins/images/11683/large/Balancer.png?1592792958",
        "current_price": 4.82,
        "market_cap": 203321869,
        "market_cap_rank": 168,
        "fully_diluted_valuation": 464224866,
        "total_volume": 5491008,
        "high_24h": 4.91,
        "low_24h": 4.69,
        "price_change_24h": 0.094749,
        "price_change_percentage_24h": 2.0042,
        "market_cap_change_24h": 4285624,
        "market_cap_change_percentage_24h": 2.15319,
        "circulating_supply": 42112222.4137508,
        "total_supply": 58082941.8974128,
        "max_supply": 96150704,
        "ath": 74.45,
        "ath_change_percentage": -93.52156,
        "ath_date": "2021-05-04T13:35:02.939Z",
        "atl": 3.66,
        "atl_change_percentage": 31.93533,
        "atl_date": "2022-06-18T21:00:00.231Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:27.886Z"
    },
    {
        "id": "wrapped-steth",
        "symbol": "wsteth",
        "name": "Wrapped stETH",
        "image": "https://assets.coingecko.com/coins/images/18834/large/wstETH.png?1633565443",
        "current_price": 2185.25,
        "market_cap": 0,
        "market_cap_rank": null,
        "fully_diluted_valuation": 138408580,
        "total_volume": 16321127,
        "high_24h": 2198.55,
        "low_24h": 2172.46,
        "price_change_24h": 0.0197856,
        "price_change_percentage_24h": 0.00091,
        "market_cap_change_24h": 0,
        "market_cap_change_percentage_24h": 0,
        "circulating_supply": 0,
        "total_supply": 63283,
        "max_supply": null,
        "ath": 7256.02,
        "ath_change_percentage": -69.87742,
        "ath_date": "2022-05-13T15:09:54.509Z",
        "atl": 558.54,
        "atl_change_percentage": 291.32391,
        "atl_date": "2022-05-13T01:36:45.053Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:19.763Z"
    },
    {
        "id": "coinbase-wrapped-staked-eth",
        "symbol": "cbeth",
        "name": "Coinbase Wrapped Staked ETH",
        "image": "https://assets.coingecko.com/coins/images/27008/large/cbeth.png?1661390066",
        "current_price": 2012.96,
        "market_cap": 0,
        "market_cap_rank": null,
        "fully_diluted_valuation": 2325070410,
        "total_volume": 1194386,
        "high_24h": 2025.19,
        "low_24h": 2002.48,
        "price_change_24h": -0.9442066639737732,
        "price_change_percentage_24h": -0.04688,
        "market_cap_change_24h": 0,
        "market_cap_change_percentage_24h": 0,
        "circulating_supply": 0,
        "total_supply": 1154273.52976572,
        "max_supply": null,
        "ath": 2191.04,
        "ath_change_percentage": -8.07835,
        "ath_date": "2023-04-16T19:25:37.525Z",
        "atl": 1036.96,
        "atl_change_percentage": 94.22605,
        "atl_date": "2022-11-09T23:45:43.665Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:29.580Z"
    },
    {
        "id": "lusd",
        "symbol": "lusd",
        "name": "LUSD",
        "image": "https://assets.coingecko.com/coins/images/25223/large/lusd_200x200.png?1650957327",
        "current_price": 0.971899,
        "market_cap": 0,
        "market_cap_rank": null,
        "fully_diluted_valuation": 1809852,
        "total_volume": 3713.5,
        "high_24h": 0.982552,
        "low_24h": 0.965479,
        "price_change_24h": -0.00919834400774766,
        "price_change_percentage_24h": -0.93756,
        "market_cap_change_24h": 0,
        "market_cap_change_percentage_24h": 0,
        "circulating_supply": 0,
        "total_supply": 1861069.35258109,
        "max_supply": null,
        "ath": 1.45,
        "ath_change_percentage": -33.17288,
        "ath_date": "2023-01-18T17:14:24.662Z",
        "atl": 0.615531,
        "atl_change_percentage": 57.89901,
        "atl_date": "2023-05-27T00:35:56.967Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:16.120Z"
    },
    {
        "id": "weth",
        "symbol": "weth",
        "name": "WETH",
        "image": "https://assets.coingecko.com/coins/images/2518/large/weth.png?1628852295",
        "current_price": 1930.7,
        "market_cap": 0,
        "market_cap_rank": null,
        "fully_diluted_valuation": 6594127318,
        "total_volume": 308068106,
        "high_24h": 1942.5,
        "low_24h": 1918.81,
        "price_change_24h": -0.47448865011506314,
        "price_change_percentage_24h": -0.02457,
        "market_cap_change_24h": 0,
        "market_cap_change_percentage_24h": 0,
        "circulating_supply": 0,
        "total_supply": 3412997.74491347,
        "max_supply": null,
        "ath": 4863.7,
        "ath_change_percentage": -60.30435,
        "ath_date": "2021-11-10T16:29:22.565Z",
        "atl": 3.95e-16,
        "atl_change_percentage": 489222494078998400000,
        "atl_date": "2020-10-28T10:54:30.835Z",
        "roi": null,
        "last_updated": "2023-07-17T07:36:23.567Z"
    }
]);




  // Function to run once at the beginning
  useEffect(() => {
    //fetchCryptoData();
   
    console.log(cryptoData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

    
  

  return (
    <div className="App">
      <Navbar/>
      {cryptoData && <HeaderInfo cryptoData = {cryptoData}/>}
    </div>
  );
}

export default App;
