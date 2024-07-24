class LootGenerator {
    constructor() {
        this.badLoot = [
            {item: "5de652c31b7e3716273428be"},
        ];

        this.goodLoot = [
            {item: "6176aca650224f204c1da3fb"},
        ];

        this.goodLootChance = 0.1;
    }

    generateLoot() {
        const isGoodLoot = Math.random() < this.goodLootChance;
        const lootPool = isGoodLoot ? this.goodLoot : this.badLoot;
        const loot = lootPool[Math.floor(Math.random() * lootPool.length)];
        return loot;
    }
}

module.exports = new LootGenerator();