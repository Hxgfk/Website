import {NBTData} from "../NBT";

export class Item extends NBTData {
    constructor(ItemID, count) {
        super();
        this.id = ItemID;
        this.count = count;
        this.tag = null;
    }

    setTagData(ItemData) {
        this.tag = ItemData;
    }

    build() {
        super.build();
        let nbt = new NBT();
        nbt.add("id", this.id);
        nbt.add("Count", this.count);
        if (!(this.tag === null)) {
            nbt.add("tag", this.tag);
        }
        return nbt.build();
    }
}