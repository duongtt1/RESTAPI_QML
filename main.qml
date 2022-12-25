import QtQuick.Window 2.2
import QtQuick.Controls 2.12
import "./utils.js" as Utils

ApplicationWindow {
    property int count: 0
    id: window
    width: 1024
    height: 600
    visible: true

    Button {

        onClicked: () => {
        var url = "http://localhost:4024/api/v1/classes/getall"
        var type = "GET"
        var data = {}
        Utils.requested(type, url, data)
    }
}
}
