const getSVGPathLength = (container, viewboxWidth, path) => {
  const containerWidth = container.clientWidth;
  const pathLength = path.getTotalLength();
  const ratioOfViewboxToContainer = containerWidth / viewboxWidth;
  const scaledPathLength = pathLength * ratioOfViewboxToContainer;
  return scaledPathLength;
};

export default getSVGPathLength;
