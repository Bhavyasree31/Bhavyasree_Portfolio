document.addEventListener('DOMContentLoaded', () => {
  const certificates = document.querySelectorAll('.certificate');
  let currentIndex = 0;

  function showCertificate(index) {
    certificates.forEach((cert, i) => {
      cert.classList.toggle('active', i === index);
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % certificates.length;
    showCertificate(currentIndex);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    showCertificate(currentIndex);
  });
});