document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  // Tạo alert box
  const alertBox = document.createElement('div');
  alertBox.id = 'success-alert';
  alertBox.innerHTML = `<i class="fas fa-check-circle mr-2"></i> Đăng nhập thành công!`;
  document.body.appendChild(alertBox);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');
    if ([...inputs].some(input => !input.value.trim())) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Hiện alert
    alertBox.classList.add('show');

    // Sau 2.5s thì chuyển hướng sang trang chính (ví dụ: trang chủ)
    setTimeout(() => {
      alertBox.classList.remove('show');
      window.location.href = 'homepage.html'; // đổi thành đường dẫn cần thiết
    }, 2500);
  });
});
