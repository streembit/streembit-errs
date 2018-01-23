var ErrorCodes = {
    "SYSTEM": 0x0001,
    "BADPARAM":0x0002,
    "INVALID_PAYLOAD": 0x0003,

    "EVENT_ERROR": 0x1000,

    "HTTP_ERROR": 0x3000,
    "HTTP_HANDLEREQUEST": 0x3001,
    "HTTP_NOWSINFO": 0x3002,
    "HTTP_NOWSPEERS": 0x3003,

    "WS_ERROR": 0x4000,
    "WS_ONSEND": 0x4001,
    "WS_PING": 0x4002,
    "WS_REGISTER": 0x4003,
    "WS_DHTPUT": 0x4004,
    "WS_DHTGET": 0x4005,
    "WS_PEERMSG": 0x4006,
    "WS_PEERMSG": 0x4007,
    "WS_CONTACT_SESSION": 0x4008,

    "MAX_ERROR_CODE": 0xFFFF
};

module.exports = ErrorCodes;