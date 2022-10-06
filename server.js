
const express = require('express');
const routes = require('./routes');
const sequelize = require('');
const app = express();
const PORT = process.env.PORT || ;
app.use(express.json());
app.use(express.urlencoded({ extended:  }));
app.use(routes);
sequelize.sync({ force:  }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
