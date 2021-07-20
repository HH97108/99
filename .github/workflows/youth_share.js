
name: 分

on:
  workflow_dispatch:
  schedule:
     - cron: '10 0,2 * * *'

jobs:
  build:
    runs-on: ubuntu-latest    
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: npm install
        run: |
          npm install
          npm install cron
          npm install request
          npm install md5-node
      - name: '运行 【分】'
        run: |
          node Task/share.js
