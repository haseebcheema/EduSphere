import mongoose from 'mongoose';
import User from './User.js';

const educatorSchema = new mongoose.Schema({
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' }
});

export default User.discriminator('Educator', educatorSchema);
