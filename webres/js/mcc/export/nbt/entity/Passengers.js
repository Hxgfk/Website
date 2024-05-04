import {NBTData} from "../NBT";

export class RideEntity extends NBTData {
    constructor() {
        super();
        this.passengers = new NBTArray();
    }

    add(entityID) {
        super.add();
        let entity = new NBT();
        entity.add("id", entityID);
    }

    build() {
        super.build();
        let nbt = new NBT();
        nbt.add("Passengers", this.passengers.build());
        return nbt.build();
    }
}