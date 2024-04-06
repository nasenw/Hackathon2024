const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class User extends Model {

    static async findUser(email){
        try {
            const user = await User.findByPk(email)
            console.log(user + " " + email);
            if(user.email === email){
                return user
            }else{
                return null
            }
        } catch (error) {
            return null
        }
    }

    static async validateUser(email, password)
    {
      try {
        const user = await User.findByPk(email)
        
        if(user && user.password === password){
            return user
        }else{
            return null
        }
    } catch (error) {
        return null
    }
    }
}

User.init({
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'User'
});

module.exports = User