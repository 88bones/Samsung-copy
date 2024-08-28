import React, { useState } from 'react';

const CharCount = () => {
    const [data, setData] = useState({ count: 280, color: 'black' });

    function CharCounter(e) {
        const newCount = 280 - e.target.value.length;
        if (newCount <= 0) {
            setData({ count: newCount, color: 'red' });
        } else {
            setData({ count: newCount, color: 'black' });
        }
    }

    return (
        <div>
            <h1>Character Counter</h1>
            <textarea
                onChange={CharCounter}
                style={{ maxWidth: '600px', width: '100%', height: '100px' }}
            />
            <div className="charCounter">
                <span style={{ color: data.color }}>{data.count}</span>/280
            </div>
        </div>
    );
};

export default CharCount;

