import { Schema, model,Document } from "mongoose";
import bcryptjs from "bcryptjs";
export interface ITFUser extends Document {
  username: string,
  email: string,
  password: string,
  encryptPassword(password:string):Promise<string>,
  validatePassword(password: string):Promise<boolean>
}

const userSquema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSquema.methods.encryptPassword = async(password:string): Promise<string> =>{
const salt = await bcryptjs.genSalt(10);
return bcryptjs.hash(password,salt)
}

userSquema.methods.validatePassword = function(password:string): Promise<boolean>{
return bcryptjs.compare(password,this.password)
}
export default model<ITFUser>("User", userSquema);
