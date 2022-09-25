import express from 'express'
import { Sequelize, QueryTypes } from 'sequelize'

const PORT = process.env.PORT || 3001
const app = express()
const dbHost = 'localhost'
const dbName = 'klika'
const dbUser = 'root'
const dbPassword = ''
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
})

const dbSelect = async (query) => {
    const data = await sequelize.query(query, { type: QueryTypes.SELECT })
    return data
}

const sqlString = (string) => {
    return string.replaceAll("'", "\'")
}

app.listen(PORT, () => {
    console.log(`Server port: ${PORT}`)
})

app.get('/api/filters', async (req, res) => {
    const fields = ['author', 'genre', 'year']
    const data = {}

    for(let field of fields) {
        const res = await dbSelect(`SELECT DISTINCT ${field} FROM songs ORDER BY ${field}`)
        
        data[field] = res.map(item => (item[field]))
    }

    res.json(data)
})

app.get('/api/songs', async (req, res) => {
    const {offset, limit, sort, sortBy} = req.query
    const filterKeys = ['author', 'genre', 'year']
    const sortMethod = Number(sort) ? 1 : 0
    let query = `SELECT * FROM songs`
    let filters = []

    for(let key of filterKeys) {
        let value = req.query[key]

        if(typeof value == 'string')
            value = sqlString(value)

        if(value) 
            filters.push(`${key} = '${value}'`)
    }

    if(filters.length)
        query += ` WHERE ${filters.join(' AND ')}`

    if(sortBy)
        query += ` ORDER BY ${sortBy} ${sortMethod ? 'DESC' : 'ASC'}`

    const getData = await dbSelect(query)
    const length = getData.length
    const data = getData.splice(offset, limit)

    res.json({length, data})
})