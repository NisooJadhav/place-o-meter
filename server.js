const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 3001;

mongoose
  .connect("mongodb://0.0.0.0:27017/myDB")
  .then(console.log("connected to db"))
  .catch((e) => console.log(e));

const studentSchema = mongoose.Schema(
  {
    sl_no: {
      type: Number,
      unique: true,
    },
    gender: String,
    ssc_p: Number,
    ssc_b: String,
    hsc_p: Number,
    hsc_b: String,
    hsc_s: String,
    degree_p: Number,
    degree_t: String,
    workexp: String,
    etest_p: Number,
    mca_p: Number,
    status: String,
    salary: Number,
  },
  { collection: "students" }
);

const Student = mongoose.model("Student", studentSchema, "students");

// studentSchema.plugin(autoIncrement.plugin, {
//   model: "Student",
//   field: "sl_no",
//   startAt: 1,
//   incrementBy: 1,
// });

app.get("/", (req, res) => {
  res.send("express is here");
});

app.post("/create", (req, res) => {
  const newStud = new Student({
    gender: req.body.gender,
    ssc_p: req.body.SSCP,
    ssc_b: req.body.SSCB,
    hsc_p: req.body.HSCP,
    hsc_b: req.body.HSCB,
    hsc_s: req.body.HSCS,
    degree_p: req.body.degreeP,
    degree_t: req.body.degreeT,
    workexp: req.body.workExp,
    etest_p: req.body.ETESTP,
    mca_p: req.body.MCAP,
    status: req.body.status,
    salary: req.body.salary,
  });

  newStud
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/allStudents", (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(students);
    }
  });
});

// Student.find({}, (err, students) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Retrieved students:", students);
//   }
// });

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Student.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Student.findByIdAndUpdate(
    { _id: req.params.id },
    {
      gender: req.body.gender,
      ssc_p: req.body.ssc_p,
      ssc_b: req.body.ssc_b,
      hsc_p: req.body.hsc_p,
      hsc_b: req.body.hsc_b,
      hsc_s: req.body.hsc_s,
      degree_p: req.body.degree_p,
      degree_t: req.body.degree_t,
      workexp: req.body.workexp,
      etest_p: req.body.etest_p,
      mca_p: req.body.mca_p,
      status: req.body.status,
      salary: req.body.salary,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log("Express server is running on port: ", port);
});
