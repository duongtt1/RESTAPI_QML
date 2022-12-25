function requested(type, url, data) {
    var xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            if (obj["success"]) {
                console.log("ok")
            }
        }
    }
    xmlhttp.open(type, url, true)
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xmlhttp.setRequestHeader(
                "token",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4N2Y3OWQyYTI3NTRmNDc2OTcwODciLCJpYXQiOjE2NzA5Mzg0ODl9.6ld4A8IFcGPzAcxANkl4k_CdBQp3PeoQs9jC_BYVY3c")
    xmlhttp.send()
}
