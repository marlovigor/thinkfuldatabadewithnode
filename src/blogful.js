require('dotenv').config()
const knex = require('knex')
const ArticlesService = require('./articles-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

before(() => {
    return db
        .into('blogful_articles')
        .insert(testArticles)
})

after(() => db.destroy())


console.log(ArticlesService.getAllArticles())