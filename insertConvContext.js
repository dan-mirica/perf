var arr = [];

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
var prefix="R16-";
var numberUsers=6000;
var maximumPadding=4;
 for (var i=1; i<=numberUsers; i++){
 j=pad(i,maximumPadding,'0');
 var tid = "tid-"+prefix+j
 db.conversationContext.insertOne(
 
    {
    "_id" : prefix+j,
    "_class" : "eu.nets.common.dto.context.ConversationContext",
    "userId" : prefix+j,
    "sessionId" : "23f9783b-2910-450e-a946-b4d7fdd626f0",
    "firstName" : prefix+j,
    "lastName" : prefix+j,
    "pin" : "$2a$10$3pvdKXF3Y08Hv43HN1nmHu/Xe482oyeqN0JU/LqzYPCf70Xow4Ppi",
    "quantumInvoices" : [],
    "bsInvoices" : [],
    "notificationSettings" : {
        "fiPayment" : false,
        "notified" : false
    },
    "transfers" : {
        "currentTransfers" : {
            "1c62bcaf04544cb6930136a5c4759272" : {
                "_id" : null,
                "transferId" : "1c62bcaf04544cb6930136a5c4759272",
                "sender" : {
                    "fbid" : "1554246137983775",
                    "firstName" : prefix+j,
                    "lastName" : prefix+j
                },
                "receiver" : {},
                "createdDate" : ISODate("2017-08-03T12:49:08.938Z"),
                "status" : "NEW"
            }
        },
        "transfersHistory" : [ 
            "13aa27e70fe14cbd8a48d49477acc45c"
        ]
    },
    "debtorId" : "20437",
    "authenticationMethod" : {
        "securityToken" : "haTrBOqEMoBL7lcyMT6ZgzDeifXhLgQni2kSYiMGSwt40bXeYqIIfl4SJqRDXRZYvu7DHrmFqWTIV4TOFqgGN0xL8yUapzQMMaaE16wcRB86MxHfqo7Rw2zstl31Np5H6eZtvBkAx40IvBFYl6OELmyCLTFP41",
        "authenticationOption" : "NEM_ID"
    },
    "blocked" : false,
    "authSessionTimestamp" : NumberLong(1501763061959),
    "created" : ISODate("2017-08-03T00:21:51.878Z"),
    "hasDefaultCard" : true,
    "language" : "en_UK",
    "details" : {
        "topic" : "Transfer"
    }
}
     
     
)

}