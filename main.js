function loadPage(page, title) {
  document.getElementById("contentFrame").src = page;
  document.getElementById("pageTitle").innerText = title;
}

// Sidebar toggle 
(function(){
  const btn = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  if(!btn || !sidebar) return;

  // restore state
  const collapsed = localStorage.getItem('sidebar-collapsed') === '1';
  if(collapsed) sidebar.classList.add('collapsed');

  btn.addEventListener('click', function(){
    const isCollapsed = sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebar-collapsed', isCollapsed ? '1' : '0');
  });
})();

// logout handler
(function(){
  const out = document.getElementById('logoutBtn');
  if(!out) return;
  out.addEventListener('click', function(){
    try { localStorage.removeItem('loggedIn'); } catch(e) {}
    window.location.href = 'login.html';
  });
})();
