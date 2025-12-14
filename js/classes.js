async function loadClasses() {
  // 1. Загружаем JSON
  const response = await fetch('../api/classes.json?_=' + Date.now());  const data = await response.json();

  // 2. Находим select
  const select = document.getElementById('classes');

  // 3. Очищаем старые options
  select.innerHTML = '';

  // 4. Заполняем из JSON
  data.classes.forEach(cls => {
    const option = document.createElement('option');
    option.value = cls.id;
    option.textContent = cls.name;
    select.appendChild(option);
  });
}

// 5. Загружаем при старте
loadClasses();
