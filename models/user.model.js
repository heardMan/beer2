module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            validate: {
                isEmail: true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            required: true
        },
        lastName: {
            type: DataTypes.STRING,
            required: true
        },
        salt: DataTypes.STRING,
        hash: DataTypes.STRING,
        address1: {
            type: DataTypes.STRING,
            required: true
        },
        address2: {
            type: DataTypes.STRING,
            
        },
        city: {
            type: DataTypes.STRING,
            required: true
        },
        state: {
            type: DataTypes.STRING,
            required: true
        },
        zip: {
            type: DataTypes.STRING,
            required: true
        },
        senator1: {
            type: DataTypes.STRING,
            required: true
        },
        senator2: {
            type: DataTypes.STRING,
            required: true
        },
        usRepresentative: {
            type: DataTypes.STRING,
            required: true
        },
        congressionalDistrict: {
          type: DataTypes.STRING,
          required: true
      },
        phone: DataTypes.STRING
    });
    return User;
  };
  