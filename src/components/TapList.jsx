import React from 'react';
import Tap from './Tap';

var tapList = [
    {
        name: '',
        brand: '',
        abv: '',
        price: '',
        pints: '',
    },
]

function TapList() {
    return (
        <div className='container'>
            <div className='row'>
                {tapList.map((tap, index) =>
                    <Tap
                        name={tap.name}
                        brand={tap.brand}
                        abv={tap.abv}
                        price={rap.price}
                        pints={tap.pints}
                        key={index}
                    />
                )}
            </div>
        </div>
    );
}

export default TapList;