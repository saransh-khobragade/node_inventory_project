const central_config = {
    "secret": 'supersecret',
    "redis": {
        "hostname": "localhost",
        "port": 6379
      },
    "mongodb":{
      "uri":"mongodb+srv://saransh98:12345@cluster0-7pbxe.gcp.mongodb.net/test?retryWrites=true&w=majority",
      "db_name":"inventory_management"
    }
}

module.exports = central_config