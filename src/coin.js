import React from 'react'

const Coin = ({ name, image, symbol, price, volume, volume1, priceChange }) => {
    return(
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'></img>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Price: ${price}</p>
                    <p className='coin-volume'>24h Volume: ${volume1}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='coin-marketcap'>MKT-cap: ${volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Coin;