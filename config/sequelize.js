const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

console.log('in sequalize file')
console.log(process.env);
const config = {
    /*db: {
        username: 'nagp',
        host: 'postgresdb-service',
        database: 'nagp',
        password: 'nagp',
        port: 5432,
        dialect: "postgres",
        enableSequelizeLog: true,
        //schema: 'rb_home_finance'
    },*/
    db: {
        username: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        dialect: "postgres",
        enableSequelizeLog: true,
        //schema: 'rb_home_finance'
    },
}

const db = {};
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    logging: console.log,
    schema: config.db.schema,
    define: {
        timestamps: false,
        underscored: true
    }
});


(async function testConnection() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        throw Error(error)
    }
})();


const rootPath = path.normalize(`${__dirname}/..`);
const modelsDir = `${rootPath}/models`

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(modelsDir)
    .filter(file => {
        return (file.indexOf(".") !== 0) && (file !== "index.js")
    })
    // import model files and save model names
    .forEach(file => {
        const model = require(path.join(modelsDir, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

sequelize.sync();


module.exports = db