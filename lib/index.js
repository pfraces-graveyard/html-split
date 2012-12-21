split = function (html, opts) {
  function removeScriptTags () {
    var nodetree = dal().hide().html(html)
      , scriptNodes = nodetree.getElementsByTagName('script');

    for (var i = 0; i < scriptNodes.length; i++) {
      dal(scriptNodes[i]).del();
    }

    return nodetree;
  }

  var nodes = removeScriptTags().getElementsByTagName('*')
    , wrapper = dal().size(opts.width, opts.height)
    , wrapped = wrapper.clone()
    , wrappeds = [];

  for (var i = 0; i < nodes.length; i++) {
    if (wrapped.overflow()) {
      wrappeds.push(wrapped.innerHTML);
      wrapped = wrapper.clone();
    }

    wrapped.add(nodes[i]);
  }

  return wrappeds;
}
