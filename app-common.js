function qsParam(name){ const params=new URLSearchParams(window.location.search); return params.get(name); }
function saveLastResult(obj){ localStorage.setItem('lastResult', JSON.stringify(obj)); }
function loadLastResult(){ const s = localStorage.getItem('lastResult'); return s? JSON.parse(s): null; }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, function(m){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); }); }
