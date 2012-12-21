split = function (html, opts) {
  var nodetree = dal().hide().html(html)
    , nodes = nodetree.getElementsByTagName('*')
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
