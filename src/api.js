const API_URL = 'https://krv.roxor.cloud/API'

const API = {
    auth: {
        activate: async (user) => {
            const response = await fetch(API_URL + '/Authentication/ActivateRequest', {
                method: 'POST',
                headers: {
                    evc: user,
                },
                body: JSON.stringify({
                    // activatePIN: null,
                    // deviceId: null,
                    evc: user,
                    // pin: null,
                }),
            })
            const token = await response.json()

            return token
        },
        login: async (user, pass) => {
            const response = await fetch(API_URL + '/Authentication/login', {
                headers: {
                    evc: user,
                    pin: pass,
                },
            })
            const token = await response.json()

            return token
        }
    },
    user: {
        home: async (token) => {
            const response = await fetch(API_URL + '/darca/Vitajte', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const userInfo = response.json()

            // {
            //     "TerminNasledOdberu":Datetime("YYYY-MM-DDThh:mm:ss"),
            //     "KrvnaSkupina":String,
            //     "Fenotyp":String,
            //     "FenotypAsString":String,
            //     "Pohlavie":String("M","Z")
            // }
            return userInfo
        },
        card: async (token) => {
            const response = await fetch(API_URL + '/darca/PreukazDarcu', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const userInfo = response.json()

            //    {
            //     "Meno": String,
            //     "Priezvisko":String,
            //     "RodneCislo":String,
            //     "DomovskePracovisko":String,
            //     "PocetOdberov":Number,
            //     "KrvnaSkupinaPopis":String,
            //     "FenotypAsText":String,
            //     "Poistovna":String,
            //     "KrvnaSkupinaZaklad":String
            // }
            return userInfo
        },
        donations: async (token) => {
            const response = await fetch(API_URL + '/darca/odber', {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donations = await response.json()

            // [{
            //     "Id":Number,
            //     "DatumOdberu":Datetime("YYYY-MM-DDThh:mm:ss"),
            //     "CisloOdberu":String,
            //     "TypOdberu":String("celá krv","plazma",...),
            //     "Pracovisko":String,
            //     "MnozstvoMl":Number,
            //     "Spracovanie":Number(bool),
            //     "Karantena":Number(bool)
            // },]
            return donations
        },
        donation: async (token, id) => {
            const response = await fetch(API_URL + `/darca/odber/${id}`, {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donation = await response.json()

            // {
            //     "Zaciatok": Datetime("YYYY-MM-DDThh:mm:ss"),
            //     "Koniec": Datetime("YYYY-MM-DDThh:mm:ss"),
            //     "Trvanie": Number[minute],
            //     "Vyjazd": Boolean,
            //     "Autoodber": Boolean
            // }
            return donation
        },
        donationResult: async (token, id) => {
            const response = await fetch(API_URL + `/darca/odber/${id}/lvko`, {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donation = await response.json()

            // [{
            //     "IdParamKO": Number(4,2,3,5,6,9), // no 27 why ???
            //     "Datum": Datetime("YYYY-MM-DDThh:mm:ss"),
            //     "Hodnota": Number,
            //     "MimoLimit": Boolean,
            //     "OdberId": Number(0),
            //     "IsSelected": Boolean,
            //     "IsPadding": Boolean
            // },]
            return donation
        },
        donationResultParam: async (token, id, paramId) => {
            const response = await fetch(API_URL + `/darca/lvko/${paramId}/${id}`, {
                headers: {
                    'X-EKDToken': token,
                },
            })
            const donation = await response.json()

            // [{
            //     "Datum": Datetime("YYYY-MM-DDThh:mm:ss"),
            //     "Hodnota": 7.00,
            //     "MimoLimit": Boolean,
            //     "OdberId": Number,
            //     "IsSelected": Boolean,
            //     "IsPadding": Boolean
            // },]
            return donation
        },
    },
    settings: {
        params: async (token) => {
            const response = await fetch(API_URL + '/ciselniky/ParametreKO', {
                headers: {
                    'X-EKDToken': token,
                },
            })

            const bloodSettings = response.json()

            // [{
            //     "Id": Number,
            //     "Kod": String(
            //         4: "HGB hemoglobín",
            //         2: "WBC leukocyty",
            //         3: "RBC erytrocyty",
            //         5: "HCT hematokrit",
            //         6: "MCV stredný objem Er",
            //         9: "PLT trombocyty",
            //         27: "Hgb odber z prsta"
            //     ),
            //     "Nazov": "Červené krvné farbivo",
            //     "MernaJednotka": String("g/l","x10e9/l","x10e12/l","l/l","fl","x10e9/l","g/l")
            //     "DolnaHranicaMuzi": Number,
            //     "HornaHranicaMuzi": Number,
            //     "DolnaHranicaZeny": Number,
            //     "HornaHranicaZeny": Number
            // },]
            return bloodSettings
        },
    },
}

export default API
