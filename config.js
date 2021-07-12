
module.exports = {

    document_root: "src",

    start_page: "/index.html",

    /**
     * scssからみた相対パスで書き出しする場合に記述します
     * css_sibling_dist: "/../css"
     */
    css_sibling_dist: null,

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
     * scssからみた相対パスで書き出しする場合に記述します
     * ex）js_sibling_dist: "/../js"
     */
     js_sibling_dist: null,

    /**
     *  単一ファイルの場合はここに記述、
     */
    js_dist: 'src/js',

    ts_options: {
        //（string）1つのjavascriptと1つの定義ファイルを生成します。モジュールシステムが使用されていない場合にのみ機能します。
        // outFile: "",

        //（string）出力を別の（仮想）ディレクトリに移動します。出力をディスクに書き込むには、gulp.destが必要であることに注意してください。
        // outDir: "src/js/",

        //（boolean）暗黙の「any」型を使用した式と宣言について警告します。
        noImplicitAny: true,

        // 入力ファイルのルートディレクトリを指定します。 outDirを使用して出力ディレクトリ構造を制御するためにのみ使用します。
        rootDir: ".",

        //（boolean）インデックス署名のないオブジェクトにインデックスを付けるための --noImplicitAny エラーを抑制します。
        suppressImplicitAnyIndexErrors: false,

        //（boolean）デフォルトのlibを含めない（-Array、Dateなどの定義を含む）
        // noLib: true,

        //（string []）コンパイルに含まれるライブラリファイルのリスト。
        lib: [
            'ES6',
            'es2015',
            'dom'
        ],

        //（文字列）ECMAScriptターゲットバージョンを指定します：「ES3」（デフォルト）、「ES5」または「ES6」。
        target: "esnext",

        //（string）モジュールコード生成を指定します：「commonjs」、「amd」、「umd」、または「system」。
        module: "commonjs",

        //（文字列）jsxコード生成を指定します：「react」または「preserve」（TS1.6 +）。
        jsx: "preserve",

        //（ブール値）対応する .d.ts ファイルを生成します。これらのファイルを保存するには、dtsストリームをパイプする必要があります。
        declaration: false,

        //（boolean）出力にコメントを出力しません。
        removeComments: true,

        //（boolean）ソース内のデコレータのメタデートを発行します。
        emitDecoratorMetadata: false,

        //（boolean）async / awaitキーワード（TS1.6 +）を使用したES7提案の非同期関数のサポート。
        // experimentalAsyncFunctions: true,

        //（boolean）ES7デコレータの実験的なサポートを有効にします。
        experimentalDecorators: false,

        //（string）モジュールがどのように解決されるかを決定します。 Node.js / io.jsスタイルの解像度の場合は「node」、または「classic」（デフォルト）（TS1.6 +）のいずれか。
        moduleResolution: "classic",

        //（boolean）型チェックでエラーが報告された場合、コンパイルしません。
        noEmitOnError: true,

        //（boolean）コンパイルされた出力で__extendsのようなカスタムヘルパー関数を生成しません。
        noEmitHelpers: true,

        //（boolean）生成されたコードのconstenum宣言を消去しません。
        // keepConstEnums: true,

        //（boolean）ファイルを個別にコンパイルし、タイプをチェックしないため、速度が大幅に向上します。 gulp-plumberとTypeScript1.5以降を使用する必要があります。
        isolatedModules: false,

        //（boolean）JavaScriptファイルのコンパイルを許可します。
        allowJs: false,
    },

    /**
     * 監視対象のSCSSファイルパス
     */
    ts: [
        'ts/*.ts',
        'ts/**/*.ts',
        "src/**/*.ts",
        "src/**/*.ts",
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