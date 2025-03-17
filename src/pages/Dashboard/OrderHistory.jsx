function OrderHistory() {
    // Mock order data (in a real app, this would come from an API)
    const orders = [
      { id: '1001', date: '2023-11-15', total: 129.95, status: 'Delivered' },
      { id: '1002', date: '2023-11-02', total: 59.99, status: 'Shipped' },
      { id: '1003', date: '2023-10-28', total: 24.99, status: 'Processing' }
    ];
    
    return (
      <div className="order-history">
        <h2>Order History</h2>
        
        {orders.length === 0 ? (
          <p>You haven't placed any orders yet.</p>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <h3>Order #{order.id}</h3>
                    <p className="order-date">Placed on {order.date}</p>
                  </div>
                  <span className={`order-status status-${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
                <div className="order-details">
                  <p className="order-total">Total: ${order.total.toFixed(2)}</p>
                  <button className="button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default OrderHistory;
  