
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