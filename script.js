const element = document.querySelector('#example');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
window.close();