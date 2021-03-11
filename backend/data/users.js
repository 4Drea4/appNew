import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },

  {
    name: "Doctor Who",
    email: "doctor@example.com",
    password: bcrypt.hashSync("123456", 10)
  },

  {
    name: "River Song",
    email: "river@example.com",
    password: bcrypt.hashSync("123456", 10)
  }
]

export default users
