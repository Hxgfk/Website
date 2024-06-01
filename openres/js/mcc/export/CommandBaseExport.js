// The command gen's base
export class Command {
    /**
     advancement (grant|revoke) <targets> everything
     advancement (grant|revoke) <targets> only <advancement> [<criterion>]
     advancement (grant|revoke) <targets> (from|through|until) <advancement>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/advancement?so=search
    Advancement(arg1, target, arg2, arg3) {
        return "advancement " + arg1 + " " + target + " " + arg2 + " " + arg3;
    }

    /**
     attribute <target> <attribute> [base] get [<scale>]
     attribute <target> <attribute> base set <value>
     attribute <target> <attribute> modifier add <uuid> <name> <value> (add|multiply|multiply_base)
     attribute <target> <attribute> modifier remove <uuid>
     attribute <target> <attribute> modifier value get <uuid> [<scale>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/attribute?so=search
    Attribute(target, attribute, arg1, arg2, arg3, arg4, arg5, arg6) {
        return "attribute " + target + " " + arg1 + " " + arg2 + " " + arg3 + " " + arg4 + " " + arg5 + " " + arg6;
    }

    /**
     bossbar add <id> <name>
     bossbar get <id> (max|players|value|visible)
     bossbar list
     bossbar remove <id>
     bossbar set <id> (color|max|name|players|style|value|visible)
     ... color (blue|green|pink|purple|red|white|yellow)
     ... max <max>
     ... name <name>
     ... players [<targets>]
     ... style (notched_6|notched_10|notched_12|notched_20|progress)
     ... value <value>
     ... visible <visible>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/bossbar?so=search
    Bossbar(arg1, arg2, arg3) {
        return "bossbar " + arg1 + " " + arg2 + " " + arg3;
    }

    /**
     clear [<targets>] [<item>] [<maxCount>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/clear?so=search
    Clear(target, itemId, maxCount) {
        return "clear " + target + " " + itemId + " " + maxCount;
    }

    /**
     clone <begin> <end> <destination> [replace|masked] [force|move|normal]
     clone <begin> <end> <destination> filtered <filter> [force|move|normal]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/clone?so=search
    Clone(begin, end, destination, arg1, arg2, arg3) {
        return "clone " + begin + " " + end + " " + destination + " " + arg1 + " " + arg2 + " " + arg3;
    }

    /**
     datapack disable <name>
     datapack enable <name>
     datapack enable <name> (first|last)
     datapack enable <name> (before|after) <existing>
     datapack list [available|enabled]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/datapack?so=search
    Datapack(arg1, arg2, arg3, arg4) {
        return "datapack " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     debug (start|stop|function)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/debug?so=search
    Debug(args) {
        return "debug " + args;
    }

    /**
     defaultgamemode <mode>
     # mode: survival, creative, adventure, spectator
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/defaultgamemode?so=search
    Defaultgamemode(args) {
        return "defaultgamemode " + args;
    }

    /**
     difficulty [easy|hard|normal|peaceful]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/difficulty?so=search
    Difficulty(args) {
        return "difficulty " + args;
    }

    /**
     effect clear [<targets>] [<effect>]
     effect give <targets> <effect> [<seconds>] [<amplifier>] [<hideParticles>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/effect?so=search
    Effect(target, arg1, arg2, arg3, arg4) {
        return "effect " + target + " " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     me <action>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/me?so=search
    Me(action) {
        return "me " + action;
    }

    /**
     enchant <target> <enchant> [<level>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/enchant?so=search
    Enchant(target, enchantment, level) {
        return "enchant " + target + " " + enchantment + " " + level;
    }

    /**
     experience add <targets> <amount> [levels|points]
     experience set <targets> <amount> [levels|points]
     experience query <targets> (levels|points)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/experience?so=search
    Experience(arg1, arg2, arg3, arg4) {
        return "experience " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     xp add <targets> <amount> [levels|points]
     xp set <targets> <amount> [levels|points]
     xp query <targets> (levels|points)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/xp?so=search
    Xp(arg1, arg2, arg3, arg4) {
        return "xp " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     fill <from> <to> <block> [destroy|hollow|keep|outline|replace]
     fill <from> <to> <block> replace [<filter>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/fill?so=search
    Fill(fromPos, toPos, blockId, args) {
        return "fill " + fromPos["x"] + " " + fromPos["y"] + " " + fromPos["z"] + " " + toPos["x"] + " " + toPos["y"] + " " + toPos["z"] + " " + blockId + " " + args;
    }

    /**
     forceload add <from> [<to>]
     forceload remove <from> [<to>]
     forceload remove all
     forceload query [<pos>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/forceload?so=search
    Forceload(arg1, arg2, arg3) {
        return "forceload " + arg1 + " " + arg2 + " " + arg3;
    }

    /**
     function <name>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/function?so=search
    Function(name) {
        return "function " + name;
    }

    /**
     gamemode (adventure|creative|spectator|survival) [<target>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/gamemode?so=search
    Gamemode(mode, target) {
        return "gamemode " + mode + " " + target;
    }

    /**
     gamerule <rule> [value]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/gamerule?so=search
    Gamerule(rule, value) {
        return "gamerule " + rule + " " + value;
    }

    /**
     give <target> <item> [<count>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/give?so=search
    Give(target, itemId, nbt, count) {
        return "give " + target + " " + itemId + nbt + " " + count;
    }

    /**
     item ...
     ... modify (block <pos>|entity <targets>) <slot> <modifier>
     ... replace (block <pos>|entity <targets>) <slot> ...
     ... with <item> [<count>]
     ... from (block <pos>|entity <targets>) <slot> [<modifier>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/item?so=search
    Item(arg1, arg2, arg3, arg4) {
        return "item " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     kick <target> [reason]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/kick?so=search
    Kick(target, reason) {
        return "kick " + target + " " + reason;
    }

    /**
     locate biome <biome>
     locate poi <poi>
     locate structure <structure>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/locate?so=search
    Locate(args, id) {
        return "locate " + args + " " + id;
    }

    /**
     msg <player> <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/msg?so=search
    Msg(target, msg) {
        return "msg " + target + " " + msg;
    }

    /**
     tell <player> <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/tell?so=search
    Tell(target, msg) {
        return "tell " + target + " " + msg;
    }

    /**
     w <player> <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/w?so=search
    W(target, msg) {
        return "w " + target + " " + msg;
    }

    /**
     particle <name> [<pos>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/particle?so=search
    Particle(particleId, pos) {
        return "particle " + particleId + " " + pos["x"] + " " + pos["y"] + " " + pos["z"];
    }

    /**
     particle <name> <pos> <delta> <speed> <count> [force|normal] [<viewers>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/particle?so=search
    Particle2(particleId, pos, delta, speed, count, args) {
        return "particle " + particleId + " " + pos["x"] + " " + pos["y"] + " " + pos["z"] + " " + delta["x"] + " " + delta["y"] + " " + delta["z"] + " " + speed + " " + count + " " + args;
    }

    /**
     playsound <sound> <source> <targets> [<pos>] [<volume>] [<pitch>] [<minVolume>]
     others use Playsound2
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/playsound?so=search
    Playsound(soundId, source, target) {
        return "playsound " + soundId + " " + source + " " + target;
    }

    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/playsound?so=search
    Playsound2(soundId, source, target, pos, volume, pitch, minVolume) {
        return "playsound " + soundId + " " + source + " " + target + " " + pos["x"] + " " + pos["y"] + " " + pos["z"] + " " + volume + " " + pitch + " " + minVolume;
    }

    /**
     recipe (give|take) <targets> (<recipe>|*)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/recipe?so=search
    Recipe(args, target, recipeId) {
        return "recipe " + args + " " + target + " " + recipeId;
    }

    /**
     say <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/say?so=search
    Say(message) {
        return "say " + message;
    }

    /**
     schedule function <function> <time> [append|replace]
     schedule clear <function>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/schedule?so=search
    Schedule(args, functionName, arg1, arg2) {
        return "schedule " + args + " " + functionName + " " + arg1 + " " + arg2;
    }

    /**
     scoreboard objectives (add|list|modify|remove|setdisplay)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/scoreboard?so=search
    ScoreboardObjectives(arg1, arg2, arg3, arg4) {
        return "scoreboard objectives " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     scoreboard players (add|enable|get|list|operation|remove|reset|set)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/scoreboard?so=search
    ScoreboardPlayers(arg1, arg2, arg3, arg4) {
        return "scoreboard players " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    ScoreboardPlayersOperation(target, objective, operation, source, sourceObjective) {
        return "scoreboard players operation " + target + " " + objective + " " + operation + " " + source + " " + sourceObjective;
    }

    /**
     setblock <pos> <block> [destroy|keep|replace]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/setblock?so=search
    Setblock(pos, blockId, args) {
        return "setblock " + pos["x"] + " " + pos["y"] + " " + pos["z"] + " " + blockId + " " + args;
    }

    /**
     spawnpoint [<player>] [<position>] [<angle>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/spawnpoint?so=search
    Spawnpoint(target, pos, angle) {
        return "spawnpoint " + target + " " + pos["x"] + " " + pos["y"] + " " + pos["z"] + " " + angle;
    }

    /**
     setworldspawn [<pos>] [<angle>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/setworldspawn?so=search
    Setworldspawn(pos) {
        return "setworldspawn " + pos["x"] + " " + pos["y"] + " " + pos["z"];
    }

    /**
     spectate <target> [<player>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/spectate?so=search
    Spectate(target, player) {
        return "spectate " + target + " " + player;
    }

    /**
     spreadplayers <x> <z> <spreadDistance> <maxRange> [under maxHeight] <teams> <target>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/spreadplayers?so=search
    Spreadplayers(centerPosX, centerPosZ, spreadDistance, maxRange, args, target) {
        return "spreadplayers " + centerPosX + " " + centerPosZ + " " + spreadDistance + " " + maxRange + " " + args + " " + target;
    }

    SpreadplayersUnder(centerPosX, centerPosZ, spreadDistance, maxRange, maxHeight, respectTeams, target) {
        return "spreadplayers " + centerPosX + " " + centerPosZ + " " + spreadDistance + " " + maxRange + " under " + maxHeight + " " + respectTeams + " " + target;
    }

    /**
     stopsound <targets> [<source>] [<sound>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/stopsound?so=search
    Stopsound(target) {
        return "stopsound " + target;
    }

    /**
     summon <entity> [<pos>] [<nbt>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/summon?so=search
    Summon(entityId, pos, nbt) {
        return "summon " + entityId + " " + pos["x"] + " " + pos["y"] + " " + pos["z"] + " " + nbt;
    }

    /**
     tag <targets> add <name>
     tag <targets> list
     tag <targets> remove <name
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/tag?so=search
    Tag(target, arg1, args) {
        return "tag " + target + " " + arg1 + " " + args;
    }

    /**
     team list [<team>]
     team add <team> [<displayName>]
     team remove <team>
     team empty <team>
     team join <team> [<members>]
     team leave <members>
     team modify <team> <option> <value
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/team?so=search
    Team(arg1, arg2, arg3, arg4) {
        return "team " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     teammsg <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/teammsg?so=search
    Teammsg(message) {
        return "teammsg " + message;
    }

    /**
     tm <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/tm?so=search
    Tm(message) {
        return "tm " + message;
    }

    /**
     teleport <destination>
     teleport <targets> <destination>
     teleport <location>
     teleport <targets> <location>。
     teleport <targets> <location> <rotation>
     teleport <targets> <location> facing <facingLocation>
     teleport <targets> <location> facing entity <facingEntity> [<facingAnchor>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/teleport?so=search
    Teleport(target, destination) {
        return "teleport " + target + " " + destination;
    }

    TeleportLocationRotation(target, location, rotationX, rotationY) {
        return "teleport " + target + " " + location["x"] + " " + location["y"] + " " + location["z"] + " " + rotationX + " " + rotationY;
    }

    TeleportFacing(target, location, facingLocation) {
        return "teleport " + target + " " + location["x"] + " " + location["y"] + " " + location["z"] + " facing " + facingLocation["x"] + " " + facingLocation["y"] + " " + facingLocation["z"];
    }

    /**
     tp <destination>
     tp <targets> <destination>
     tp <location>
     tp <targets> <location>。
     tp <targets> <location> <rotation>
     tp <targets> <location> facing <facingLocation>
     tp <targets> <location> facing entity <facingEntity> [<facingAnchor>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/tp?so=search
    Tp(target, destination) {
        return "tp " + target + " " + destination;
    }

    TpLocationRotation(target, location, rotationX, rotationY) {
        return "tp " + target + " " + location["x"] + " " + location["y"] + " " + location["z"] + " " + rotationX + " " + rotationY;
    }

    TpFacing(target, location, facingLocation) {
        return "tp " + target + " " + location["x"] + " " + location["y"] + " " + location["z"] + " facing " + facingLocation["x"] + " " + facingLocation["y"] + " " + facingLocation["z"];
    }

    /**
     tellraw <targets> <message>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/tellraw?so=search
    Tellraw(target, message) {
        return "tellraw " + target + " " + message;
    }

    /**
     time (add|query|set) <time>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/time?so=search
    Time(arg1, arg2) {
        return "time " + arg1 + " " + arg2;
    }

    /**
     title <player> clear
     title <player> reset
     title <player> title <JSON>
     title <player> subtitle <JSON>
     title <player> actionbar <JSON>
     title <player> times <fadeIn> <stay> <fadeOut>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/title?so=search
    Title(target, arg1, arg2, arg3, arg4) {
        return "title " + target + " " + arg1 + " " + arg2 + " " + arg3 + " " + arg4;
    }

    /**
     trigger <objective>
     trigger <objective> (add|set) <value>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/trigger?so=search
    Trigger(objective, arg1, arg2) {
        return "trigger " + objective + " " + arg1 + " " + arg2;
    }

    /**
     weather (clear|rain|thunder) [<duration>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/weather?so=search
    Weather(args, duration) {
        return "weather " + args + " " + duration;
    }

    /**
     worldborder add <distance> [<time>]
     worldborder center <pos>
     worldborder damage amount <damagePerBlock>
     worldborder damage buffer <distance>
     worldborder get
     worldborder set <distance> [<time>]
     worldborder warning distance <distance>
     worldborder warning time <time>
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/worldborder?so=search
    Worldborder(arg1, arg2, arg3) {
        return "worldborder " + arg1 + " " + arg2 + " " + arg3;
    }

    /**
     jfr (start|stop)
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/jfr?so=search
    Jfr(args) {
        return "jfr " + args;
    }

    /**
     publish [<port>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/publish?so=search
    Publish(args) {
        return "publish " + args;
    }

    /**
     seed
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/seed?so=search
    Seed() {
        return "seed";
    }

    /**
     help [<command>]
     */
    // https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/help?so=search
    Help(command) {
        return "help " + command;
    }
}

/*
Haven't Command:
/data
/place
/execute
/loot
*/