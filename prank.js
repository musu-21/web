function nextSurprise() {
  const sound = document.getElementById('prankSound');
  sound.play();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000); // 2 detik delay untuk efek dramatis
}
