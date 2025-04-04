window.handleYapChatAction = function (url) {
  if (url) {
    window.location.href = url; // Redirect to the provided URL
  } else {
    console.warn("No action URL provided!");
  }
};
