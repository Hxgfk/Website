// nbt data model

export class NBTData {
    build() {
    }

    add() {
    }

    clear() {
    }

    pack(nbt, name) {
        return "{" + name + ":" + nbt + "}";
    }
}

export class NBT extends NBTData {
    NBTTag = [];

    constructor() {
        super();
    }

    add(tag, value) {
        super.add();
        let obj = new Object();
        obj.tag = tag;
        obj.value = value;
        this.NBTTag.unshift(obj)
    }

    build() {
        super.build();
        let NBT = "{";

        function pack(name, value) {
            return name + ":" + value + ",";
        }

        for (let nbtId in this.NBTTag) {
            NBT = NBT + pack(this.NBTTag[nbtId]["tag"], this.NBTTag[nbtId]["value"]);
        }
        NBT = NBT + "}";
        return NBT;
    }

    clear() {
        super.clear();
        this.NBTTag = "";
    }
}

export class NBTArray extends NBTData {
    NBTArr = [];

    constructor() {
        super();
    }

    add(NBTTags) {
        super.add();
        this.NBTArr.unshift(NBTTags);
    }

    build() {
        super.build();
        let list = "[";
        for (let nbt in this.NBTArr) {
            list = list + this.NBTArr[nbt] + ",";
        }
        list = list.concat("]");

        return list;
    }

    clear() {
        super.clear();
        this.NBTArr = [];
    }
}

export class NBTPos extends NBTData {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }

    build() {
        super.build();
        return "[" + this.x + "," + this.y + "," + this.z + "]";
    }
}