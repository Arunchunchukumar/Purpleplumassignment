const { Model } = require('objection')
const knex = require('../Purpleplumassignment/db')
Model.knex(knex)

class Employees extends Model{
    static get tableName(){
        return 'user'
    }
    static get jsonSchema(){
        return{
            type:'object',
            required:['email'], 
            properties:{
                id:'integer',
                name:{type:'string'},
                email:{type:'string'},
                phone:{type:'string'},
                DOB:{type:'string'},
                createdOn:{type:'string'},
                createdBy:{type:'string'},
                updatedOn:{type:'string'},
                updatedBy:{type:'string'}


            }
        }
    }
    
}
module.exports = Employees



