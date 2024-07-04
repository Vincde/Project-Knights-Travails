/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions, import/no-named-as-default, import/no-named-as-default-member
import node from "./node/node.js";

function graphCreation(possibleMoves) {
  const graph = [undefined];

  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      graph[i * 7 + i + j] = node();
      for (let k = 0; k <= 7; k++) {
        if (
          i + possibleMoves[k][0] >= 0 &&
          i + possibleMoves[k][0] <= 7 &&
          j + possibleMoves[k][1] >= 0 &&
          j + possibleMoves[k][1] <= 7
        ) {
          graph[i * 7 + i + j].head.push([
            i + possibleMoves[k][0],
            j + possibleMoves[k][1],
          ]);
        }
      }
    }
  }
  return graph;
}

function arrayNumber(start) {
  return start[0] * 7 + start[0] + start[1];
}

function searchResult(start, end, graph, res = [], prev = [], queue = []) {
  for (let j = 0; j < queue.length; j++) {
    if (queue[j][0] === end[0] && queue[j][1] === end[1]) {
      return res.push([end[0], end[1]]);
    }
  }

  const i = arrayNumber(start);
  // eslint-disable-next-line no-param-reassign
  prev = ;

  searchResult(start, end, graph, res, graph[i].head);
}

function main() {
  let graph = [];
  const possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const start = [0, 2];
  const end = [5, 6];

  const res = [];
  const queue = [];

  graph = graphCreation(possibleMoves);
  console.log(graph);

  res.push(start);

  console.log(searchResult(start, end, graph, queue, res));
}

main();
