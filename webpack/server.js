const path = require('path');
const dist = path.resolve(__dirname, '../dist');

module.exports = {
    devServer: {
        contentBase: dist
    }
}
