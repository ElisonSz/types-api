import { Request, Response } from "express";
import User, { ITFUser } from "../models/User";
import jwt from "jsonwebtoken";
export const signin = (req: Request, res: Response) => {
  res.send("signup");
};
export const signup = async (req: Request, res: Response) => {
  const user: ITFUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  user.password = await user.encryptPassword(user.password)
  const saveUser = await user.save()
//token

const token: string = jwt.sign({_id:saveUser._id},process.env.LLAVE || 'hola')

  //console.log(saveUser)
  res.header(token).json(saveUser)
};
export const profile = (req: Request, res: Response) => {
  res.send("profile");
};
