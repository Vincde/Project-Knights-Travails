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

function searchResult(start, end, graph, res = [], queue = []) {
  if (end[0] === start[0] && end[1] === start[1]) return "ur here already";

  const i = start[0] * 7 + start[0] + start[1];
  for (let j = 0; j < graph[i].head.length; j++) {
    if (queue.length <= 7) {
      queue.push([graph[i].head[j]]);
    }else{
      queue[] //you should put every "child" into one array position at a time
    }
    if (graph[i].head[j][0] === end[0] && graph[i].head[j][1] === end[1]) {
      return res.push([end[0], end[1]]);
    }
  }

  if (res[0] !== null) {
    res.shift();
  }

  for (let w = 0; w < res.length; w++) {
    if (res[w] !== queue[0]) res.push(queue[0]);
  }

  searchResult(queue.shift(), end, graph, res, queue);

  return res;
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
  const count = [];
  let res = [];

  res.push(start);

  graph = graphCreation(possibleMoves);
  res = searchResult(start, end, graph, res, queue, count);
  console.log(res);
  console.log(graph);
}

main();
