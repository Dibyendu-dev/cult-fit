import { CreationOptional,InferAttributes, InferCreationAttributes,Model } from "sequelize";
import sequelize from "./sequelize"

class User extends Model<InferAttributes<User>,InferCreationAttributes<User>>{
    declare id:CreationOptional<number>;
    declare name:string;
    declare email:string;
    declare createdAt:CreationOptional<Date>
    declare updatedAt:CreationOptional<Date>

}

User.init({
    id:{
        type:"INTEGER",
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:"STRING",
        allowNull:false
    },
    email:{
        type:"STRING",
        allowNull:false
    },
    createdAt:{
        type:"DATE",
       defaultValue: new Date()
    },
    updatedAt:{
        type:"DATE",
        defaultValue: new Date()
    },
},{
    tableName:"users",
    sequelize:sequelize,
    underscored:true,
    timestamps:true
})
export default User;