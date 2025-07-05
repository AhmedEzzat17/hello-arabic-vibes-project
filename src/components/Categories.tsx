
import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "الإلكترونيات",
      icon: "bi-phone",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "250+ منتج"
    },
    {
      id: 2,
      name: "الأزياء",
      icon: "bi-bag",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "180+ منتج"
    },
    {
      id: 3,
      name: "المنزل والحديقة",
      icon: "bi-house",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "120+ منتج"
    },
    {
      id: 4,
      name: "الرياضة",
      icon: "bi-trophy",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "90+ منتج"
    },
    {
      id: 5,
      name: "الكتب",
      icon: "bi-book",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "300+ منتج"
    },
    {
      id: 6,
      name: "الألعاب",
      icon: "bi-controller",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      count: "75+ منتج"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3">تسوق حسب الفئة</h2>
            <p className="lead text-muted">اختر من مجموعة واسعة من الفئات</p>
          </div>
        </div>
        
        <div className="row g-4">
          {categories.map(category => (
            <div key={category.id} className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm category-card h-100 overflow-hidden">
                <div className="position-relative">
                  <img 
                    src={category.image} 
                    className="card-img-top category-image" 
                    alt={category.name}
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
                    <div className="text-center text-white">
                      <i className={`${category.icon} fs-1 mb-3`}></i>
                      <h4 className="fw-bold mb-2">{category.name}</h4>
                      <p className="mb-3">{category.count}</p>
                      <button className="btn btn-light">تسوق الآن</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
