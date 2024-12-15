  function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  // Cerrar el menú si se hace clic fuera de él
  window.onclick = function(event) {
    if (!event.target.matches('button')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = 'none';
      }
    }
  }
