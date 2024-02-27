import axios from "axios"

export const handleTurnOnValve = async (valve, isTurnedOn) => {
    if (!isTurnedOn) {
        alert(valve+" Turned Off")
    }
    else{
        try {
            const res = await axios({
                method: "post",
                url: "https://api.twilio.com/2010-04-01/Accounts/AC28b5319fa98315d623c3d3250a7ce1ce/Messages.json",
                data: {
                    To: "+919344208550",
                    From: "+17865012708",
                    Body: valve
                },
                auth: {
                    username: "AC28b5319fa98315d623c3d3250a7ce1ce",
                    password: "192452d65d347f138db143f311683fac"
                },
                headers : {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
            )
            alert(res.data.body)
        } catch (error) {
            alert(error.message)
        }
    }
}
