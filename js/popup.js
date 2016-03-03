$(function() {
  $('.btn.login').on('click', function() {
    chrome.tabs.create({url:'http://auth.x-history.top/users/sign_in'})
  });
  $('.btn.knowledge').on('click', function() {
    chrome.tabs.create({url:'http://history.x-history.top'})
  });
});
