<template>
    <div class="dashboard-container">
      <h1>User Dashboard</h1>
      <div class="section">
        <p>Welcome to your dashboard, where you can manage your account, view your data, and more.</p>
        <ul>
          <li><router-link to="/profile">View Profile</router-link></li>
          <li><router-link to="/settings">Account Settings</router-link></li>
          <li><router-link to="/notifications">Notifications</router-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any setup script code here if necessary
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 20px;
    background-color: #f8f9fa;
  }
  
  h1 {
    color: #343a40;
  }
  
  .section {
    margin-top: 20px;
  }
  
  .section p {
    font-size: 1.2em;
  }
  
  .section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .section ul li {
    margin: 10px 0;
  }
  
  .section ul li a {
    color: #007bff;
    text-decoration: none;
  }
  
  .section ul li a:hover {
    text-decoration: underline;
  }
  </style>
  