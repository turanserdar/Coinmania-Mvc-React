import axios from 'axios';

// Model layer for the main page
export default class MainPageModel {
  // Method to fetch data
  static async getCoins(page) {
    const options = {
      params: {
        limit: '15',
        offset: (page - 1) * 15, // number of records to skip
      },
    };

    try {
      const res = await axios.get(
        'https://api.coincap.io/v2/assets',
        options
      );

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
