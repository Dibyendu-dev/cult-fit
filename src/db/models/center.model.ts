import { CreationOptional,InferAttributes, InferCreationAttributes,Model } from "sequelize";
import sequelize from "./sequelize"

class Center extends Model<InferAttributes<Center>,InferCreationAttributes<Center>>{
    declare id:CreationOptional<number>;
    declare name:string;
    declare location:string;
    declare createdAt:CreationOptional<Date>
    declare updatedAt:CreationOptional<Date>

}

Center.init({
    id:{
        type:"INTEGER",
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:"STRING",
        allowNull:false
    },
    location:{
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
    tableName:"centers",
    sequelize:sequelize,
    underscored:true,
    timestamps:true
})
export default Center;