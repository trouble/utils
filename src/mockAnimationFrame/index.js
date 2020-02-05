const mockAnimationFrame = () => {
  window.requestAnimationFrame = (callback) => {
    const timestamp = performance.now();
    callback(timestamp);
  };
};

export default mockAnimationFrame;
