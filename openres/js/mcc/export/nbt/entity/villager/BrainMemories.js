import {NBTData} from "../../NBT";

export class BrainMemories extends NBTData {
    constructor() {
        super();
        this.MeetingPointPosition = new Position(0, 0, 0);
        this.MeetingPointDimension = "overworld";
        this.HomePosition = new Position(0, 0, 0);
        this.HomeDimension = "overworld";
        this.JobSitePosition = new Position(0, 0, 0);
        this.JobSiteDimension = "overworld";
    }

    setMeetingPointPosition(position) {
        this.MeetingPointPosition = position;
    }

    setMeetingPointDimension(dimension) {
        this.MeetingPointDimension = dimension;
    }

    setHomePosition(position) {
        this.HomePosition = position;
    }

    setHomeDimension(dimension) {
        this.HomeDimension = dimension;
    }

    setJobSitePosition(position) {
        this.JobSitePosition = position;
    }

    setJobSiteDimension(dimension) {
        this.JobSiteDimension = dimension;
    }

    build() {
        super.build();
        let Brain = new NBT();
        let memories = new NBT();
        let meeting_point = new NBT();
        let home = new NBT();
        let job_site = new NBT();

        meeting_point.add("pos", new NBTPos(
            this.JobSitePosition.x,
            this.JobSitePosition.y,
            this.JobSitePosition.z
        ).build());
        meeting_point.add("dimension", this.JobSiteDimension);

        home.add("pos", new NBTPos(
            this.HomePosition.x,
            this.HomePosition.y,
            this.HomePosition.z
        ).build());
        home.add("dimension", this.HomeDimension);

        job_site.add("pos", new NBTPos(
            this.JobSitePosition.x,
            this.JobSitePosition.y,
            this.JobSitePosition.z
        ).build());
        job_site.add("dimension", this.JobSiteDimension);

        memories.add("minecraft:meeting_point", meeting_point.build());
        memories.add("minecraft:home", home.build());
        memories.add("minecraft:job_site", job_site.build());
        Brain.add("memories", memories.build());
        return Brain.build();
    }
}