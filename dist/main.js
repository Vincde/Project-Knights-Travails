(()=>{"use strict";function o(e,t,n,l,s){if(t[0]===e[0]&&t[1]===e[1])return void console.log("ur here already");const r=7*e[0]+e[0]+e[1];for(let o=0;o<n[r].head.length;o++)l.push(n[r].head[o]);o(l.shift(),t,n,l,s),console.log(l)}!function(){let e=[];const t=[0,2],n=[];n.push(t),e=function(o){const e=[void 0];for(let t=0;t<=7;t++)for(let n=0;n<=7;n++){e[7*t+t+n]={head:[]};for(let l=0;l<=7;l++)t+o[l][0]>=0&&t+o[l][0]<=7&&n+o[l][1]>=0&&n+o[l][1]<=7&&e[7*t+t+n].head.push([t+o[l][0],n+o[l][1]])}return e}([[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]),console.log(e),n.push(t),o(t,[5,6],e,[],n)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBNEJBLFNBQVNBLEVBQWFDLEVBQU9DLEVBQUtDLEVBQU9DLEVBQU9DLEdBQzlDLEdBQUlILEVBQUksS0FBT0QsRUFBTSxJQUFNQyxFQUFJLEtBQU9ELEVBQU0sR0FFMUMsWUFEQUssUUFBUUMsSUFBSSxtQkFJZCxNQUFNQyxFQUFlLEVBQVhQLEVBQU0sR0FBU0EsRUFBTSxHQUFLQSxFQUFNLEdBRTFDLElBQUssSUFBSVEsRUFBSSxFQUFHQSxFQUFJTixFQUFNSyxHQUFHRSxLQUFLQyxPQUFRRixJQUN4Q0wsRUFBTVEsS0FBS1QsRUFBTUssR0FBR0UsS0FBS0QsSUFHM0JULEVBQWFJLEVBQU1TLFFBQVNYLEVBQUtDLEVBQU9DLEVBQU9DLEdBRS9DQyxRQUFRQyxJQUFJSCxFQUNkLEVBRUEsV0FDRSxJQUFJRCxFQUFRLEdBQ1osTUFXTUYsRUFBUSxDQUFDLEVBQUcsR0FHWkksRUFBTSxHQUdaQSxFQUFJTyxLQUFLWCxHQUVURSxFQTlERixTQUF1QlcsR0FDckIsTUFBTVgsRUFBUSxNQUFDWSxHQUVmLElBQUssSUFBSVAsRUFBSSxFQUFHQSxHQUFLLEVBQUdBLElBQ3RCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxHQUFLLEVBQUdBLElBQUssQ0FDM0JOLEVBQVUsRUFBSkssRUFBUUEsRUFBSUMsR0NQZixDQUFFQyxLQURJLElEU1QsSUFBSyxJQUFJTSxFQUFJLEVBQUdBLEdBQUssRUFBR0EsSUFFcEJSLEVBQUlNLEVBQWNFLEdBQUcsSUFBTSxHQUMzQlIsRUFBSU0sRUFBY0UsR0FBRyxJQUFNLEdBQzNCUCxFQUFJSyxFQUFjRSxHQUFHLElBQU0sR0FDM0JQLEVBQUlLLEVBQWNFLEdBQUcsSUFBTSxHQUUzQmIsRUFBVSxFQUFKSyxFQUFRQSxFQUFJQyxHQUFHQyxLQUFLRSxLQUFLLENBQzdCSixFQUFJTSxFQUFjRSxHQUFHLEdBQ3JCUCxFQUFJSyxFQUFjRSxHQUFHLElBSTdCLENBRUYsT0FBT2IsQ0FDVCxDQXdDVWMsQ0FuQmMsQ0FDcEIsQ0FBQyxFQUFHLEdBQ0osQ0FBQyxHQUFJLEdBQ0wsRUFBRSxFQUFHLEdBQ0wsRUFBRSxHQUFJLEdBQ04sQ0FBQyxFQUFHLEdBQ0osQ0FBQyxHQUFJLEdBQ0wsRUFBRSxFQUFHLEdBQ0wsRUFBRSxHQUFJLEtBWVJYLFFBQVFDLElBQUlKLEdBRVpFLEVBQUlPLEtBQUtYLEdBRVRELEVBQWFDLEVBWkQsQ0FBQyxFQUFHLEdBWVNFLEVBVFgsR0FTeUJFLEVBQ3pDLENBRUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL25vZGUvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zLCBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCwgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyXG5pbXBvcnQgbm9kZSBmcm9tIFwiLi9ub2RlL25vZGUuanNcIjtcblxuZnVuY3Rpb24gZ3JhcGhDcmVhdGlvbihwb3NzaWJsZU1vdmVzKSB7XG4gIGNvbnN0IGdyYXBoID0gW3VuZGVmaW5lZF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gNzsgaisrKSB7XG4gICAgICBncmFwaFtpICogNyArIGkgKyBqXSA9IG5vZGUoKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IDc7IGsrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaSArIHBvc3NpYmxlTW92ZXNba11bMF0gPj0gMCAmJlxuICAgICAgICAgIGkgKyBwb3NzaWJsZU1vdmVzW2tdWzBdIDw9IDcgJiZcbiAgICAgICAgICBqICsgcG9zc2libGVNb3Zlc1trXVsxXSA+PSAwICYmXG4gICAgICAgICAgaiArIHBvc3NpYmxlTW92ZXNba11bMV0gPD0gN1xuICAgICAgICApIHtcbiAgICAgICAgICBncmFwaFtpICogNyArIGkgKyBqXS5oZWFkLnB1c2goW1xuICAgICAgICAgICAgaSArIHBvc3NpYmxlTW92ZXNba11bMF0sXG4gICAgICAgICAgICBqICsgcG9zc2libGVNb3Zlc1trXVsxXSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFJlc3VsdChzdGFydCwgZW5kLCBncmFwaCwgcXVldWUsIHJlcykge1xuICBpZiAoZW5kWzBdID09PSBzdGFydFswXSAmJiBlbmRbMV0gPT09IHN0YXJ0WzFdKSB7XG4gICAgY29uc29sZS5sb2coXCJ1ciBoZXJlIGFscmVhZHlcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaSA9IHN0YXJ0WzBdICogNyArIHN0YXJ0WzBdICsgc3RhcnRbMV07XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBncmFwaFtpXS5oZWFkLmxlbmd0aDsgaisrKSB7XG4gICAgcXVldWUucHVzaChncmFwaFtpXS5oZWFkW2pdKTtcbiAgfVxuXG4gIHNlYXJjaFJlc3VsdChxdWV1ZS5zaGlmdCgpLCBlbmQsIGdyYXBoLCBxdWV1ZSwgcmVzKTtcblxuICBjb25zb2xlLmxvZyhxdWV1ZSk7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGxldCBncmFwaCA9IFtdO1xuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW1xuICAgIFsyLCAxXSxcbiAgICBbMiwgLTFdLFxuICAgIFstMiwgMV0sXG4gICAgWy0yLCAtMV0sXG4gICAgWzEsIDJdLFxuICAgIFsxLCAtMl0sXG4gICAgWy0xLCAyXSxcbiAgICBbLTEsIC0yXSxcbiAgXTtcblxuICBjb25zdCBzdGFydCA9IFswLCAyXTtcbiAgY29uc3QgZW5kID0gWzUsIDZdO1xuXG4gIGNvbnN0IHJlcyA9IFtdO1xuICBjb25zdCBxdWV1ZSA9IFtdO1xuXG4gIHJlcy5wdXNoKHN0YXJ0KTtcblxuICBncmFwaCA9IGdyYXBoQ3JlYXRpb24ocG9zc2libGVNb3Zlcyk7XG4gIGNvbnNvbGUubG9nKGdyYXBoKTtcblxuICByZXMucHVzaChzdGFydCk7XG5cbiAgc2VhcmNoUmVzdWx0KHN0YXJ0LCBlbmQsIGdyYXBoLCBxdWV1ZSwgcmVzKTtcbn1cblxubWFpbigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9kZSgpIHtcbiAgY29uc3QgaGVhZCA9IFtdO1xuICByZXR1cm4geyBoZWFkIH07XG59XG4iXSwibmFtZXMiOlsic2VhcmNoUmVzdWx0Iiwic3RhcnQiLCJlbmQiLCJncmFwaCIsInF1ZXVlIiwicmVzIiwiY29uc29sZSIsImxvZyIsImkiLCJqIiwiaGVhZCIsImxlbmd0aCIsInB1c2giLCJzaGlmdCIsInBvc3NpYmxlTW92ZXMiLCJ1bmRlZmluZWQiLCJrIiwiZ3JhcGhDcmVhdGlvbiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9