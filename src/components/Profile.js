import React, { useState, useEffect } from 'react';


const Profile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>Profile</h2>
      <img src={user.image} alt="User" />
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>DOB: {user.birthDate}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;
