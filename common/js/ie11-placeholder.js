var getExplorer = (function () {
  var explorer = window.navigator.userAgent,
    compare = function (s) { return (explorer.indexOf(s) >= 0); },
    ie11 = (function () { return ("ActiveXObject" in window) })();
  if (compare("MSIE") || ie11) { return 'ie'; }
  else if (compare("Firefox") && !ie11) { return 'Firefox'; }
  else if (compare("Chrome") && !ie11) {
    if (explorer.indexOf("Edge") > -1) {
      return 'Edge';
    } else {
      return 'Chrome';
    }
  }
  else if (compare("Opera") && !ie11) { return 'Opera'; }
  else if (compare("Safari") && !ie11) { return 'Safari'; }

})()

var exampleInputEmail1 = document.getElementById("exampleInputEmail1");//other
var exampleInputEmailIe = document.getElementById("exampleInputEmailIe");//IE
if (getExplorer == 'ie') {
  // ========suggestion========
  exampleInputEmail1.style.display = "none";
  exampleInputEmailIe.style.display = "inherit";
}
if (getExplorer == 'Edge') {

}