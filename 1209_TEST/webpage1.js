setTimeout(() => {
  let element1 = document.getElementById("firstDiv");
  let element2 = element1.getAttributeNode("class");
  element1.removeAttributeNode(element2);
}, 15000);
