
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//conexao
// mongoose.connect('mongodb://localhost:27017/food-app', { useNewUrlParser: true, useUnifiedTopology: true  }).then((e) => console.log("Connect Sucess BD"))

//criando esqueleto do documento usuario
const AdmSchema = new Schema (
  {
  name: String,
  login: { type:Schema.Types.Mixed, unique: true, required: true } ,
  password: { type: Schema.Types.Mixed, required: true },
  allUsers: [{type: Schema.Types.ObjectId, ref: "user"}],
  role: {type:String, default: "adm"}
  },
  { timestamps:true }
)

//adicionando o esquelo no modelo do banco
const adm = mongoose.model("adm", AdmSchema)

//testes
const TestAdm = {
  name:"test",
  login:"test",
  password:"test",
}

// adm.create(TestAdm).then((s) => console.log(s)).catch((e) => console.log(e))

module.exports = adm