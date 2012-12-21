split = function (html, opts) {
  function removeScriptTags () {
    var nodetree = dal().html(html)
      , scriptNodes = nodetree.getElementsByTagName('script');
    while (scriptNodes.length) dal(scriptNodes[0]).del();
    return nodetree;
  }

  var nodes = removeScriptTags().getElementsByTagName('*')
    , wrapper = dal().clear().move(0, 0).size(opts)
    , wrap = wrapper.clone().draw()
    , divs = [];

  for (var i = 0; i < nodes.length; i++) {
    if (wrap.overflow()) {
      divs.push(wrap.innerHTML);
      wrap = wrapper.clone().draw();
    }

    wrap.add(dal(nodes[i]).copy());
  }

  divs.push(wrap.innerHTML);
  return divs;
}
