function generateRectangle() {
    const color = document.getElementById('color-input').value;
    const width = document.getElementById('width-input').value;
    const height = document.getElementById('height-input').value;

    if (!color || !width || !height) {
      alert('Vui lòng nhập đầy đủ mã màu, chiều ngang và chiều dọc!');
      return;
    }

    const box = document.getElementById('box'); 
    box.style.backgroundColor = color;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.display = 'block';
    box.textContent = color;
  }

    document.getElementById('box').addEventListener('click', () => { 
    const box = document.getElementById('box');
    box.style.display = 'none';
    box.textContent = '';

    document.getElementById('color-input').value = '';
    document.getElementById('width-input').value = '';
    document.getElementById('height-input').value = '';
  });




  