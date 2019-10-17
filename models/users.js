const mongoose = require("mongoose")
const Schema = mongoose.Schema

//conexao
// mongoose.connect('mongodb://localhost:27017/food-app', { useNewUrlParser: true, useUnifiedTopology: true  }).then((e) => console.log("Connect Sucess BD"))

//criando esqueleto do documento usuario
const UserSchemas = new Schema (
  {
  name: String,
  email: { type:Schema.Types.Mixed, unique: true } ,
  },
  { timestamps:true }
)

//adicionando o esquelo no modelo do banco
const user = mongoose.model("user", UserSchemas)

//testes
const TestUser = {
  name:"test",
  email:"lalala@gmail.com"
}

// user.create(TestUser).then((s) => console.log(s)).catch((e) => console.log(e))

module.exports = user