function google_analytics_ecc_has_agreed(name, nameCategories) {
  var allCookies = document.cookie;
  var matchName = allCookies.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if(matchName == null){
    return false;
  }

  if(matchName[2] == 0){
    return false;
  }

  if(nameCategories != "none"){
    var matchNameCategories = allCookies.match(new RegExp('(^| )' + name + '-categories=([^;]+)'));
    var decodeNameCategories = decodeURIComponent(matchNameCategories[2]);
    var arrayCategories = JSON.parse(decodeNameCategories);
    var returnCategorie = false;
    for (var itemCatgeories in arrayCategories) {
      if (arrayCategories[itemCatgeories] == nameCategories) {
        returnCategorie = true;
      }
    }
    return returnCategorie;
  }

  return true;
}

function google_analytics_ecc_delete_cookie(name, cookieDomain) {
  document.cookie = name +'=; Domain='+cookieDomain+'; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

