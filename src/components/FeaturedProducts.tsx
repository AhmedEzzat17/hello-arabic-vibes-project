
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "سماعات لاسلكية عالية الجودة",
      price: 899,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      badge: "خصم 25%"
    },
    {
      id: 2,
      name: "ساعة ذكية متطورة",
      price: 1599,
      originalPrice: 2000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      badge: "الأكثر مبيعاً"
    },
    {
      id: 3,
      name: "هاتف ذكي جديد",
      price: 8999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "لابتوب عالي الأداء",
      price: 15999,
      originalPrice: 18000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      badge: "جديد"
    },
    {
      id: 5,
      name: "كاميرا رقمية احترافية",
      price: 12500,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      id: 6,
      name: "تابلت للعمل والترفيه",
      price: 3999,
      originalPrice: 4500,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      badge: "عرض محدود"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">المنتجات المميزة</h2>
          <p className="lead text-muted">اكتشف أفضل منتجاتنا وأكثرها طلباً</p>
        </div>
        
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
