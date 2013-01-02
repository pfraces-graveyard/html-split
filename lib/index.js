var split = function (html, opts) {
  var nodes = modal(html);
    , wrapper = dal().hide().size(opts)
    , wrap = wrapper.clone().attach()
    , divs = []
    , elStack;

  nodes.foreach(function (el) {
    jslib(el).traverse({
      path: 'children'
    , before: function (node) {
        if (elStack) dal(elStack).add(node);
        elStack = node;
      }
    , after: function (node) {
        if (elStack.parentNode) elStack = elStack.parentNode;
        else elStack = undefined;
      }
    }, function addToDiv (node) {
      if (wrap.isEmpty()) wrap.add(dal(elStack).clone());
      else if (wrap.isFull()) {
        dal(node).del();
        divs.push(wrap.getHtml());
        wrap = wrapper.clone().attach();
        addToDiv(node);
      }
    });
  });

  divs.push(wrap.getHtml());
  return divs;
}
