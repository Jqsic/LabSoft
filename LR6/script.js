document.getElementById('gameSearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    if (this.checkValidity()) {
      
      var searchInputValue = document.getElementById('searchInput').value;
      var genreSelectValue = document.getElementById('genreSelect').value;
      var platformSelectValue = document.getElementById('platformSelect').value;
      
      
      document.getElementById('searchResults').innerHTML = 'Здесь будут отображаться результаты поиска';
    } else {
     
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('error');
      errorMessage.innerHTML = 'Пожалуйста, заполните все обязательные поля';
      document.getElementById('searchResults').appendChild(errorMessage);
    }
  });