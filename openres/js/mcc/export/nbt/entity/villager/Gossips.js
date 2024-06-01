import {NBTData} from "../../NBT";

export class Gossips extends NBTData {
    constructor() {
        super();
        this.Gossips = new NBTArray();
    }

    add(type, targetUUID, level) {
        super.add();
        let gossip = new NBT();
        gossip.add("Type", type);
        gossip.add("Target", targetUUID);
        gossip.add("Value", level);
        this.Gossips.add(gossip.build());
    }

    build() {
        super.build();
        return this.Gossips.build();
    }
}