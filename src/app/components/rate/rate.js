const rate = () => {
  const rateNodes = document.querySelectorAll('.rate');

  const modificationGround = (node, event) => {
    const singleElementWidth = node.clientWidth / 5;
    const currentPosition = Math.round(event.offsetX / singleElementWidth);
    Array.prototype.forEach.call(node.getElementsByTagName('div'), (el, i) => {
      i <= currentPosition ? el.className = "rate__item rate__item_background_image" : el.className = "rate__item";
    });
  };

  const clearRate = (node) => {
    const rateItems = node.childNodes;
    rateItems.forEach((el) => {
      el.className = "rate__item";
    });
  };

  Array.prototype.forEach.call(rateNodes, (node) => {

    const mousemoveFunc = modificationGround.bind(null, node);
    const mouseoutFunc = clearRate.bind(null, node);

    node.addEventListener('mousemove', mousemoveFunc);
    node.addEventListener('mouseout', mouseoutFunc);
    node.addEventListener('click', (event) => {
      const clickPosition = Math.round(event.offsetX / (node.clientWidth / 5));
      console.log(clickPosition);
      node.removeEventListener('mousemove', mousemoveFunc);
      node.removeEventListener('mouseout', mouseoutFunc);
    });
  });

};

export {rate};
