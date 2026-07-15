const popup = document.getElementById('popup');
const status = document.getElementById('status');
const data = window.APP_DATA || {};

function showPopup(message) {
  popup.textContent = message;
  popup.classList.remove('hidden');
  setTimeout(() => popup.classList.add('hidden'), 3000);
}

function runAlerts() {
  const alerts = data.alerts || [];
  if (alerts.length > 0) {
    status.textContent = 'Warning detected';
    showPopup(alerts[0]);
  } else {
    status.textContent = 'No active alerts';
  }
}

runAlerts();
setInterval(runAlerts, 5000);
