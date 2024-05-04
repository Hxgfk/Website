// Item nbt data
import {NBTData} from "../NBT";

export class ItemData extends NBTData {
    constructor() {
        super();
        this.damage = 0;
        this.unbreakable = null;
        this.CanDestroy = null;
        this.CustomModelData = null;
    }

    setDamage(damage) {
        this.damage = damage;
    }

    setUnbreakable(unbreak) {
        this.unbreakable = unbreak;
    }

    setAdventurePlayerCanDestroyBlock(blockID) {
        this.CanDestroy = [];
        this.CanDestroy.unshift(blockID);
    }

    setCustomModelData(data) {
        this.CustomModelData = data;
    }

    build() {
        super.build();
        let tag = new NBT();
        tag.add("Damage", this.damage);
        if (!(this.unbreakable === null)) {
            tag.add("Unbreakable", this.unbreakable);
        }
        if (!(this.CanDestroy === null)) {
            tag.add("CanDestroy", this.CanDestroy);
        }
        if (!(this.CustomModelData === null)) {
            tag.add("CustomModelData", this.CustomModelData);
        }
    }
}