export function create(el, attr, content) {
  const node = document.createElement(el);
  Object.entries(attr || {}).forEach(([name, value]) => {
    node.setAttribute(name, value);
  });
  if (typeof content === "string") {
    content = document.createTextNode(content);
  }
  node.appendChild(content);
  return node;
}
