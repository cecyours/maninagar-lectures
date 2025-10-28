import React from "react";

function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to Our Website</h1>
        <p className="lead text-muted">
          Explore amazing features, learn more about us, and stay connected with the latest updates.
        </p>
        <button className="btn btn-primary btn-lg mt-3">Get Started</button>
      </div>

      {/* Content Section */}
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Home illustration"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold text-secondary mb-3">Who We Are</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quos exercitationem, facere nobis, consequatur fugit rem blanditiis obcaecati molestiae, cumque doloribus porro totam corrupti quam incidunt iusto distinctio nam quia?
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat, corporis placeat error dolore excepturi ducimus dolorum cum fugiat nobis!
          </p>
          <button className="btn btn-outline-primary mt-2">Learn More</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold text-primary mb-4">Our Key Features</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-3 h-100">
              <h5 className="text-secondary">🚀 Fast Performance</h5>
              <p className="text-muted">
                Optimized for speed, ensuring seamless user experiences on all devices.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-3 h-100">
              <h5 className="text-secondary">💡 Modern Design</h5>
              <p className="text-muted">
                Clean and minimal UI with a responsive layout built using Bootstrap.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-3 h-100">
              <h5 className="text-secondary">🔒 Secure & Reliable</h5>
              <p className="text-muted">
                Built with best security practices and reliable architecture for safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
