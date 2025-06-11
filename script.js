fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const summaryList = document.querySelector('.summary-list');
    summaryList.innerHTML = ''; 
    
    data.forEach(item => {
      const li = document.createElement('li');
      li.className = `summary-item ${item.category.toLowerCase()}`;
      li.innerHTML = `
        <img src="${item.icon}" alt="${item.category} icon">
        <span>${item.category}</span>
        <span class="score"><strong>${item.score}</strong> / 100</span>
      `;
      summaryList.appendChild(li);
    });
  })
  .catch(err => {
    console.error('Failed to load data.json:', err);
  });
