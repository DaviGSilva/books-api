const mongoose = require('mongoose');
const mongoUrl = 'mongodb://davi:123dv@ds257752.mlab.com:57752/curso-react-api';

const connect = () => mongoose.connect(mongoUrl);

module.exports = { connect };