const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE='usersv1';

const UserSchemma={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    mail:{
        allowNull:false,
        type:DataTypes.STRING,
        unique: true
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    createAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model{
    static associate(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false
        }
    }
}

module.exports={USER_TABLE, UserSchemma, User}