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

function arrayNumber(arrayPos) {
  return arrayPos[0] * 7 + arrayPos[0] + arrayPos[1];
}

function searchLink(start, end, graph, queue, prev = [], res = []) {
  if (start[0] === end[0] && start[1] === end[1]) {
    return [...prev];
  }

  const i = arrayNumber(start);
  // eslint-disable-next-line no-param-reassign
  prev = [...start];

  for (let j = 0; j < graph[i].head.length; j++) {
    queue.push(graph[i].head[j]);
  }

  return res.push([searchLink(queue.shift(), end, graph, queue, prev, res)]);
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
  const queue = [];

  graph = graphCreation(possibleMoves);
  console.log(graph);

  const i = arrayNumber(start);

  for (let j = 0; j < graph[i].head.length; j++) {
    queue.push(graph[i].head[j]);
  }

  const res = searchLink(start, end, graph, queue);
  console.log(res);
}

main();
