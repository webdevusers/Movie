import { Schema, model} from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false,
    default: '/icons/profile.png'
  },
  recentPlayed: {
    type: Array,
    default: []
  },
  download: {
    type: Array,
    default: []
  },
  watchList: {
    type: Array,
    default: []
  },

})

export default model('User', UserSchema)