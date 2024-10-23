function fetchData(url, callback) {
  const startTime = performance.now(); // Время начала
    fetch(url)
      .then(response => {
        // Получаем статус и время начала
        const status = response.status;
        const startTime = response.headers.get('date'); // Если хотите получить дату, иначе используйте другую логику
        const endTime = performance.now(); // Время окончания
        const loadingTime = endTime - startTime; // Время загрузки
        console.log(`URL: ${url} | Status: ${status} | Loading Time: ${loadingTime.toFixed(2)} ms| Start Time: ${startTime}`);
       // return response.json(); // Переход к следующим данным
      })
      .then(data => callback(data))
      .catch(error => console.error('Ошибка:', error));
  }
  //const envirom  = https://credit7.ua
  const urls = [
    'https://credit7.ua/',
    'https://credit7.ua/jak-vzjati-kredit/',
    'https://credit7.ua/kredytni-produkty/',
    'https://credit7.ua/yak-splatiti/',
    'https://credit7.ua/pro-nas/',
    'https://credit7.ua/news/',
    "https://credit7.ua/client/login",
    "https://credit7.ua/s/payment",
    "https://credit7.ua/akcii/zyma_blyzko/"
   
  ];
  
  urls.forEach(url => {
    fetchData(url, data => {
      // Здесь вы можете обработать данные, если это необходимо
    });
  });