# 1. package.json 中的 dependencies 與 devDependencies 分別是什麼
Ans: dependencies 是專案執行時所需要的套件，例如：如果套件需要處理 HTTP 請求，那麼 dependencies 應該加入 Express
，而 devDependencies 是專案開發所需要的套件。
例如: 
1. 測試框架：Mocha
2. 編譯工具:：Typescript
3. 打包工具：Webpack
4. 語法檢查工具：ESLint

# 2. package.json 中的 scripts 這個區塊怎麼用？
以下是一個簡單的範例
```json
{
  "scripts": {
    "start": "node app.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

script 用來自訂一些指令，可使用`npm run <script-name>`
script-name 可填入上面例子的 start, build, test, lint,...等



# 3. Port number 要怎麼以環境變數來設定？
可以透過修改 process.env 來設定環境變數
以下是範例程式
``` javascript
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
// 如果 process.env.PORT 沒有值 (為NULL 或 undefined)，則設為3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

```


#  4. 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

- 應該上傳的檔案:
1. 程式碼
2. README 
3. 環境配置 Dockerfile, package.json (requirement.txt)
4. .gitignore


- 不應上傳的檔案
1. 敏感性資料，如：密碼、APT token
2. 依賴套件 (使用者自行下載即可)，如果上傳到 github repo 會佔用空間
3. 開發者IDE的資訊，如：.vscode, .idea



# 5. 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

- CJS
// 匯入 module
const fs = require('fs');




# 6. 進階題:
## 6.1 [localhost](http://localhost) 是什麼？



## 6.2 `curl` 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？