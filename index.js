const express = require("express");
const path = require('path');
const es6Renderer = require('express-es6-template-engine')
const app = express();
app.engine('html', es6Renderer);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});
app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render("index.html", {});
})

app.get('/info', (req, res) => {

    res.render("info.html", {
        locals: {
            "dateOfBirthH": '07-03-1441',
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
            "employer_address": "8229 King Fahad Branch Rd, Riyadh, KSA"
        }
    });
})



app.get("/get-data", (req, res, next) => {
    res.json([{
                "dateOfBirthH": '07-03-1441',
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

                    "dateOfBirthH": '11-01-1397',
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
    )
});