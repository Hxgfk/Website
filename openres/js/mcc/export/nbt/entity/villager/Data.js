import {NBTData} from "../../NBT";


export class VillagerData extends NBTData {
    constructor() {
        super();
        this.profession = "minecraft:none";
        this.level = 0;
        this.type = "minecraft:plains";
    }

    setProfession(professionID) {
        this.profession = professionID;
    }

    setLevel(level) {
        this.level = level;
    }

    setType(typeID) {
        this.type = typeID;
    }

    build() {
        super.build();
        let VillagerData = new NBT();
        VillagerData.add("profession", this.profession);
        VillagerData.add("type", this.type);
        VillagerData.add("level", this.level);
        return VillagerData.build();
    }
}