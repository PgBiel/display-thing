(function() {
  const urlparams = new URLSearchParams(window.location.search);
  document.getElementById("mainel").innerText = urlparams.has("text") ? urlparams.get("text") : "Hi!";
})()
