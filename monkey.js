const spears = [
    "a patient list", "acknown", "adventure my discretion", "aery", "affectioned", "affections swayed", "against the hair", "agnize", "aimed so near", "alarum'd", "alike bewitched", "all exercise", "ambition", "amerce", "Anon, anon", "anters", "apparent prodigies", "argal", "aroint thee", "arrant", "arras", "as thou list", "asquint", "atomies", "augurers", "auspicious mistress", "bastinado", "batten", "bawbling", "bawcock", "bawd", "bear hard", "beetles o'er", "beggarly account", "behoveful", "beldams", "belike", "berattle", "beshrew", "betid", "betimes", "betoken", "bewray", "biddy", "bilboes", "bird of night", "bite my thumb", "bite thee by the ear", "blasted", "blazon", "blinking idiot", "bodements", "bodkin", "bombard", "bootless", "bosky", "bowers", "brach", "brainsickly", "bray out", "break his day", "break with", "brief candle", "bring the device to the bar", "brock", "broken sinews", "bruit", "buckler", "busky", "but soft", "caitiff", "caliver", "callet", "cank'red, cankered", "cantons", "cap-a-pe", "carded", "carrion men", "carrions", "cashiered", "casing", "catch", "cater-cousins", "caterwauling", "cautel", "cerecloth", "cerements", "certes", "chafing with", "chalked forth", "champain", "changed eyes", "chaps", "charactery", "chariest", "charmingly", "checking at", "cheveril glove", "chinks", "chop-logic", "chopt", "chough", "Christian cursy", "civet", "clepe", "climatures", "clodpole", "cobbler", "cockatrices", "collied", "collier", "Colossus", "colour", "common proof", "compass", "compliment extern", "comptible", "concave shores", "conceit", "condition", "contagious blastments", "contemned love", "continuate", "contracted bachelors",   
    "corky", "coronets", "corse", "court of guard", "coxcomb", "coystrill", "cozen", "cozier", "crickets cry", "crisped", "crochets", "crossed", "crowner", "crush a cup", "cry you mercy", "cubiculo", "cullionly barbermonger", "cursy", "cut-purse", "dallying", "date is out, the", "dateless", "daws", "dear account", "death's-head", "denotement", "dilate", "dismount thy tuck", "dissemble", "distaff", "distemperature", "do my duties", "dog at", "doit", "dormouse valour", "doublet", "doves", "down-gyved", "drabbing", "dram", "dropping fire", "drops of sorrow", "drossy", "dry sorrow (drinks our blood)", "dudgeon", "dunnest", "dun's the mouse", "dupp'd", "dwell on form", "eanlings", "Egyptian", "elflocks", "eliads", "Elysium", "embowell'd", "encave", "enchafed", "endues", "engluts", "ensteeped", "envy", "enwheel", "erns", "Ethiop's", "extravagant and erring", "extremities", "eyeless", "eyes' windows", "fable", "factious", "fadge", "fain", "fall off", "falling sickness", "Falls purpose", "fashion", "fat", "Fates", "favour", "feather-bed", "festinate", "fetches", "fia", "Fie", "figures", "fleer", "fleering", "Flibbertigibbet", "flirt-gills", "flote", "flowerets", "flung out", "fobbed", "foison", "fools' zanies", "fopped", "fordid", "forks", "formal constancy", "four elements", "franklin", "frieze", "frippery", "from the main", "fulsome", "fust", "fustian", "gage", "gaged", "gallow", "galls his kibe", "gamesome", "gaskins", "gasted", "gauntlet", "gentle", "get the start", "gib", "give him o'er", "glazed", "gleek", "goatish", "God-den", "goodyears",   
    "goose", "gouts", "grace for grace", "gramercy", "great wheel", "green sour ringlets", "grise", "grizzled", "gross and scope", "gross in sense", "groundings", "gudgeon", "gull", "guttered", "hams", "haply", "hard construction", "hardiment", "harpy", "hart", "have at thee", "have old", "hearts of controversy", "heath", "heat-oppressed", "heave the gorge", "heavy summons", "heir-apparent", "hests", "hie", "high-lone", "high-sighted", "hilding", "hinds", "hit together", "hob, nob", "hold carelessly", "holidam", "holp", "horned man's", "housewives", "hugger-mugger", "humour", "hunts-up", "hurlyburly", "husbandry", "ides", "ill-divining", "Illyria", "impawn'd pledged", "import", "in scarlet, to be", "incarnadine", "indign", "ingraft", "ingrafted", "insuppressive", "intentively", "intermit", "inurn'd", "is pure innocence", "Jacks", "jaunce", "jaundice", "jealous", "jointress", "Jove", "jowls", "kisses Emilia", "knapped", "knits up", "knotted and combined locks", "ladybird", "lay-to", "lazar-like", "leasing", "leman", "lethe", "lief", "liver", "liver, brain, and heart", "livings", "loath", "loggerheads", "long-ingraffed", "lown", "lym", "magnificoes", "maidenhead", "make shift", "makes dainty", "malapert", "marchpane", "marry", "masterless", "maugre", "mazzard", "meet", "meetest", "meiny", "memento mori", "meshes", "mewed up to her heaviness", "micher", "miching mallecho", "might not but", "minion", "misprision", "moe", "moiety competent", "moo", "mooncalf", "mortal arbitrament", "motion of the liver", "mountebanks", "mouse-hunt", "mow", "much ado", "much unfurnished", "Mugs", "mushrumps", "music from the spheres", "mute", "naughty",   
    "new abroach", "night-tripping fairy", "nimble-footed", "nimble-pinioned doves", "nonce", "nothing jealous", "nuncle", "O proper stuff", "occulted", "odd-even", "o'er ears", "of general assault", "of wax", "on the hip", "orb", "ordinary", "othergates", "out", "out of haunt", "out of warrant", "outface them", "overname", "paddock", "pale Hecate", "palmy", "palter", "pard or cat o' mountain", "parle", "patch", "paunch", "pearl", "peize", "pennyworths", "pent-house lid", "perdy", "periwig-pated", "perpetual wink", "pignuts", "plume up", "point-devise", "poor pennyworth", "portance", "possets", "posy", "pout'st upon", "practicing upon", "praetor", "prate", "prick", "primy", "princox", "prithee", "prodigies", "proof of constancy", "proper", "propertied me", "prorogued", "pudder", "puddled", "puling", "purblind", "purple-hued malt-worm", "pursy", "put foil", "put on", "put to silence", "put up our pipes", "quailing", "quaint", "quick mettle", "quiddities", "quilets", "quillets", "rack'd reference to the rack, an instrument of torture", "rank garb", "ranker", "rated", "razes", "reasonable shore", "receiving", "recks rede", "reechy", "reeking", "remembrances", "rest you merry", "reverb no hollowness", "rheumy", "rive", "robustious", "romage", "ronyon", "rouse", "rump-fed", "sable silver'd", "sallies", "saws", "scant show well", "scanted", "scarfed", "Scone", "scotch'd", "scrimers", "scutcheon", "se offendendo", "seated in the mean", "sect or scion", "seel", "self-bounty", "selfsame flight", "sennet", "sequestration", "set cock-a-hoop", "several bastardy", "shark'd", "shent", "shoon", "shoughs", "shrift", "shut up", "sick offence", "sift him", "signifying nothing", "sir-reverence", "skimble-skamble stuff",   
    "sleave", "slenderly known himself", "'slight", "slipp'd the hour", "slubber", "slug-abed", "smilets", "sneck up", "Soft you", "sonties", "sooth", "sounded", "sow'd a grizzle on thy case", "spleen", "splenetive", "spongy", "springe", "stand close", "star-crossed", "steads", "still", "still quiring", "stoup", "stronds", "stumblest on my counsel", "suborn'd", "suit", "swag-bellied", "swashing blow", "sweet friends", "swoopstake", "swounded", "tabor", "taper", "tardiness in nature", "teen", "tell the clock", "tenders", "termagant", "terms compulsative", "tetchy", "Thane", "Theban", "thought-executing", "thunder-stone", "tinkers", "'Tis all one", "Tom o' Bedlam", "topgallant", "toy in blood", "traffic", "traject", "trammel up", "travelling lamp", "trencher", "trimmed", "tristful", "trowest", "truckle-bed", "truncheon", "turn Turk", "two-headed Janus", "unbend", "unbitted", "unbound", "unbraced", "unbruised", "uncharge the practice", "undergoing stomach", "undone", "ungently", "unhoused", "unhousel'd", "unmake", "unprevailing", "unprovide", "unreclaimed", "unsinew'd", "unstuffed", "untaught", "untented", "unthrifty", "unyoke", "upon the gad", "up-staring", "urchin-shows", "usance", "vailing", "varlets", "varnished faces", "verdure", "vestal livery", "villanies", "virgin hue", "vizards", "void your rheum", "vulgar, the", "wafter", "wag", "want-wit", "watch him tame", "watchful cares", "water-rugs", "weak supposal", "weather-fends", "weird sisters", "welkin", "well conceited", "weraday", "whe'r", "white-upturned", "whoreson", "wild-goose chase", "will he, nill he", "willow cabin", "wilt", "windlasses", "wonder-wounded", "wondrous sensible", "worser genius", "wot", "yarely", "yerked", "yoeman", "young-eyed", "younker", "your mind hold"
] //pulled from https://learn.lexiconic.net/shakewords.htm

