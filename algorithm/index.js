(function() {
  const tree = [
    {
      name: "A",
      child: [
        {
          name: "B",
          child: [
            {
              name: "D"
            },
            {
              name: "E"
            }
          ]
        },
        {
          name: "C",
          child: [
            {
              name: "F"
            }
          ]
        }
      ]
    }
  ];

  function dfs(n) {
    if (!n) {
      return;
    }

    console.log(n.name);

    const child = n.child || [];

    for (let i = 0; i < child.length; i++) {
      const c = child[i];
      dfs(c);
    }
  }

  function dfs2(root) {
    const STACK = {
      stack: [root],
      isEmpty: function() {
        return this.stack.length === 0;
      }
    };

    while (!STACK.isEmpty()) {
      const i = STACK.stack.pop();
      console.log(i.name);
      if (i.child) {
        const child = [].concat(i.child).reverse();
        STACK.stack = STACK.stack.concat(child);
      }
    }
  }

  function bfs(root) {
    let Q = {
      queue: [root],
      isEmpty: function() {
        return this.queue.length === 0;
      }
    };

    while (!Q.isEmpty()) {
      const i = Q.queue.shift();
      console.log(i.name);
      if (i.child) {
        Q.queue = Q.queue.concat(i.child);
      }
    }
  }

  dfs(tree[0]);
  console.log("==================");
  bfs(tree[0]);
  console.log("==================");
  dfs2(tree[0]);
  console.log("==================");
  console.log(tree);
})();

/**
 * 'P' 기업의 코딩테스트 문제
 * 5개의 전구가 있다. [1,2,3,4,5]
 * 각 전구는 on 시킬수있다. 다만 이전 전구의 불이 켜져 있어야지만 전구에 불이 들어온다.
 * 만약 [3, 2, 1] 순으로 전구를 키면 전구에 불이 들어오는 순간은 마지막 1번 전구를 켰을때이다.
 *
 * 하여, 전구에 불이 들어오는 순간이 몇번인지를 확인하는 함수를 만들어라
 *
 * example
 * input
 * [3,4,2,1,5]
 * output
 * 2 (1, 5)를 on 시키면 불이 들어옴
 *
 * input
 * [2,3,1,4,5]
 * output
 * 3 (1,4,5)를 on 시키면 불이 들어옴
 *
 */
(function() {
  function solution(T) {
    const switches = [false, false, false, false, false];
    let moment = 0;

    function on(n) {
      switches[n] = true;
      moment = moment + (isLight(n) ? 1 : 0);
    }

    function isLight(n) {
      if (n === 0) {
        return switches[0];
      }

      return switches[n] && isLight(n - 1);
    }

    T.forEach(p => {
      on(p - 1);
    });

    return moment;
  }

  const test1 = solution([3, 4, 2, 1, 5]);
  const test2 = solution([2, 3, 1, 4, 5]);

  console.log(test1);
  console.log(test2);
})();
