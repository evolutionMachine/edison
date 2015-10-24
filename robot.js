var Cylon = require('cylon');

Cylon.robot({
    connections: {
        edison: {adaptor: 'intel-iot'}
    },

    devices: {
        poisonPump     : { driver: 'direct-pin', pin: 13 },
        foodPump       : { driver: 'direct-pin', pin: 13 },
        ejectorPump    : { driver: 'direct-pin', pin: 13 },
        irLed          : { driver: 'direct-pin', pin: 13 },
        light2Frequency: { driver: 'direct-pin', pin: 13 }
    }

});