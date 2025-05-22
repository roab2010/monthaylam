document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');

  // Tạo alert box
  const alertBox = document.createElement('div');
  alertBox.id = 'success-alert';
  alertBox.innerHTML = '<i class="fa-solid fa-circle-check text-xl text-green-600"></i> Đăng ký thành công!';
  document.body.appendChild(alertBox);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = Array.from(form.querySelectorAll('input'));
    if (inputs.some(i => !i.value.trim())) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Hiển thị alert
    alertBox.classList.add('show');
    form.reset();

    // Ẩn alert và chuyển trang sau 2.5 giây
    setTimeout(() => {
      alertBox.classList.remove('show');

      // 👉 Chuyển sang trang đăng nhập
      window.location.href = '/dangnhap.html'; // Đảm bảo đường dẫn đúng với file thật
    }, 1000);
  });
});
