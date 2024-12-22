import axios from 'axios';
import { SiCoinmarketcap } from 'react-icons/si';
import { MdEventAvailable, MdPriceChange } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

    // Prepare data for the boxes to be displayed on the screen
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Cap',
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: 'Supply',
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: 'Price',
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: '24h Change (%)',
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24h Volume',
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    // Convert price history into the format required by the chart library
    this.chartData = {
      labels: coin?.history.map((i) =>
        new Date(i.date).toLocaleDateString()
      ),
      datasets: [
        {
          id: 1,
          label: 'Price',
          // borderColor: 'red',
          // backgroundColor: 'yellow',
          data: coin?.history.map((i) => i.priceUsd),
        },
      ],
    };
  }

  // Fetches both details and price history from the API
  static async getCoin(id) {
    // Fetch detail data
    const detailRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}`
    );

    // Fetch price history data
    const historyRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

    // Return the data to the function call location
    return {
      detail: detailRes.data.data,
      history: historyRes.data.data,
    };
  }
}
