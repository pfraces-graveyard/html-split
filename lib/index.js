split = function (html, opts) {
  function removeScriptTags () {
    var nodetree = dal().hide().html(html)
      , scriptNodes = nodetree.getElementsByTagName('script');
    while (scriptNodes.length) dal(scriptNodes[0]).del();
    return nodetree;
  }

  var nodes = removeScriptTags().getElementsByTagName('*')
    , wrapper = dal().size(opts.width, opts.height)
    , wrap = wrapper.clone()
    , divs = [];

  for (var i = 0; i < nodes.length; i++) {
    if (wrap.overflow()) {
      divs.push(wrap.innerHTML);
      wrapped = wrapper.clone();
    }

    wrapped.add(dal(nodes[i]).copy());
  }

  divs.push(wrap.innerHTML);
  return divs;
}
