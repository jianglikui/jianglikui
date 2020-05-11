export const createDom = (options) => {
  const doms = {};
  const findDom = (tree, container) => {
    const excludeAttrNames = ["html", "ref", "node"];
    const filterAttr = (attrName) => !excludeAttrNames.includes(attrName);
    const attrNames = Object.keys(tree).filter(filterAttr);

    //创建元素
    const target = document.createElement(tree.node);
    //attr
    const setAttr = (attr) => target.setAttribute(attr, tree[attr]);
    attrNames.forEach(setAttr);
    //ref
    if (tree.ref) doms[tree.ref] = target;

    if (Array.isArray(tree.html)) {
      const findChild = (child) => findDom(child, target);
      tree.html.forEach(findChild);
    } else if (["string", "number"].includes(typeof tree.html)) {
      target.innerHTML = tree.html;
    }
    //返回root，追加child
    if (typeof container === "undefined") return target;
    container.appendChild(target);
  };
  doms.root = findDom(options);
  return doms;
};
