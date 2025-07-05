
import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <small>📧 info@zelcashop.com | 📞 +20 123 456 7890</small>
            </div>
            <div className="col-md-6 text-end">
              <small>🚚 شحن مجاني للطلبات أكثر من 500 جنيه</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2" href="#" style={{color: '#e74c3c'}}>
            ZelCa Shop
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">الرئيسية</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown">
                  المنتجات
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">الإلكترونيات</a></li>
                  <li><a className="dropdown-item" href="#">الأزياء</a></li>
                  <li><a className="dropdown-item" href="#">المنزل والحديقة</a></li>
                  <li><a className="dropdown-item" href="#">الرياضة</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">العروض</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">من نحن</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#">اتصل بنا</a>
              </li>
            </ul>
            
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <i className="bi bi-search fs-5"></i>
              </div>
              <div className="position-relative">
                <i className="bi bi-heart fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
              </div>
              <div className="position-relative">
                <i className="bi bi-bag fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">3</span>
              </div>
              <button className="btn btn-outline-primary">تسجيل الدخول</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
