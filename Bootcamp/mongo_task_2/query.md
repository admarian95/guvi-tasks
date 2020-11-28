1. Find all the topics and tasks which are thought in the month of October
=>  db.topics.find({ "$where": "this.date.getMonth() === 9" })

2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
=> db.topics.find({ "$where": "(this.date.getMonth() === 9)&&(this.date.getFullYear() === 2020)&&(this.date.getDate() > 15 && this.date.getDate() < 31)" })

db.student.findOneAndUpdate({"name":"The GodFather"},{$set:{"mentor_name":"a"}})

 db.collection('student').findOneAndUpdate({"name":el},{$set:{"mentor_name":"a"}})