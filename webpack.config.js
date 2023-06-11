const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './js/main.js', // Update the entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // Add necessary loaders and rules for your project
        ],
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                proxy: 'http://localhost:8888/your-website-url/',
                port: 8888,
                files: ['**/*.php', '**/*.css', '**/*.js'],
                reloadDelay: 0,
            },
            { reload: false }
        ),
    ],
};
