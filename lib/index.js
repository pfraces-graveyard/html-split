// # split()
//
// [TODO] Translate to english
//
// Por cada nodo debemos:
//
// 1.  agregar el nodo a `wrap`
// 2.  si `wrap.isFull()`
//
//     1.  eliminar el último nodo añadido `sobrante`
//     2.  Apilar `wrap`
//     3.  `wrap = wrapper.clone();`
//     4.  `wrap.add(sobrante);`
//
// En 1.4 perdemos anidamiento, así que hemos de guardar en algún
// sitio los padres del nodo que se está intentando añadir.
//
// Al hacer overflow:
//
// 1.  eliminar el último nodo añadido `sobrante`
// 2.  Apilar `wrap`
// 3.  `wrap = wrapper.clone();`
// 4.  `wrap.add(node.pathTo(sobrante));`
//
// Para agregar un elemento al `wrap`, debemos saber bajo que nodo lo hemos
// de añadir, por tanto la idea de `pathLeaf` de la opción descartada puede
// servir, renombrada a `parent`

var split = function (html, opts) {
  var nodes = modal(html)
    , wrapper = dal().hide().size(opts)
  
    // ## wrap
    //
    // Actuará de div contenedor temporal. Tendrá el tamaño indicado en `opts`

    , wrap = wrapper.clone().attach()
    , divs = [];

  nodes.forEach(function (node) {


    // ## parent
    //
    // Referencia al padre del nodo actual
    // 
    // [TODO] Implementar en `traverse`

    var parent = wrap;

    node.traverse({
      before: function (el) {
        var copy = dal(el).copy();

        parent.add(copy);

        if (wrap.isFull()) {
          path = copy.path(wrap.last());
          parent = path.lastLeaf();
          copy.detach();
          divs.push(wrap.getHtml());
          wrap.detach();
          wrap = wrapper.clone().attach();
          wrap.add(path);
        }
        else parent = copy;
      }
      , after: function () {
        parent = parent.parent();
      }
    });
  });

  divs.push(wrap.getHtml());
  wrap.detach();
  return divs;
}
