var path=require('path');
var publicPath = '/';
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry:{react:'./react/js/index.jsx'},
    output:{
      path:path.resolve(__dirname, 'react_build'),
      filename:'[name].js',
      publicPath:publicPath
    },
    module:{
      loaders:[
        {
          test:/\.css$/,
          loaders:['style','css'],
          exclude:/node_modules/
        },
        {
          test:/\.jsx?$/,
          exclude: /node_modules/,
          loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
          include:path.resolve(__dirname,'react')
        },
        {
          test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          exclude: /node_modules/,
          loader:'url?limit=40000',
          include:path.resolve(__dirname,'react')
        }
      ]
    },
    resolve:{
      extensions:['','.js','.css','jsx','.html']
    },
    plugins:[
      new HtmlWebpackPlugin({
        title:'Leave a message',
        chunks:'./react_build/react.js',
        filename:'index.html',
        inject:'body',
        hash:'true',
        showErrors:'true',
        chunksSortMode:'none',
        excludeChunks:/node_modules/,
        template:'./react/html_template/index.html'
      })
    ]
}
