function DashboardHome() {
    return (
      <div className="dashboard-home">
        <h2>Dashboard Home</h2>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Orders</h3>
            <p className="stat-value">12</p>
          </div>
          <div className="stat-card">
            <h3>Wishlist</h3>
            <p className="stat-value">8</p>
          </div>
          <div className="stat-card">
            <h3>Reviews</h3>
            <p className="stat-value">4</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default DashboardHome;
  