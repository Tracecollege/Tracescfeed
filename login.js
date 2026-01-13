// Add formatting for student number input
document.getElementById("username").addEventListener('input', function(e) {
  let value = e.target.value.replace(/[^\d]/g, ''); // Remove non-digits
  
  if (value.length > 7) value = value.slice(0, 7); // Limit to 7 digits total
  
  // Format the number as XX - XX - XXXX
  if (value.length > 0) {
    let formattedValue = value.match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    value = formattedValue[1];
    if (formattedValue[2]) value += ' - ' + formattedValue[2];
    if (formattedValue[4]) value += ' - ' + formattedValue[4];
  }
  
  e.target.value = value;
});

async function checkLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorDiv = document.getElementById("student-number-error");
  
  // Validate student number format
  const studentNumberPattern = /^\d{2}\s-\s\d{2}\s-\s\d{4}$/;
  if (!studentNumberPattern.test(user)) {
    errorDiv.style.display = 'block';
    return false;
  }
  
  // Hide error if format is correct
  errorDiv.style.display = 'none';

  if (pass.trim() === "") {
    alert("Please enter your password!");
    return false;
  }

  // Firebase Firestore authentication check
  try {
    const { collection, query, where, getDocs } = window.firestoreFns;
    const q = query(collection(window.db, "Userprofile"), where("idnumber", "==", user));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Authorized user found
      sessionStorage.setItem('studentNumber', user);
      localStorage.setItem('loggedIn', '1');
      window.location.href = "index.html"; // Redirect to homepage
    } else {
      alert("Invalid Student Number. You are not authorized to login.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Error connecting to the database. Please try again later.");
  }
}
