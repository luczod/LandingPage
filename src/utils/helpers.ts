const isObjectEmpty = (objectName: object) => {
  for (const prop in objectName) {
    // eslint-disable-next-line no-prototype-builtins
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};
