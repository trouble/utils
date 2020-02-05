import mockPropertySetters from '../mockPropertySetters';

const mockBodyScrollEvents = (scrollWidth, scrollHeight) => {
  mockPropertySetters(['scrollWidth', 'scrollHeight']);
  window.document.body.scrollWidth = scrollWidth;
  window.document.body.scrollHeight = scrollHeight;

  window.scrollTo = function scrollTo(xCoord, yCoord) {
    Object.assign(this, {
      pageXOffset: xCoord,
      pageYOffset: yCoord,
    }).dispatchEvent(new this.Event('scroll'));
  };
};

export default mockBodyScrollEvents;
