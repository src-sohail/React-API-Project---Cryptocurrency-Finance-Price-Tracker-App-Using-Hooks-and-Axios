import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './coin'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handlechange = e => {
    setSearch(e.target.value)
  }

  const filteredcoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  
   return(
     <div className='coin-app'>
       <div className='coin-search'>
         <h1 className='coin-text'>Search A Currency</h1>
         <form>
           <input className='coin-input' type='text' placeholder='Search' onChange={handlechange}></input>
         </form>
       </div>
       {filteredcoins.map(coin => {
         return(
           <Coin
           key={coin.id}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           price={coin.current_price}
           volume={coin.market_cap}
           volume1={coin.total_volume}
           priceChange={coin.price_change_percentage_24h}
           />
         );
         })};
     </div>
   );
        
};

export default App;
