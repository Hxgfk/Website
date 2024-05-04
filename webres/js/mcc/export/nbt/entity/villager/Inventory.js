import {NBTData} from "../../NBT";

export class Inventory extends NBTData {
    constructor() {
        super();
        this.inventory = new NBTArray();
    }

    add(ItemID, count, tag) {
        let item = new NBT();
        item.add("id", ItemID);
        if (count > 64) {
            throw Error("The number of items cannot be greater than 64");
        } else {
            item.add("Count", count);
        }
        if (!(tag === null)) {
            item.add("tag", tag);
        }
        this.inventory.add(item.build());
    }

    addItemForNBTTag(nbt) {
        this.inventory.add(nbt);
    }

    build() {
        super.build();
        return this.inventory.build();
    }
}