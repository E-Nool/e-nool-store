import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange ,font_size = "2xl",starHandle = false}) => {
    const [hoveredRating, setHoveredRating] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredRating(index);
    };

    const handleMouseLeave = () => {
        setHoveredRating(null);
    };

    const handleClick = (index) => {
        if(starHandle){
            onRatingChange(index);
            setHoveredRating(index);
        }
    };

    return (
        <div>
            {Array.from({ length: 5 }, (_, index) => (
                <span
                    key={index}
                    className={` cursor-pointer text-${font_size} ${(hoveredRating !== null ? hoveredRating : rating) > index
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                        }`}
                    // onMouseEnter={() => handleMouseEnter(index + 1)}
                    // onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index + 1)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
