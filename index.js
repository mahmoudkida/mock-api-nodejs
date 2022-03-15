var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/bot-data", (req, res, next) => {
    res.json([{



                "dateOfBirthH": '07-03-1441',
                "deathDate": "",
                "englishFirstName": "YOUSEF",
                "englishLastName": "ALQAHTANI",
                "englishSecondName": "BADER",
                "englishThirdName": "SAEED",
                "familyName": "ط§ظ„ظ‚ط-ط·ط§ظ†ظٹ",
                "fatherName": "ط¨ط¯ط±",
                "firstName": "ظٹظˆط³ظپ",
                "gender": "M",
                "grandFatherName": "ط§ط¨ظ† ط³ط¹ظٹط¯",
                "idExpiryDate": '10-03-1451',
                "idIssuePlace": "طھط¨ظˆظƒ",
                "idIssuePlaceCode": 6,
                "idVersionNumber": 0,
                "logId": 1053210501,
                "nationality": "SAU",
                "placeOfBirth": "طھط¨ظˆظƒ"


    },{

                    "dateOfBirthH": '11-01-1397',
                    "deathDateH": "",
                    "englishFirstName": "HUWAYDAH",
                    "englishLastName": "SALEH",
                    "englishSecondName": "YOUSEF",
                    "englishThirdName": "-",
                    "firstName": "ظ‡ظˆظٹط¯ظ‡",
                    "gender": "F",
                    "iqamaExpiryDateH": '15-06-1444',
                    "iqamaIssuePlaceCode": 2,
                    "iqamaIssuePlaceDesc":"ط¬ط¯ظ‡",
                    "iqamaVersionNumber": 11,
                    "lastName": "طµط§ظ„ط-",
                    "legalStatus": "true",
                    "logId": 567484523,
                    "nationalityCode": 110,
                    "nationalityDesc": "ظ„ط¨ظ†ط§ظ†",
                    "occupationCode": 6111023,
                    "occupationDesc": "ظ…طµظپظپط© ط´ط¹ط±",
                    "placeOfBirthCode": 110,
                    "placeOfBirthDesc": "ظ„ط¨ظ†ط§ظ†",
                    "secondName": "ظٹظˆط³ظپ",
                    "sponsorName": "طµط§ظ„ظˆظ† ط®ظ„ظˆط¯ طµط¯ظ‚ظ‡ ظ…ط¬ظ…ط¯ ط§ظ„ظ…ط³ظ„ظ…ط§ظ†ظٹ ظ„ظ„طھط²ظٹظٹظ† ط§ظ„ظ†ط³ط§ط¦ظٹ",
                    "thirdName": "-"


        }]
    )
});