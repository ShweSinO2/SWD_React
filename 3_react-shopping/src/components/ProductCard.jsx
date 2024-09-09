import React from 'react'
import Rating from './Rating'

const ProductCard = ({
    product: {
        title,
        price,
        image,
        rating: { rate },
    }
}) => {

    return (
        <div className="border border-black p-5 flex flex-col items-start gap-3">
            <img src={image} className="h-40" alt="" />
            <p className="font-bold">{title}</p>
            <Rating rate={rate} />
            <div className="flex w-full items-end justify-between">
                <p>{price}</p>
                <button className="border border-black px-3 py-2 text-sm">
                    Add Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard