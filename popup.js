document.addEventListener('DOMContentLoaded', function() {
  var translateButton = document.getElementById('translateButton');
  translateButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      var lang = chrome.i18n.getUILanguage();
      var googleTranslateUrl = 'https://translate.google.com/translate?sl=auto&tl=' + lang + '&u=' + encodeURIComponent(url);
      chrome.tabs.create({url: googleTranslateUrl});
    });
  });
});
