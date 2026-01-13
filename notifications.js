// If this page is inside the index iframe, call parent's loadPage. Otherwise navigate to index.html
(function(){
  var btn = document.getElementById('backBtn');
  if(!btn) return;
  btn.addEventListener('click', function(){
    try {
      if(window.parent && window.parent !== window && typeof window.parent.loadPage === 'function'){
        window.parent.loadPage('home.html','Home');
      } else {
        // fallback when opened directly
        window.location.href = 'index.html';
      }
    } catch(e) {
      window.location.href = 'index.html';
    }
  });
})();
