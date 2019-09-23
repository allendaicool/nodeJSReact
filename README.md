### `create-react-app` with a server example
参考以下链接
**0. https://github.com/fullstackreact/food-lookup-demo
**2. https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/

###  version control Git

use new branch to add new feature。merge to master when completed
https://stackabuse.com/git-merge-branch-into-master/

###  配置 package.json。  添加eslint flowtype check
1） 自定义node server 和 react client 各自的package.json 文件，加入必须的dev dependency。新增.eslintrc.json 文件。 采用flow type 的标准 来规范代码格式

   - 如何用eslint 检验 指定的react 文件？
   实例： ./node_modules/.bin/eslint -c .eslintrc.json client/src/App.js （注意eslint script 并没有全局安装）

   - how to configure eslint file
    https://eslint.org/docs/user-guide/configuring#configuration-file-formats

   - eslint-plugin-flowtype
     https://www.npmjs.com/package/eslint-plugin-flowtype
     请注意 ： eslint-plugin-flowtype is not Flow
     https://stackoverflow.com/questions/40768266/eslint-plugin-flowtype-does-not-validate

### Nginx 配置
https://stackfame.com/deploy-nodejs-app-on-ubuntu-with-forever-and-nginx
https://www.hrupin.com/2017/11/how-to-install-nginx-webserver-on-mac-os-x

### 编辑工具 推荐 atom 1.38.2
- download package: git-diff-plus, split-diff

### css style
- 推荐使用 css modules 和 inline style
