/*

Minimum Island

Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represent water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grd contains at least one island.

*/

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

// const minimumIsland = (grid) => {
//   const visited = new Set();
//   let count = 0;

//   for (let r = 0; r < grid[0].length; r += 1) {
//     for (let c = 0; c < grid.length; c += 1) {
//       if (explore(grid, r, c, visited) === true) {
//         count += 1;
//       }
//     }
//   }

//   return count;
// };

// const explore = (grid, r, c, visited) => {
//   const rowInbounds = 0 <= r && r < grid.length;
//   const colInbounds = 0 <= c && c < grid[0].length;

//   if (!rowInbounds || !colInbounds) return false;
//   if (grid[r][c] === 'W') return false;

//   const position = r + ',' + c;
//   if (visited.has(position)) return false;
//   visited.add(position);

//   explore(grid, r - 1, c, visited);
//   explore(grid, r + 1, c, visited);
//   explore(grid, r, c - 1, visited);
//   explore(grid, r, c + 1, visited);

//   return true;
// };

const minimumIsland = (grid) => {
  const visited = new Set();

  let minSize = Infinity;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = exploreSize(grid, r, c, visited);

      if (size > 0 && size < minSize) minSize = size;
    }
  }

  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;
  if (grid[r][c] === 'W') return 0;

  const position = r + ',' + c;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;

  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
};

console.log(minimumIsland(grid)); // -> 2
