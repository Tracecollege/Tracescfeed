
(function(){
  try {
    var sessionSN = sessionStorage.getItem('studentNumber');
    if (sessionSN && sessionSN.trim() !== '') {
      var snEl = document.querySelector('.student-number');
      if (snEl) snEl.innerHTML = '<i class="fa-solid fa-lock" aria-hidden="true"></i>' + sessionSN;
    }
  } catch(e) {
    // ignore session storage errors
  }
})();
