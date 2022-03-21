const express = require("express");
const path = require('path');
const es6Renderer = require('express-es6-template-engine')
const app = express();
app.engine('html', es6Renderer);
var bodyParser = require('body-parser')


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render("index.html", {});
})
const user_data = [{
    "ID":1955912365,
    "dateOfBirthH": '01-01-1430',
    "dateOfBirth": '01-01-1980',
    "deathDate": "",
    "englishFirstName": "YOUSEF",
    "englishLastName": "ALQAHTANI",
    "englishSecondName": "BADER",
    "englishThirdName": "SAEED",
    "familyName": "سعيد",
    "fatherName": "بدر",
    "firstName": "يوسف",
    "gender": "M",
    "grandFatherName": "القحطاني",
    "idExpiryDate": '10-03-1451',
    "idIssuePlace": "الرياض",
    "idIssuePlaceCode": 6,
    "idVersionNumber": 0,
    "logId": 1053210501,
    "nationality": "SAU",
    "placeOfBirth": "الرياض",
    "has_account": true,
    "married": true,
    "children": 5,
    "has_car": true,
    "car_type": "Dodge Charger",
    "car_purchase_date": 2015,
    "studying": false,
    "eligable_for_home_finance": true,
    "national_address": "13 Olaya st, Riyadh",
    "employer_name": "Bank Albilad",
    "employer_address" : "8229 King Fahad Branch Rd, Riyadh, KSA"


},{
    "ID":2399314265,
    "dateOfBirthH": '01-01-1440',
    "dateOfBirth": '01-01-2000',
    "deathDateH": "",
    "englishFirstName": "HUWAYDAH",
    "englishLastName": "SALEH",
    "englishSecondName": "YOUSEF",
    "englishThirdName": "-",
    "firstName": "هويدة",
    "gender": "F",
    "iqamaExpiryDateH": '15-06-1444',
    "iqamaIssuePlaceCode": 2,
    "iqamaIssuePlaceDesc":"الرياض",
    "iqamaVersionNumber": 11,
    "lastName": "يوسف",
    "legalStatus": "true",
    "logId": 567484523,
    "nationalityCode": 110,
    "nationalityDesc": "مصرية",
    "occupationCode": 6111023,
    "occupationDesc": "مدرسة",
    "placeOfBirthCode": 110,
    "placeOfBirthDesc": "القاهرة",
    "secondName": "صالح",
    "sponsorName": "مدرسة مناهل الجيل العالمية",
    "thirdName": "-",
    "has_account": false,
    "married": true,
    "children": 0,
    "has_car": true,
    "car_type": "Dodge Charger",
    "car_purchase_date": 2015,
    "studying": true,
    "eligable_for_home_finance": true,
    "study_school": "Masters degree from Kind Fahd University",
    "national_address": "4228 Imam Saud St, Almorouj, Riyadh",
    "employer_name": "Manahel Elgeel International School",
    "employer_address" : "Al Khawarzami St, Olaya"


}]
app.get('/info', (req, res) => {

    res.render("info.html", {
        locals: user_data[0]
    });
})



app.get("/get-all-data", (req, res, next) => {

    res.json(user_data)
});



app.get("/get-data", (req, res, next) => {

    const id = req.query.id;
    const date_birth = req.query.date_birth;
    let return_data = []
    console.log(req.query)
    user_data.forEach((item) => {

        if (item['ID'] == id && item['dateOfBirth'] == date_birth){
            return_data = item
        }
    });
    if(return_data['ID']){
        res.json(
            return_data
        )
    }else{
        res.status(404).send("Coan't find requested data")
    }

});