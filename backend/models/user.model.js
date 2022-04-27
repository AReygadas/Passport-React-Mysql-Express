const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE='mdl_user';

const UserSchemma={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    auth:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    confirmed:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    policyagreed:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    deleted:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    suspended:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    mnethostid:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    username:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    password:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    idnumber:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    firstname:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    lastname:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    email:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    emailstop:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    phone1:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    phone2:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    institution:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    department:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    address:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    city:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    country:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    lang:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    calendartype:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    theme:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    timezone:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    firstaccess:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    lastaccess:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    lastlogin:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    currentlogin:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    lastip:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    secret:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    picture:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    description:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    descriptionformat:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    mailformat:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    maildigest:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    maildisplay:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    autosubscribe:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    trackforums:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    timecreated:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    timemodified:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    trustbitmask:{
        allowNull: false,
        type: DataTypes.INTEGER
    }, 
    imagealt:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    lastnamephonetic:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    firstnamephonetic:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    middlename:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    alternatename:{
        allowNull:false,
        type:DataTypes.STRING,
    }, 
    moodlenetprofile:{
        allowNull:false,
        type:DataTypes.STRING,
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