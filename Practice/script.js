// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const containers = document.querySelectorAll('.container');
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Bỏ class active ở tất cả các tab
        tabs.forEach(t => t.classList.remove('active'));
        // Thêm class active cho tab được click
        tab.classList.add('active');
  
        // Hiển thị container tương ứng và ẩn các container khác
        const targetId = tab.getAttribute('data-tab');
        containers.forEach(container => {
          container.style.display = container.id === targetId ? 'block' : 'none';
        });
      });
    });
  });
  