const monkeySounds = [
    "oooh OOOH",
    "OOOH OOOH OOOOOH",
    "oooh",
    "aaah AAAH",
    "AAH AAAAAH",
    "aaah",
    "ooook",
    "OOOOK",
    "ooook OOOOK",
    "ooooOOO",
    "ook-ook",
    "eeek-aak-eek",
    "woop woop woop",
    "woooooooooooooooooop",
    "WOOOOOOOOOP",
    "&#x1f34c;" //banana emoji
]
//form from document where inputs are
const form = document.querySelector(".monkey-form")
//number of paragraphs from number input field
const numPara = document.getElementById("numPara")
//number of paragraphs from range slider
const numParaRange = document.getElementById("numParaRange")
//where the text will end up
const result = document.querySelector(".monkey-text")

function syncParas(e){
    //force numeric value of 1 if NaN is attempted as entry
    const value = (e.target.value == "") ? 1 : e.target.value
    numPara.value = value;
    numParaRange.value = value;
}

if(form) {
    form.addEventListener('submit', e=> {
        e.preventDefault()
        //get number of paragraphs and then monkey!
        const val = parseInt(numPara.value);
        //include banana selector
        const bananas = (document.getElementById("banana").value==="Yes") ? true : false
        let newText = ""
        
        //limit the number of monkey sounds in a paragraph to:
        maxMonkeyCount = monkeySounds.length - 5
        
        for (let i = 0; i < val; i++){
            let subText = ""
            //random number of words to use for paragraph, average length of a standard paragraph is 100-200 words
            randParaLen = Math.floor(Math.random() * 101) + 100;
            //set up some counters to make random entries/ensure we have the right number of words
            wordCount = 0
            monkeyCount = 0 //number of monkey words in a paragraph
            addedMonkey = 4 //initial 'wait' for the number of shakespearean words before a monkey word can be added at the start of a paragraph
            while (wordCount < randParaLen) {
                //if percentile chance (>70) 
                //and the number of monkey words is less than the maximum 
                //and there has been enough shakespearean words added between monkey sounds, add monkey sound
                if (Math.floor(Math.random() * 100) > 70 && monkeyCount < maxMonkeyCount && addedMonkey < 1){
                    addSound = monkeySounds[Math.floor(Math.random() * monkeySounds.length)]
                    //if use wants banana emoji
                    if (bananas){
                        addSound = addSound + "&#x1f34c;" //extra banana
                    //else reroll addSound until its not banana
                    } else {
                        while (addSound == "&#x1f34c;"){
                            addSound = monkeySounds[Math.floor(Math.random() * monkeySounds.length)]
                        }
                    }
                    subText = subText + addSound  + " "
                    //increment the number of monkey sounds added
                    monkeyCount = monkeyCount + 1
                    //reset the wait counter
                    addedMonkey = 20
                } else {
                    //otherwise add shakespearean word
                    subText = subText + spears[Math.floor(Math.random() * spears.length)] + " "
                    //decrement our wait counter
                    addedMonkey = addedMonkey - 1
                }
                //increment the count of words in the paragraph
                wordCount = wordCount + 1
            }
            newText = newText + `<p class="paragraph-${i+1}"><span class="tabs"></span>${subText.charAt(0).toUpperCase() + subText.slice(1, -1)+"."}</p>`
        }
       // newText = subText;
        result.innerHTML = newText
    })
}
numPara.addEventListener('input', syncParas)
numParaRange.addEventListener('input', syncParas)