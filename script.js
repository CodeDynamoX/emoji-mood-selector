function showMood(mood) {
  const response = document.getElementById('response');

  if (mood === 'happy') {
    response.textContent = 'Yay! Keep smiling 😄';
  } else if (mood === 'neutral') {
    response.textContent = "It's okay to feel calm 😐";
  } else if (mood === 'sad') {
    response.textContent = 'Sending you a virtual hug 🤗';
  } else if (mood === 'sleepy') {
    response.textContent = 'Go take a power nap 😴';
  } else if (mood === 'cool') {
    response.textContent = 'You’re cool as ice 😎';
  }
}
