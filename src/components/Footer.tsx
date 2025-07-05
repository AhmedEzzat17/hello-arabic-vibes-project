
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold mb-4" style={{color: '#e74c3c'}}>ZelCa Shop</h3>
            <p className="text-light mb-4">
              متجرك الأول للتسوق الإلكتروني في الشرق الأوسط. نوفر لك أفضل المنتجات بأسعار منافسة وجودة عالية.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">روابط سريعة</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">الرئيسية</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">المنتجات</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">العروض</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">من نحن</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">الفئات</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">الإلكترونيات</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">الأزياء</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">المنزل</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">الرياضة</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">الكتب</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">تواصل معنا</h5>
            <div className="mb-3">
              <i className="bi bi-geo-alt me-2"></i>
              <span>123 شارع النيل، القاهرة، مصر</span>
            </div>
            <div className="mb-3">
              <i className="bi bi-telephone me-2"></i>
              <span>+20 123 456 7890</span>
            </div>
            <div className="mb-3">
              <i className="bi bi-envelope me-2"></i>
              <span>info@zelcashop.com</span>
            </div>
            <div className="mb-4">
              <h6 className="fw-bold">اشترك في النشرة الإخبارية</h6>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="بريدك الإلكتروني">
                <button className="btn btn-primary">اشتراك</button>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 ZelCa Shop. جميع الحقوق محفوظة.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-4">
              <a href="#" className="text-light text-decoration-none">سياسة الخصوصية</a>
              <a href="#" className="text-light text-decoration-none">الشروط والأحكام</a>
              <a href="#" className="text-light text-decoration-none">سياسة الإرجاع</a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3"></div>
    </footer>
  );
};

export default Footer;
