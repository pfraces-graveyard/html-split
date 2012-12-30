var split = function (html, opts) {
  function removeScriptTags () {
    var nodetree = dal().html(html)
      , scriptNodes = nodetree.DOM.getElementsByTagName('script');
    while (scriptNodes.length) dal(scriptNodes[0]).detach();
    return nodetree;
  }

  var nodes = removeScriptTags().DOM.getElementsByTagName('*')
    , wrapper = dal().hide().move({ x: 0, y: 0 }).size(opts)
    , wrap = wrapper.clone().attach()
    , divs = [];

  for (var i = 0; i < nodes.length; i++) {
    if (wrap.full()) {
      divs.push(wrap.DOM.innerHTML);
      wrap = wrapper.clone().attach();
    }

    wrap.add(dal(nodes[i]).copy());
  }

  divs.push(wrap.DAL.innerHTML);
  return divs;
}
