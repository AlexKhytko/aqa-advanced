function fetchData(url, callback) {
    fetch(url)
      .then(response => {
        // Получаем статус и время начала
        const status = response.status;
        const startTime = response.headers.get('date'); // Если хотите получить дату, иначе используйте другую логику
  
        // Выводим только статус и время начала
        console.log(`URL: ${url} | Status: ${status} | Start Time: ${startTime}`);
        
       // return response.json(); // Переход к следующим данным
      })
      .then(data => callback(data))
      .catch(error => console.error('Ошибка:', error));
  }
  
  const urls = [
    'https://credit7.ua/',
    'https://credit7.ua/jak-vzjati-kredit/',
    'https://credit7.ua/kredytni-produkty/',
    'https://credit7.ua/yak-splatiti/',
    'https://credit7.ua/pro-nas/',
    'https://credit7.ua/news/'
  ];
  
  urls.forEach(url => {
    fetchData(url, data => {
      // Здесь вы можете обработать данные, если это необходимо
    });
  });