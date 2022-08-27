module.exports = {
    format: "A4",
    orientation: "Landscape",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Ankur Soni</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
}