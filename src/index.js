import node from "./node/node.js";

function main() {
  let graph = [];
  let possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  graph = graphCreation(possibleMoves);
}

function graphCreation(possibleMoves) {
  let graph = [[]];
  let res = [];

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      graph[i][j] = node();
      for (let k = 0; k < 7; k++) {
        if (
          i + possibleMoves[k][0] >= 0 &&
          i + possibleMoves[k][0] <= 7 &&
          j + possibleMoves[k][1] >= 0 &&
          j + possibleMoves[k][1] >= 0
        )
          res.push([i + possibleMoves[k][0]], [j + possibleMoves[k][1]]);
      }
      graph[i][j].head = [...res];
      res = [];
    }
  }

  console.log(graph);
  return graph;
}

main();

function knightMoves(start, dest) {}
