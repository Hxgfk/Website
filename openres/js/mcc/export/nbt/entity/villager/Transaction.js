import {NBTData} from "../../NBT";

export class Transaction extends NBTData {
    constructor() {
        super();
        this.buyItemObject = new NBT();
        this.buyBItemObject = new NBT();
        this.sellItemObject = new NBT();
        this.offer = new NBT();
        this.buyB = false;
        this.max = 1;
        this.buyItem = "minecraft:air";
        this.buyCount = 1;
        this.buyBItem = "minecraft:air";
        this.buyBCount = 1;
        this.sellItem = "minecraft:air";
        this.sellCount = 1;
        this.rewardExp = true;
        this.uses = null;
        this.xp = 0;
        this.demand = null;
        this.specialPrice = null;
        this.priceMultiplier = null;
    }

    setBuyItem(ItemID) {
        this.buyItem = ItemID;
    }

    setBuyItemCount(count) {
        this.buyCount = count;
    }

    setBuyBItem(ItemID) {
        this.buyBItem = ItemID;
    }

    setBuyBItemCount(count) {
        this.buyBCount = count;
    }

    setSellItem(ItemID) {
        this.sellItem = ItemID;
    }

    setSellCount(count) {
        this.sellCount = count;
    }

    setMaxUses(value) {
        this.max = value;
    }

    setIsRewardExperience(isRewardExperience) {
        this.rewardExp = isRewardExperience;
    }

    setUses(uses) {
        this.uses = uses;
    }

    setExperience(experience) {
        this.xp = experience;
    }

    setDemand(demand) {
        this.demand = demand;
    }

    setSpecialPrice(specialPrice) {
        this.specialPrice = specialPrice;
    }

    setPriceMultiplier(priceMultiplier) {
        this.priceMultiplier = priceMultiplier;
    }

    build() {
        super.build();
        this.buyItemObject.add("id", this.buyItem);
        this.buyItemObject.add("Count", this.buyCount);
        this.offer.add("maxUses", this.max);
        this.offer.add("buy", this.buyItemObject.build());
        if (this.buyB) {
            this.buyBItemObject.add("id", this.buyBItem);
            this.buyBItemObject.add("Count", this.buyBCount);
            this.offer.add("buyB", this.buyBItemObject.build());
        }
        this.sellItemObject.add("id", this.sellItem);
        this.sellItemObject.add("Count", this.sellCount);
        this.offer.add("sell", this.sellItemObject.build());
        this.offer.add("rewardExp", this.rewardExp);
        this.offer.add("xp", this.xp);
        if (!(this.demand === null)) {
            this.offer.add("demand", this.demand);
        }
        if (!(this.specialPrice === null)) {
            this.offer.add("specialPrice", this.specialPrice);
        }
        if (!(this.priceMultiplier === null)) {
            this.offer.add("priceMultiplier", this.priceMultiplier);
        }
        if (!(this.uses === null)) {
            this.offer.add("uses", this.uses);
        }
        return this.offer.build();
    }
}