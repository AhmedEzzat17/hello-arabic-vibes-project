
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden product-card">
      {product.badge && (
        <div className="position-absolute top-0 start-0 z-1">
          <span className="badge bg-danger rounded-0 rounded-end">
            {product.badge}
          </span>
        </div>
      )}
      
      <div className="position-relative overflow-hidden">
        <img 
          src={product.image} 
          className="card-img-top product-image" 
          alt={product.name}
          style={{height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease'}}
        />
        <div className="position-absolute top-0 end-0 p-2">
          <button className="btn btn-sm btn-light rounded-circle p-2 wishlist-btn">
            <i className="bi bi-heart"></i>
          </button>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-75 text-white opacity-0 quick-actions">
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-sm btn-light">
              <i className="bi bi-eye"></i>
            </button>
            <button className="btn btn-sm btn-primary flex-grow-1">
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <h6 className="card-title mb-2 text-truncate">{product.name}</h6>
        <div className="d-flex align-items-center mb-2">
          <div className="text-warning me-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`bi bi-star${i < product.rating ? '-fill' : ''}`}></i>
            ))}
          </div>
          <small className="text-muted">({product.rating})</small>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="fw-bold text-primary fs-5">{product.price} ج.م</span>
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2 fs-6">
                {product.originalPrice} ج.م
              </span>
            )}
          </div>
          <button className="btn btn-sm btn-outline-primary">
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
