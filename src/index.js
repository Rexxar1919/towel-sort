
// You should implement your task here.


module.exports = function towelSort (matrix) {
  if (matrix == null || matrix.length == 0) {
    return [];
  }
  let bebra = [], bibip = 0;
  for (let biba = 0; biba < matrix.length; biba++) {
    for (let boba = 0; boba < matrix[biba].length; boba++) {
      if (biba%2 == 0) {
        bebra[bibip] = matrix[biba][boba];
        bibip++;
      } else {
        bebra[bibip] = matrix[biba][matrix[biba].length - 1 - boba];
        bibip++;
      }
      
    }
    
  }
  return bebra;
}
