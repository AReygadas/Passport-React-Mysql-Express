const {User, UserSchemma}=require('./usersv1.model')


function setupModels(sequelize){
    User.init(UserSchemma, User.config(sequelize));
}

module.exports = setupModels;