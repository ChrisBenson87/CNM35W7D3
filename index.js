require("dotenv").config();

const mongoose = require("mongoose");

(async () => {
  mongoose.connect(process.env.MONGO_URI);
  console.log(process.env.MONGO_URI);

  const Cat = mongoose.model("Cat", {
    name: String,
  });

//   await Cat.deleteMany({})


const cat = new Cat({ name: "Zildjian" });
await cat.save();
console.log(cat);

const foundCat = await Cat.findById("6244367838e841d0424edb2c")
console.log(foundCat)
  

mongoose.connection.close();
})();
