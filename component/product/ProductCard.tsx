import React from 'react';
import Button from '../common/Button';

const ProductCard = () => {
    return <>
        <div className="d-flex align-items justify-content-center border-1 m-3">
            <div className="">
                <div className="product-card-header">
                    <div className="title">
                        <span>Product Name</span>
                    </div>
                    <div className="quantity">
                        <div>quantity</div>
                        <span className="quantity-btn">+</span>
                        <span className="quantity-btn">-</span>
                    </div>
                    <div className="product-card-footer">
                        <div className="product-buttons d-flex">
                            <Button text="Add to cart" primary={true} customClass="m-4" />
                            <Button text="Buy Now" primary={true} customClass="m-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductCard