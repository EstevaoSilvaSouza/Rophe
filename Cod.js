const imgbbUploader = require("imgbb-uploader");

const url = "d1f915e7d3881e067c17381cf1cc3a5d"

const image = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

const options = {
    apiKey: url,
    base64string: image
}

imgbbUploader(options).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

export default imgbbUploader
