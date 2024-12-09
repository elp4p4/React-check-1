import React from 'react';
import product from './product';

const Image = ({ style }) => {
    return (
        <img
            src={product.image}
            alt={product.name}
            style={{
                ...style,
                width: "100%",
                height: "auto",
                maxHeight: "300px",
                objectFit: "cover",
            }}
        />
    );
};

export default Image;
