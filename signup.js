// Add input event listener for student number formatting
document.getElementById('studentNumber').addEventListener('input', function(e) {
  let value = e.target.value.replace(/[^\d]/g, ''); // Remove non-digits
  
  if (value.length > 7) value = value.slice(0, 7); // Limit to 7 digits total
  
  if (value.length > 0) {
    let formattedValue = value.match(/(\d{0,2})(\d{0,2})(\d{0,3})/);
    value = formattedValue[1];
    if (formattedValue[2]) value += ' - ' + formattedValue[2];
    if (formattedValue[3]) value += ' - ' + formattedValue[3];
  }
  
  e.target.value = value;
});

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = document.querySelectorAll('input[type="password"]')[0].value;
  const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
  const errorDiv = document.getElementById('password-error');
  const studentNumberInput = document.getElementById('studentNumber');
  const studentNumber = studentNumberInput.value;
  const studentNumberError = document.getElementById('student-number-error');

  // Validate student number format
  const studentNumberPattern = /^\d{2}\s-\s\d{2}\s-\s\d{3}$/;
  if (!studentNumberPattern.test(studentNumber)) {
    studentNumberError.style.display = 'block';
    return false;
  } else {
    studentNumberError.style.display = 'none';
  }

  if (password !== confirmPassword) {
    errorDiv.style.display = 'block';
    return false;
  }

  // If passwords match, hide error message
  errorDiv.style.display = 'none';

  // If everything is valid, redirect to login page
  alert('Sign up successful! Please log in with your credentials.');
  window.location.href = 'login.html';
});
