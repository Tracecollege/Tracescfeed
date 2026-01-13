
(function(){
  try {
    const isLogged = localStorage.getItem('loggedIn') === '1';
    if(!isLogged) {
      window.location.href = 'login.html';
    }
  } catch(e) {
    window.location.href = 'login.html';
  }
})();
