
document.getElementById('filterInput').addEventListener('input', function () {
    const filterValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const titleElement = card.querySelector('h2'); 
  
      
      if (titleElement && titleElement.textContent) {
        const title = titleElement.textContent.toLowerCase();
  
       
        if (title.includes(filterValue)) {
          card.style.display = ''; 
        } else {
          card.style.display = 'none'; 
        }
      } else {
        console.error('El elemento <h2> no se encontró o no tiene texto');
      }
    });
  });