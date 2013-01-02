var split = function (html, opts) {
  var nodes = modal(html);
    , wrapper = dal().hide().size(opts)
    , wrap = wrapper.clone().attach()
    , divs = [];

  nodes.foreach(function (el) {
    if (wrap.isFull()) {
      divs.push(wrap.getHtml());
      wrap = wrapper.clone().attach();
    }
    wrap.add(el.copy());
//  wrap.add(el.clone());
  });

  divs.push(wrap.getHtml());
  return divs;
}
