const rate = () => {
  const rateNodes = document.querySelectorAll('.rate');

  Array.prototype.forEach.call(rateNodes, (node) => {
    Array.prototype.forEach.call(node.childNodes, (el) => {
      el.addEventListener('click', () => click(node, el));
      el.addEventListener('mouseover', () => mouseOverOut(node, el));
      el.addEventListener('mouseout', () => mouseOverOut(node, el, true));
      // node.addEventListener('mouseleave', () => clearRate(node));
    })
  });

  const click = (node, el) => {
    const rateItems = node.childNodes;
    const index = Array.prototype.slice.call(node.childNodes).indexOf(el);
    rateItems.forEach((el, i) => {
      i <= index ? el.className = "rate__btn rate__btn_item-clicked" : "rate__btn";
    });
  };

  const mouseOverOut = (node, el, mouseout = false) => {
    const rateItems = node.childNodes;
    const index = Array.prototype.slice.call(node.childNodes).indexOf(el);

    if (!mouseout) {
      rateItems.forEach((el, i) => {
        i <= index ? el.className = "rate__btn rate__btn_item-clicked" : "rate__btn";
      });
    } else {
      rateItems.forEach((el, i) => {
        i > index - 1 ? el.className = "rate__btn" : "rate__btn rate__btn_item-clicked";
      });
    }
  };

  const clearRate = (node) => {
    const rateItems = node.childNodes;
    rateItems.forEach((el) => {
      el.className = "rate__btn";
    });
  };

};

export {rate};
