(()=>{"use strict";function e(e){return 7*e[0]+e[0]+e[1]}function t(o,n,h,l){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];if(o[0][0]===n[0]&&o[0][1]===n[1])return s.push([n[0],n[1]]),[o,s];const u=e(o[0]);let c=[];for(let e=0;e<h[u].head.length;e++)l.push([h[u].head[e],o[0]]);return c=t(l.shift(),n,h,l,r,s),c[0][1][0]===o[0][0]&&c[0][1][1]===o[0][1]?(c[1].push([o[0][0],o[0][1]]),[o,c[1]]):[c[0],c[1]]}!function(){let o=[];const n=[[3,3]],h=[];o=function(e){const t=[void 0];for(let o=0;o<=7;o++)for(let n=0;n<=7;n++){t[7*o+o+n]={head:[]};for(let h=0;h<=7;h++)o+e[h][0]>=0&&o+e[h][0]<=7&&n+e[h][1]>=0&&n+e[h][1]<=7&&t[7*o+o+n].head.push([o+e[h][0],n+e[h][1]])}return t}([[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]);const l=e(n[0]);for(let e=0;e<o[l].head.length;e++)h.push([o[l].head[e],n[0]]);const r=t(n,[4,3],o,h)[1];r.reverse(),console.log(`There you go! You made it in ${r.length-1} moves! The moves are: \n`);for(let e=0;e<r.length;e++)console.log(`[${r[e]}] \n`)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL25vZGUvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zLCBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCwgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyXG5pbXBvcnQgbm9kZSBmcm9tIFwiLi9ub2RlL25vZGUuanNcIjtcblxuZnVuY3Rpb24gZ3JhcGhDcmVhdGlvbihwb3NzaWJsZU1vdmVzKSB7XG4gIGNvbnN0IGdyYXBoID0gW3VuZGVmaW5lZF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gNzsgaisrKSB7XG4gICAgICBncmFwaFtpICogNyArIGkgKyBqXSA9IG5vZGUoKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IDc7IGsrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaSArIHBvc3NpYmxlTW92ZXNba11bMF0gPj0gMCAmJlxuICAgICAgICAgIGkgKyBwb3NzaWJsZU1vdmVzW2tdWzBdIDw9IDcgJiZcbiAgICAgICAgICBqICsgcG9zc2libGVNb3Zlc1trXVsxXSA+PSAwICYmXG4gICAgICAgICAgaiArIHBvc3NpYmxlTW92ZXNba11bMV0gPD0gN1xuICAgICAgICApIHtcbiAgICAgICAgICBncmFwaFtpICogNyArIGkgKyBqXS5oZWFkLnB1c2goW1xuICAgICAgICAgICAgaSArIHBvc3NpYmxlTW92ZXNba11bMF0sXG4gICAgICAgICAgICBqICsgcG9zc2libGVNb3Zlc1trXVsxXSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGFycmF5TnVtYmVyKGFycmF5UG9zKSB7XG4gIHJldHVybiBhcnJheVBvc1swXSAqIDcgKyBhcnJheVBvc1swXSArIGFycmF5UG9zWzFdO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hMaW5rKHN0YXJ0LCBlbmQsIGdyYXBoLCBxdWV1ZSwgcHJldiA9IFtdLCByZXMgPSBbXSkge1xuICBpZiAoc3RhcnRbMF1bMF0gPT09IGVuZFswXSAmJiBzdGFydFswXVsxXSA9PT0gZW5kWzFdKSB7XG4gICAgcmVzLnB1c2goW2VuZFswXSwgZW5kWzFdXSk7XG4gICAgcmV0dXJuIFtzdGFydCwgcmVzXTtcbiAgfVxuXG4gIGNvbnN0IGkgPSBhcnJheU51bWJlcihzdGFydFswXSk7XG5cbiAgbGV0IGJvaCA9IFtdO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgZ3JhcGhbaV0uaGVhZC5sZW5ndGg7IGorKykge1xuICAgIHF1ZXVlLnB1c2goW2dyYXBoW2ldLmhlYWRbal0sIHN0YXJ0WzBdXSk7XG4gIH1cblxuICBib2ggPSBzZWFyY2hMaW5rKHF1ZXVlLnNoaWZ0KCksIGVuZCwgZ3JhcGgsIHF1ZXVlLCBwcmV2LCByZXMpO1xuXG4gIGlmIChib2hbMF1bMV1bMF0gPT09IHN0YXJ0WzBdWzBdICYmIGJvaFswXVsxXVsxXSA9PT0gc3RhcnRbMF1bMV0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmcsIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgYm9oWzFdLnB1c2goW3N0YXJ0WzBdWzBdLCBzdGFydFswXVsxXV0pO1xuICAgIHJldHVybiBbc3RhcnQsIGJvaFsxXV07XG4gIH1cbiAgcmV0dXJuIFtib2hbMF0sIGJvaFsxXV07XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGxldCBncmFwaCA9IFtdO1xuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW1xuICAgIFsyLCAxXSxcbiAgICBbMiwgLTFdLFxuICAgIFstMiwgMV0sXG4gICAgWy0yLCAtMV0sXG4gICAgWzEsIDJdLFxuICAgIFsxLCAtMl0sXG4gICAgWy0xLCAyXSxcbiAgICBbLTEsIC0yXSxcbiAgXTtcblxuICBjb25zdCBzdGFydCA9IFtbMywgM11dO1xuICBjb25zdCBlbmQgPSBbNCwgM107XG4gIGNvbnN0IHF1ZXVlID0gW107XG5cbiAgZ3JhcGggPSBncmFwaENyZWF0aW9uKHBvc3NpYmxlTW92ZXMpO1xuXG4gIGNvbnN0IGkgPSBhcnJheU51bWJlcihzdGFydFswXSk7XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBncmFwaFtpXS5oZWFkLmxlbmd0aDsgaisrKSB7XG4gICAgcXVldWUucHVzaChbZ3JhcGhbaV0uaGVhZFtqXSwgc3RhcnRbMF1dKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IHNlYXJjaExpbmsoc3RhcnQsIGVuZCwgZ3JhcGgsIHF1ZXVlKTtcbiAgY29uc3QgZmluYWxSZXMgPSByZXNbMV07XG4gIGZpbmFsUmVzLnJldmVyc2UoKTtcbiAgY29uc29sZS5sb2coXG4gICAgYFRoZXJlIHlvdSBnbyEgWW91IG1hZGUgaXQgaW4gJHtcbiAgICAgIGZpbmFsUmVzLmxlbmd0aCAtIDFcbiAgICB9IG1vdmVzISBUaGUgbW92ZXMgYXJlOiBcXG5gXG4gICk7XG5cbiAgZm9yIChsZXQgdyA9IDA7IHcgPCBmaW5hbFJlcy5sZW5ndGg7IHcrKykge1xuICAgIGNvbnNvbGUubG9nKGBbJHtmaW5hbFJlc1t3XX1dIFxcbmApO1xuICB9XG59XG5cbm1haW4oKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZGUoKSB7XG4gIGNvbnN0IGhlYWQgPSBbXTtcbiAgcmV0dXJuIHsgaGVhZCB9O1xufVxuIl0sIm5hbWVzIjpbImFycmF5TnVtYmVyIiwiYXJyYXlQb3MiLCJzZWFyY2hMaW5rIiwic3RhcnQiLCJlbmQiLCJncmFwaCIsInF1ZXVlIiwicHJldiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJlcyIsInB1c2giLCJpIiwiYm9oIiwiaiIsImhlYWQiLCJzaGlmdCIsInBvc3NpYmxlTW92ZXMiLCJrIiwiZ3JhcGhDcmVhdGlvbiIsImZpbmFsUmVzIiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ3IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=