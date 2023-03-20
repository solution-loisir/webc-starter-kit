function chunk(sourceArray, size) {
  const _sourceArray = sourceArray;
  const arrayOfChunks = [];
  while(_sourceArray.length) {
    const chunk = _sourceArray.splice(0, size);
    arrayOfChunks.push(chunk);
  }
  return arrayOfChunks;
};

module.exports = {
  chunk
};