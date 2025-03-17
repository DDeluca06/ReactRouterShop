import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function UserProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: 'user@example.com',
    phone: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the profile via an API
    console.log('Profile updated:', formData);
    setIsEditing(false);
  };
  
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      
      {!isEditing ? (
        <div className="profile-info">
          <div className="profile-field">
            <span className="field-label">Username:</span>
            <span className="field-value">{user.username}</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Name:</span>
            <span className="field-value">{formData.name}</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Email:</span>
            <span className="field-value">{formData.email}</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Phone:</span>
            <span className="field-value">{formData.phone || 'Not provided'}</span>
          </div>
          
          <button 
            onClick={() => setIsEditing(true)}
            className="button edit-profile-btn"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-buttons">
            <button type="submit" className="button save-btn">
              Save Changes
            </button>
            <button 
              type="button" 
              onClick={() => setIsEditing(false)}
              className="button cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UserProfile;
