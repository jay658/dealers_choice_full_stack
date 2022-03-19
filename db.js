const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack')
const STRING = Sequelize.STRING
const ENUM = Sequelize.ENUM

const Game = db.define('game', {
    name: {
        type: STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    genre: {
        type: ENUM('rpg', 'rts', 'moba', 'fps'),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
})

module.exports = {
    db, 
    Game
}