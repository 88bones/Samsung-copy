import React, { useState } from 'react';

const SwitchTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const Images = [
        { url: '/1.jpeg' },
        { url: '/2.jpg' },
        { url: '/3.jpg' },
    ];

    return (
        <div>
            <div className="button-container">
                {Images.map((image, index) => (
                //     <button
                //         key={index}
                //         className={`image-button ${activeTab === index ? 'active' : ''}`}
                //         onClick={() => setActiveTab(index)}
                //     >
                //          {index + 1}
                //     </button>

                <input 
                  type="radio"
                  name="Images"
                  checked={activeTab===index}
                  onChange={()=>setActiveTab(index)} />
                 ))}
            </div>
            <div className="image-container">
                <img src={Images[activeTab].url} alt={`Image ${activeTab + 1}`} />
            </div>
        </div>
    );
};

export default SwitchTabs;
