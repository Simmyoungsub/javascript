(function () {
    const tree = [
        {
            name: 'A',
            child: [
                {
                    name: 'B',
                    child: [
                        {
                            name: 'D'
                        },
                        {
                            name: 'E'
                        }
                    ]
                },
                {
                    name: 'C',
                    child: [
                        {
                            name: 'F'
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
            isEmpty: function () {
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
            isEmpty: function () {
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
    console.log('==================');
    bfs(tree[0]);
    console.log('==================');
    dfs2(tree[0]);
    console.log('==================');
    console.log(tree);
})();