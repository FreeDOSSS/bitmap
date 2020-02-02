const mongoose = require("mongoose");

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

function connectDB() {
  mongoose.connect(
    "mongodb+srv://bitmapproject:EupisxbkxPf7ptpy@cluster0-5d6uo.mongodb.net/bitmap?retryWrites=true&w=majority",
    option,
    err => {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      console.log("Подключение к базе успешно");
    }
  );
}

module.exports = connectDB;
