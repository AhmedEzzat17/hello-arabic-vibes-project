
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '500px'}}>
      <div className="container h-100">
        <div className="row align-items-center h-100 py-5">
          <div className="col-lg-6 text-white">
            <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInUp">
              اكتشف أحدث المنتجات
            </h1>
            <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              تسوق من مجموعة واسعة من المنتجات عالية الجودة بأفضل الأسعار
            </p>
            <div className="d-flex gap-3 animate__animated animate__fadeInUp animate__delay-2s">
              <button className="btn btn-light btn-lg px-4 py-2">
                تسوق الآن
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-2">
                عرض المنتجات
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Hero Product" 
              className="img-fluid rounded-3 shadow-lg animate__animated animate__fadeInRight"
              style={{maxHeight: '400px'}}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="position-absolute top-0 end-0 p-4">
        <div className="bg-white bg-opacity-10 rounded-circle p-3">
          <i className="bi bi-star-fill text-warning fs-4"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
