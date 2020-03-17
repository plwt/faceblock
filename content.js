var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes) {
      [].slice.call(mutation.addedNodes).forEach(function(node) {
        node.parentNode.removeChild(node);
      });
    }
  });
});

observer.observe(document, {
  childList:     true,
  subtree:       true,
  characterData: true
});