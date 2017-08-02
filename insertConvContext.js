var arr = [];

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
var prefix="fb";
var numberUsers=100;
var maximumPadding=3;
 for (var i=1; i<=numberUsers; i++){
 j=pad(i,maximumPadding,'0');
 db.conversationContext.insertOne(
 { 
    "_id" : prefix+j, 
    "_class" : "eu.nets.common.dto.context.ConversationContext", 
    "userId" : prefix+j, 
    "sessionId" : "2673c768-0045-434c-9935-6fa406e3cfd9", 
    "firstName" : prefix+j, 
    "lastName" : prefix+j, 
    "pin" : "$2a$10$93oSR1XXvZeDS8D6UDEECOKdnxHRYFYvRjcyEX9MFC9CqL4rgO1He", 
    "debtorExtensions" : [
        {
            "_id" : null, 
            "payments" : [
                {
                    "_id" : "593a8eb9-d28b-4557-92d4-f2d5c5b8f0f3", 
                    "paymentDate" : "2017-12-30", 
                    "amount" : "350.00", 
                    "customerNo" : "dasdasdasdasda", 
                    "pbsNo" : NumberLong(0), 
                    "debGrpNo" : NumberLong(0), 
                    "externalId" : "593a8eb9-d28b-4557-92d4-f2d5c5b8f0f3", 
                    "debtorNo" : "19711", 
                    "custNameShort" : "EIGIL HAUGE", 
                    "ocr" : {
                        "paymentSlipType" : "71", 
                        "paymentIdentifier" : "000000000011114", 
                        "creditorIdentifier" : "80000235"
                    }, 
                    "enrolled" : false
                }, 
                {
                    "_id" : "488ee3ce-ef82-44dd-bc28-4120ac7bfc12", 
                    "paymentDate" : "2017-12-30", 
                    "amount" : "121.00", 
                    "customerNo" : "dasdasdasdasda", 
                    "pbsNo" : NumberLong(0), 
                    "debGrpNo" : NumberLong(0), 
                    "externalId" : "488ee3ce-ef82-44dd-bc28-4120ac7bfc12", 
                    "debtorNo" : "19711", 
                    "custNameShort" : "EIGIL HAUGE", 
                    "ocr" : {
                        "paymentSlipType" : "71", 
                        "paymentIdentifier" : "000000000011114", 
                        "creditorIdentifier" : "80000235"
                    }, 
                    "enrolled" : false
                }
            ], 
            "bills" : [
                {
                    "_id" : "593a8eb9-d28b-4557-92d4-f2d5c5b8f0f3", 
                    "dueDate" : "2017-12-30", 
                    "amount" : 350.0, 
                    "customerId" : "dasdasdasdasda", 
                    "ocrNumber" : {
                        "paymentSlipType" : "71", 
                        "paymentIdentifier" : "000000000011114", 
                        "creditorIdentifier" : "80000235"
                    }, 
                    "status" : "NOT_PAID_YET", 
                    "source" : "EBOKS", 
                    "creditor" : {
                        "_id" : null, 
                        "fiNumber" : "80000235", 
                        "name" : "EIGIL HAUGE"
                    }, 
                    "debtorId" : "19711", 
                    "readStatus" : "UNREAD"
                }, 
                {
                    "_id" : "488ee3ce-ef82-44dd-bc28-4120ac7bfc12", 
                    "dueDate" : "2017-12-30", 
                    "amount" : 121.0, 
                    "customerId" : "dasdasdasdasda", 
                    "ocrNumber" : {
                        "paymentSlipType" : "71", 
                        "paymentIdentifier" : "000000000011114", 
                        "creditorIdentifier" : "80000235"
                    }, 
                    "status" : "NOT_PAID_YET", 
                    "source" : "EBOKS", 
                    "creditor" : {
                        "_id" : null, 
                        "fiNumber" : "80000235", 
                        "name" : "EIGIL HAUGE"
                    }, 
                    "debtorId" : "19711", 
                    "readStatus" : "UNREAD"
                }
            ], 
            "debtorAddress" : {
                "lastName" : "User", 
                "firstName" : "Test", 
                "address" : "BulPrimaverii,22", 
                "postalCode" : "34121", 
                "city" : "Iasi", 
                "country" : "Denmark", 
                "countryCode" : "DK"
            }, 
            "notifications" : {
                "debtorId" : "19711", 
                "mandateConfirmed" : true, 
                "mandateRejected" : true, 
                "bsPaymentCancelled" : true, 
                "invoicePayment" : true, 
                "cardIsDueToExpire" : true, 
                "fiPayment" : true, 
                "notificationsOn" : true, 
                "links" : {
                    "self" : {
                        "href" : "https://mobileapi-preprod.betalingsservice.dk/api/mobile-api/v1/debtors/19711/settings/notifications"
                    }
                }
            }, 
            "sessionId" : "2673c768-0045-434c-9935-6fa406e3cfd9"
        }
    ], 
    "quantumInvoices" : [
        {
            "amount" : "99.90", 
            "creditorName" : "EIGIL HAUGE", 
            "invoiceId" : "196798"
        }, 
        {
            "amount" : "13.00", 
            "creditorName" : "EIGIL HAUGE", 
            "invoiceId" : "196799"
        }, 
        {
            "amount" : "350.00", 
            "creditorName" : "EIGIL HAUGE", 
            "invoiceId" : "196807"
        }, 
        {
            "amount" : "222.00", 
            "creditorName" : "EIGIL HAUGE", 
            "invoiceId" : "196817"
        }
    ], 
    "bsInvoices" : [
        {
            "amount" : "13.00", 
            "creditorName" : "EIGIL HAUGE", 
            "invoiceId" : "196799", 
            "billId" : "cbec6405-f69e-4875-9674-66589845fe3a"
        }, 
        {
            "amount" : "350.00", 
            "creditorName" : "EIGIL HAUGE", 
            "invoiceId" : "196807", 
            "billId" : "552f895d-7069-46a7-a7ef-788b9e9ffc31"
        }
    ], 
    "notificationSettings" : {
        "fiPayment" : false, 
        "notified" : false
    }, 
    "transfers" : {
        "currentTransfers" : {
            "79c4b789c0234e0995cfb11c2b59a6860" : {
                "_id" : null, 
                "transferId" : "79c4b789c0234e0995cfb11c2b59a6860", 
                "sender" : {
                    "fbid" : prefix+j, 
                    "firstName" : prefix+j, 
                    "lastName" : prefix+j
                }, 
                "receiver" : {

                }, 
                "createdDate" : ISODate("2017-07-31T11:22:59.488+0000"), 
                "status" : "NEW"
            }
        }, 
        "transfersHistory" : [
            "69840c6b15b34ab5803d619a5dbf6d64"
        ]
    }, 
    "debtorId" : "19711", 
    "authenticationMethod" : {
        "securityToken" : "6nQtfs6bj1xHuzZnE32kDelNqTAhmrYi5aHQc3uTlpL5HTHeuLJJHycZtubf2BCeDC5PZNmtLVM7y0emb2vIjtPHU3TFAJvJW4cEc5AQrLDvDPwvQqvqPrGWDFOloumUDfOOZR41GKiGVSMvKeSuM0UbDg0nXr4", 
        "authenticationOption" : "NEM_ID"
    }, 
    "blocked" : false, 
    "authSessionTimestamp" : NumberLong(1501243677581), 
    "created" : ISODate("2017-07-27T00:48:06.408+0000"), 
    "hasDefaultCard" : true, 
    "language" : "en_UK", 
    "details" : {
        "topic" : "Transfer"
    }
}
)

}