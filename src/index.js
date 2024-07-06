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
  if (start[0][0] === end[0] && start[0][1] === end[1]) {
    res.push([end[0], end[1]]);
    return [start, res];
  }

  const i = arrayNumber(start[0]);

  let boh = [];

  for (let j = 0; j < graph[i].head.length; j++) {
    queue.push([graph[i].head[j], start[0]]);
  }

  boh = searchLink(queue.shift(), end, graph, queue, prev, res);

  if (boh[0][1][0] === start[0][0] && boh[0][1][1] === start[0][1]) {
    // eslint-disable-next-line prefer-destructuring, no-param-reassign
    boh[1].push([start[0][0], start[0][1]]);
    return [start, boh[1]];
  }
  return [boh[0], boh[1]];
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

  const start = [[3, 3]];
  const end = [4, 3];
  const queue = [];

  graph = graphCreation(possibleMoves);

  const i = arrayNumber(start[0]);

  for (let j = 0; j < graph[i].head.length; j++) {
    queue.push([graph[i].head[j], start[0]]);
  }

  const res = searchLink(start, end, graph, queue);
  const finalRes = res[1];
  finalRes.reverse();
  console.log(
    `There you go! You made it in ${
      finalRes.length - 1
    } moves! The moves are: \n`
  );

  for (let w = 0; w < finalRes.length; w++) {
    console.log(`[${finalRes[w]}] \n`);
  }
}

main();
