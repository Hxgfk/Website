import {NBTData} from "../../NBT";

export class Villager extends NBTData {
    constructor() {
        super();
        this.data = null;
        // Offers
        this.offers = new NBTArray();
        // NoGravity
        this.gravity = null;
        // NoAI
        this.ai = null;
        // CustomName
        this.CustomName = "";
        // Brain
        this.brain = null;
        // Gossips
        this.gossips = null;
        // Age
        // 24000
        this.age = null;
        // Inventory
        this.inventory = null;
        // Xp
        this.xp = null;
        // Willing
        this.willing = null;
        // LastRestock
        this.lastRestock = null;
    }

    setGravity(disabled) {
        this.gravity = disabled;
    }

    setAI(disabled) {
        this.ai = disabled;
    }

    setData(object) {
        this.data = object;
    }

    addOffers(nbt) {
        this.offers.add(nbt);
    }

    setName(name) {
        this.CustomName = '\'"' + name + '\'"';
    }

    setBrain(brain) {
        this.brain = brain;
    }

    setGossips(gossips) {
        this.gossips = gossips;
    }

    setAge(age) {
        this.age = age;
    }

    setInventory(inventory) {
        this.inventory = inventory;
    }

    setExperience(experience) {
        this.xp = experience;
    }

    setWilling(isWilling) {
        this.willing = isWilling;
    }

    setLastRestock(lastRestock) {
        this.lastRestock = lastRestock;
    }

    build() {
        super.build();
        let all = new NBT();

        if (!(this.willing === null)) {
            all.add("Willing", this.willing);
        }
        if (!(this.data === null)) {
            all.add("VillagerData", this.data);
        }
        if (!(this.gravity === null)) {
            all.add("NoGravity", this.gravity);
        }
        if (!(this.ai === null)) {
            all.add("NoAI", this.ai);
        }
        if (!(this.xp === null)) {
            all.add("xp", this.xp);
        }
        if (!(this.CustomName === "")) {
            all.add("CustomName", this.CustomName);
        }
        if (!(this.age === null)) {
            all.add("Age", this.age);
        }
        if (!(this.lastRestock === null)) {
            all.add("LastRestock", this.lastRestock);
        }
        if (!(this.brain === null)) {
            all.add("Brain", this.brain);
        }
        if (!(this.gossips === null)) {
            all.add("Gossips", this.gossips);
        }
        if (!(this.inventory === null)) {
            all.add("Inventory", this.inventory);
        }
        if (!(this.offers.build() === "[]")) {
            let recipes = new NBT();
            recipes.add("Recipes", this.offers.build());
            all.add("Offers", recipes.build());
        }
        return all.build();
    }
}