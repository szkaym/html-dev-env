# カンタンHTML + SCSS 作成環境

## インストール

1. リポジトリをクローンする
2. .git ディレクトリを削除する
3. プロジェクトにあわせて git init する
4. 必要なものをインストールする

    インストールに必要な環境は下記

    - NodeJS v14.16
    - npm 6.14.11

    インストールコマンド

    ```txt
    npm install
    ```

## 設定

設定ファイルは `config.js` です

```js
module.exports = {

    document_root: "src",

    start_page: "/index.html",

    /**
     * scssからみた相対パスで書き出しする場合に記述します
     * ex）scss_over_dist: "/../css"
     */
    scss_over_dist: null,

    /**
     *  単一ファイルの場合はここに記述、
     */
    css_dist: 'src/css',

    /**
     * 監視対象のSCSSファイルパス
     */
    scss: [
        'scss/*.scss',
        'sass/**/*.sass',
        "src/**/*.scss",
        "src/**/*.sass",
    ],

    /**
     * 監視対象のSCSSファイル以外のパス
     */
    html: [
        "src/*.html",
        "src/**/*.html",
        "src/*.js",
        "src/**/*.js",
        "src/**/*.php"
    ]
}
```

## 利用方法

one command.

```txt
npm run watch
```
