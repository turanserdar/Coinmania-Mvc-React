import millify from 'millify';
import { FaBitcoin } from 'react-icons/fa';
import CardView from './CardView';
import { useNavigate } from 'react-router-dom';

const MainPageView = ({ coins, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome, Coin List</span>
      </h4>

      <p>
        The Coin List is an excellent resource for tracking cryptocurrencies and
        digital assets worldwide.
      </p>

      {/* cards */}
      <div className="d-flex gap-4 justify-content-around my-5">
        {coins.slice(0, 3).map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      {/* table */}
      <table className="table table-dark table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>%Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.id}
              onClick={() => navigate(`/coin/${coin.id}`)}
            >
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">
                  {coin.symbol}
                </span>
                <span>{coin.name}</span>
              </td>
              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td
                className={
                  coin.changePercent24Hr >= 0 ? 'up' : 'down'
                }
              >
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* load more button */}
      <div className="d-flex my-5 justify-content-center">
        <button
          onClick={() => setPage((page) => page + 1)}
          className="button2"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MainPageView;
