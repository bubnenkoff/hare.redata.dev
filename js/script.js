const eventSource = new EventSource('/events');

eventSource.onmessage = function(event) {
  console.log('Новое событие:', event.data);
  location.reload(); // Или обновление части страницы.
};