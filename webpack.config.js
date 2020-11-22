const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключили плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
          // добавили правило для обработки файлов
        {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/i,
            loader: 'file-loader',
        },
          // аналогично добавьте правило для работы с html
        {
            test: /\.html$/,
            loader: 'html-loader'
        },

            // применять это правило только к CSS-файлам
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader, 
                { 
                    loader: 'css-loader', 
                    options: { 
                        importLoaders: 1 
                    } 
                }, 'postcss-loader']
        },
        ]
    },

    plugins: [
    // настроили плагин
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin() // подключение плагина для объединения файлов
    ]
}; 