const express = require('express')
const app = express()
const port = 3000
const smartsheet = require("./testing.js")
var options = {
    path: "Sample Sheet.xlsx",
    fileName: "Sample Sheet.xlsx",
    queryParameters: {
        sheetName: "Sample Sheet",
        headerRowIndex: 0
    }
};
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/smartsheet", (req,res)=> {
    console.log("Testing")
    smartsheet.sheets.getCellHistory(options)
    .then(function(history) {
        console.log(history);
        res.send(history)
    })
    .catch(function(error) {
        console.log(error);
    });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
