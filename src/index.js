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
            [i + possibleMoves[k][0]],
            [j + possibleMoves[k][1]],
          ]);
        }
      }
    }
  }
  return graph;
}

function searchResult(start, end, graph, queue, res) {
  let j = 0;
  while (j <= 7) {
    const i = start[0] * 7 + start[0] + start[1];
    queue.push([graph[i].head[j][0], graph[i].head[j][1]]);
    j += 1;
  }
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

  res.push(start);

  graph = graphCreation(possibleMoves);
  console.log(graph);

  res.push(start);

  console.log(searchResult(start, end, graph, queue, res));
}

main();
