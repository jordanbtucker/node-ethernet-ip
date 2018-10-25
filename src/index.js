const Controller = require("./controller");
const Tag = require("./tag");
const TagGroup = require("./tag-group");
const EthernetIP = require("./enip");
const util = require("./utilities");

const mynip = new EthernetIP.ENIP();
mynip.listIdentities("192.168.1.11").then(data =>{
    if(data) {
        console.log(data);
    }
});
module.exports = { Controller, Tag, TagGroup, EthernetIP, util };
