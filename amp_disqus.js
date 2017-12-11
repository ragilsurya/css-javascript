<div id="disqus_thread"></div>
<script>
window.addEventListener('message', receiveMessage, false);
function receiveMessage(event) {
	if (event.data) {
		var msg;
		try {
			msg = JSON.parse(event.data);
		} catch (err) {
			// Do nothing
		}
		if (!msg)
			return false;

		if (msg.name === 'resize') {
			window.parent.postMessage({
			  sentinel: 'amp',
			  type: 'embed-size',
			  height: msg.data.height
			}, '*');
		}
	}
}
</script>
<script>
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return (false);
  }

  var css = '#disqus_thread {font-family:' + getQueryVariable('fontBodyFamily') + '} a {color:#' + getQueryVariable('fontLinkColor') + '}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
</script>
<script>
var disqus_config = function () { 
	this.page.url = getQueryVariable("url");
};
(function() {
	var d = document, s = d.createElement('script');
	s.src = '//' + getQueryVariable("shortname") + '.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
</script>

<script type="text/javascript">
var uid = '181056';
var wid = '394225';
</script>
<script type="text/javascript" src="//cdn.popcash.net/pop.js"></script>
