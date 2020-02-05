const mockPropertySetters = (properties) => {
  if (properties && properties.length > 0) {
    properties.forEach((property) => {
      Object.defineProperty(window.document.body, property, {
        writable: true,
        set property(value) {
          this[property] = value;
        },
      });
    });
  }
};

export default mockPropertySetters;
