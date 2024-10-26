import express from 'express';
import path from 'path';
import sequelize from './database.js';
import bodyParser from 'body-parser';
import routes from './routes/index.js'; // Import routes

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Sử dụng các route
app.use('/', routes);

// Khởi động server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
}).catch(err => {
    console.error('Unable to sync the database:', err);
});
