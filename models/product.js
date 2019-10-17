const mongoose = require("mongoose")
const Schema = mongoose.Schema

//conexao
// mongoose.connect('mongodb://localhost:27017/food-app', { useNewUrlParser: true, useUnifiedTopology: true  }).then((e) => console.log("Connect Sucess BD"))

//criando esqueleto do documento usuario
const ProductSchema = new Schema (
  {
  image:{type: String, default: "logo512.png"},
  name: String,
  price: { type:Schema.Types.Mixed, required: true } ,
  description: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps:true }
)

//adicionando o esquelo no modelo do banco
const product = mongoose.model("product", ProductSchema)

//testes
const TestProduct = {
  name:"bananinha",
  price:"R$ 20,00",
  description:"oplis saindea nfmeoa fiaemd aoe, oplis saindea nfmeoa fiaemd aoe // oplis saindea nfmeoa fiaemd aoe"
}

// product.create(TestProduct).then((s) => console.log(s)).catch((e) => console.log(e))

module.exports = product