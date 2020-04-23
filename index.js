const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello 222 World!'))

app.get("/ngayKeTiep", (req, res) => {
    console.log(req.query)
    if (req.query != null) {
        a = parseInt(req.query.ngay);
        b = parseInt(req.query.thang);
        c = parseInt(req.query.nam);
        day = new Date(`${c}-${b}-${a}`);
        console.log(day); // Apr 30 2000

        nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);
        res.send({
            requestDay:day,
            nextDay:nextDay
        },200)


    } else {
        res.send("Missing parms", 400)
    }
})


app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))
