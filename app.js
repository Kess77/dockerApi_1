const express = require('express');
const moment = require('moment');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

const fruit = require('./routes/fruit');
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} = process.env;

mongoose
	.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`, { useNewUrlParser: true })
	.then(() => {
		const app = express();
    app.use(morgan('combined'));
    app.use('/fruit', fruit);
    app.get('/', (req, res) => {
      res.status(200).json({
        date: moment().toISOString(),
      });
    });
    app.listen(port, () => {
      console.log(`
      DOPK listening on port: ${port}.\n
      Availabe routes:
        GET / - returns current date and time
        GET /fruit - returns all fruits
        POST /fruit - creates a new fruit
        DELETE /fruit/:id - deletes a fruit
      `);
    })
	})