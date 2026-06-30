// 메뉴 토글 (모바일)
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// 스크롤 등장 효과
const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => observer.observe(el));
} else {
  // 안전장치: reveal 요소가 없으면 무시
}

// 안전장치: 혹시 IntersectionObserver가 안 먹는 환경이면 전부 보이게
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 300);
});
