name: mmyp
on:
    workflow_dispatch:
    schedule:
        - cron: "0 0 29 2 *"
    watch:
        types: [started]
jobs:
    build:
        runs-on: ubuntu-latest
        if: github.event.repository.owner.id == github.event.sender.id
        steps:
            - uses: actions/checkout@v1
            - name: Use Node.js 10.x
              uses: actions/setup-node@v1
              with:
                  node-version: 10.x
            - name: npm install
              run: |
                   npm install
             - name: "运行【mmyp】"
               run: |
                   node Task/myxp.js
                   node Task/myxp.js
               env:
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
