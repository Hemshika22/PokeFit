document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-content`).classList.add('active');
    });
  });
  
  // Login form submission
  const loginForm = document.querySelector('.login-form');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    
    // Simulate login (in a real app, this would be an API call)
    const loginButton = document.querySelector('.login-submit-btn');
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;
    
    setTimeout(() => {
      // Redirect to achievements page after "login"
      window.location.href = 'achievements.html';
    }, 1500);
  });
  
  // Register form submission
  const registerForm = document.querySelector('.register-form');
  
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;
    
    // Form validation
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!terms) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    
    // Get selected starter Pokémon
    const selectedStarter = document.querySelector('input[name="starter"]:checked').value;
    
    // Simulate registration (in a real app, this would be an API call)
    const registerButton = document.querySelector('.register-submit-btn');
    registerButton.textContent = 'Creating Account...';
    registerButton.disabled = true;
    
    setTimeout(() => {
      // Show success message and redirect
      alert(`Welcome, Trainer ${username}! You've chosen ${selectedStarter.charAt(0).toUpperCase() + selectedStarter.slice(1)} as your starter Pokémon. Your journey begins now!`);
      window.location.href = 'achievements.html';
    }, 1500);
  });
  
  // Starter Pokémon selection animation
  const starterOptions = document.querySelectorAll('.starter-option input');
  
  starterOptions.forEach(option => {
    option.addEventListener('change', function() {
      const selectedPokemon = this.value;
      console.log(`Selected ${selectedPokemon} as starter Pokémon`);
      
      // Add animation to the selected Pokémon
      const pokemonImg = this.nextElementSibling.querySelector('img');
      pokemonImg.style.animation = 'bounce 0.5s ease';
      
      setTimeout(() => {
        pokemonImg.style.animation = '';
      }, 500);
    });
  });
  
  // Add keypress event for login
  document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.querySelector('.login-submit-btn').click();
    }
  });
});

// Bounce animation for Pokémon selection
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  </style>
`);