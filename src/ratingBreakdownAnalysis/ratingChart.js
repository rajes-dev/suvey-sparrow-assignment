import  { useState } from 'react';
import './ratingChart.css';

const RatingBreakdown = () => {
    const [ratingsData, setRatingsData] = useState([10, 50, 31, 6, 8]);

    const regenerateRatings = () => {
        // onClick of every Regenerate-Btn this generates new Array with random values.
        const newRatings = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50)); 
        setRatingsData(newRatings);
    };

    return (
        <div className="container">
            <h1 className='heading'>Rating breakdown analysis</h1>
            <div className="graph-container">
                <div className="y-axis text-color">
                    <label className="y-axis-label text-color">No. Of Ratings</label>
                    {[10, 20, 30, 40, 50].map((value, index) => (
                        <div key={index} className="y-axis-scale" style={{ bottom: `${value * 5}px` }}>
                            {value}
                        </div>
                    ))}

                </div>
                <div className="graph">
                    {ratingsData.map((ratingCount, index) => (
                        <div key={index} className="bar" style={{ height: `${ratingCount * 5}px` }}>
                            <div className="bar-value">{ratingCount}</div>
                        </div>
                    ))}
                </div>
                <div className="x-axis text-color">
                    {
                        [1,2,3,4,5].map((each, index)=>(
                            <div key={index} className='x-axis-scale'>{each}</div>
                        ))
                    }
                </div>
              
                <label className="x-axis-label text-color">Rating</label>
            </div>
            <button className="regenerate-button " onClick={regenerateRatings}>Regenerate</button>
        </div>
    );
};

export default RatingBreakdown;
