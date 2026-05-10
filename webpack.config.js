const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 1. Import the plugin


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
     clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
      {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
      },
        {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset', // Automatically chooses between 'asset/resource' and 'asset/inline'
    },
    ],
  },
  plugins: [
       new HtmlWebpackPlugin({ // 2. Add the plugin to the plugins array
       title: 'My Webpack App', // Custom title for the generated HTML
       template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
