class MellstroyTrader {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.createTrader();
        this.overrideTransactionSound();
        this.modifySealedWeaponsCase();
    }

    createTrader() {
        const trader = {
            "_id": "5ac3b934156ae10c4430e83c", // Unique trader ID
            "name": "Mellstroy",
            "fullName": "Andrey Burim",
            "description": "Just a businessman looking to make business and totally try not to scam you into his gambling scheme.",
            "avatar": "images/mellstroy_trader.png",
            "slogan": "ЧТО ЗА БИЗНЕС СУКА?!?!?",

            "items_buy": {
                "default": [],
                "presets": []
            },
            "items_sell": [
                {
                    "item": "5c093e3486f77430cb05e822",
                    "price": 5,
                    "loyaltyLevel": 1
                }
            ],
            "loyaltyLevels": [
                {
                    "level": 1,
                    "minLevel": 1,
                    "buy_price_coef": 1,
                    "sell_price_coef": 1, 
                    "currency": "5449016a4bdc2d6f028b456f",
                    "minSaleSum": 0,
                    "standing": 0
                }
            ],
            "workingTime": {
                "start": "10:00",
                "end": "22:00"
            }
        };
    }
}