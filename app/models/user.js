const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    // Make sure the email and hashedPassword are both required and strings
    email: {
      type: String,
      required: true,
      // make sure each email is unique
      unique: true
    },
    // the hashedPassword is based off the real password and used to sign in
    hashedPassword: {
      type: String,
      required: true
    },
    // the token is created and sent back to the user when they sign in.
    // The signed in user will send the token when making authenticated requests,
    // so the API knows who the user is.
    token: String
  },
  {
    // include createdAt and updatedAt timestamps for each user
    timestamps: true,
    toJSON: {
      // remove `hashedPassword` field when  we call `.toJSON`
      // https://mongoosejs.com/docs/api.html#document_Document-toObject
      // `_doc` isn't used here, named with prepended _ for private convention
      // `user` is the JS plain-object representation of the `_doc`
      transform: (_doc, user) => {
        delete user.hashedPassword
        return user
      }
    }
  }
)

module.exports = mongoose.model('User', userSchema)
