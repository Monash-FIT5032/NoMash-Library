<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">User Information Form</h1>
          <form @submit.prevent="submitForm">
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="formData.username" />
                <div v-if="validationErrors.username" class="text-danger">
                  {{ validationErrors.username }}
                </div>
              </div>
              <div class="col-md-6">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="formData.password"
                />
                <div v-if="validationErrors.password" class="text-danger">
                  {{ validationErrors.password }}
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="isAustralian"
                    v-model="formData.isAustralian"
                    required
                  />
                  <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                </div>
              </div>
              <div class="col-md-6">
                <label for="gender" class="form-label">Gender</label>
                <select class="form-select" id="gender" v-model="formData.gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div v-if="validationErrors.gender" class="text-danger">
                  {{ validationErrors.gender }}
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="reason" class="form-label">Reason for joining</label>
              <textarea
                class="form-control"
                id="reason"
                rows="3"
                v-model="formData.reason"
              ></textarea>
              <div v-if="validationErrors.reason" class="text-danger">
                {{ validationErrors.reason }}
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary me-2">Submit</button>
              <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
            </div>
          </form>
          <div class="row mt-5" v-if="submittedCards.length">
            <h1>Hidden Form</h1>
            <div class="d-flex flex-wrap justify-content-start">
              <div
                v-for="(card, index) in submittedCards"
                :key="index"
                class="card m-2"
                style="width: 18rem"
              >
                <div class="card-header">User Information</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Username: {{ card.username }}</li>
                  <li class="list-group-item">Password: {{ card.password }}</li>
                  <li class="list-group-item">
                    Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
                  </li>
                  <li class="list-group-item">Gender: {{ card.gender }}</li>
                  <li class="list-group-item">Reason: {{ card.reason }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const formData = ref({
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: ''
  })
  
  const submittedCards = ref([])
  
  const validationErrors = ref({})
  
  const validateForm = () => {
    const errors = {}
  
    // Name Validation: Check if the username is empty or contains digits
    if (!formData.value.username) {
      errors.username = 'Username is required.'
    } else if (/\d/.test(formData.value.username)) {
      errors.username = 'Username cannot contain numbers.'
    }
  
    // Password Validation: Check if the password is empty or meets length criteria
    if (!formData.value.password) {
      errors.password = 'Password is required.'
    } else if (formData.value.password.length < 6 || formData.value.password.length > 12) {
      errors.password = 'Password must be between 6 and 12 characters long.'
    }
  
    // Reason Validation: Ensure the reason is not empty
    if (!formData.value.reason) {
      errors.reason = 'Reason for joining is required.'
    }
  
    // Gender Validation: Ensure a gender is selected
    if (!formData.value.gender) {
      errors.gender = 'Please select your gender.'
    }
  
    validationErrors.value = errors
  
    if (!/[A-Z]/.test(formData.value.password)) {
      errors.password = 'Password must contain at least one uppercase letter.'
    }
    if (!/[!@#$%^&*]/.test(formData.value.password)) {
      errors.password = 'Password must contain at least one special character.'
    }
  
    // Return true if no errors, false otherwise
    return Object.keys(errors).length === 0
  }
  
  const submitForm = () => {
    if (validateForm()) {
      // If form is valid, push the data to the submittedCards array
      submittedCards.value.push({
        ...formData.value
      })
      clearForm()
    }
  }
  
  const clearForm = () => {
    formData.value = {
      username: '',
      password: '',
      isAustralian: false,
      reason: '',
      gender: ''
    }
    validationErrors.value = {}
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .card-header {
    background-color: #275fda;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }
  .list-group-item {
    padding: 10px;
  }
  </style>
  