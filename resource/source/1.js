var lis =  document.getElementsByClassName('post-link');

for (var i = 0; i < lis.length; i++) {
  var lli = lis[i];
  var href = 'http://turnoff.us' + lli.getAttribute('href');
  var title = lli.innerHTML;
  var image = href.replace("geek", "image/en") + '.png';
  var json = {
    "title": title,
    "href": href,
    "image": image
  };
  console.log(JSON.stringify(json));
}
