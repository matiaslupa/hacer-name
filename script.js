let hackerName = {
  firstName: [
    "SH4DOW",
    "CHIEF",
    "CYBER",
    "M4STER",
    "PRIV4TE",
    "NULL",
    "GENERAL",
    "ICE",
    "TOXIC",
    "CRASH",
    "STEALPH",
    "C4PTAIN",
    "UBER",
    "GRAY",
    "MR.",
    "TROOL",
    "BLACK",
    "ROGUE",
    "NINJA",
    "LIQUID",
    "TRUE",
    "THE",
    "H4CK",
    "N3TWORK",
    "FIRE",
    "ZERO",
    "ALIEN",
    "TH0R",
  ],
  lastName: [
    "BET4",
    "4NGEL",
    "WIRE",
    "PL4AGUE",
    "SKELETON",
    "B4ARCODE",
    "DESTROYER",
    "FRE4K",
    "BOT",
    "X",
    "HYDRA",
    "BYTE",
    "PH4NTOM",
    "DELTA",
    "NIGTH",
    "CRACK",
    "SHARK",
    "ZERO",
    "ROOT",
    "ANTRAX",
    "VIRUS",
    "SILENCE",
    "SAINT",
    "L3G3ND",
    "OV3RDRIVE",
    "OMICRON",
    "S3RP37T",
    "M3M0RY",
    "M3M3N70",
    "SH4D0W",
    "4L4K4Z4M",
    "ECS7A5Y",
    "R0B0T",
  ],
  coolNumbers: [
    "0,5",
    "2",
    "3",
    "5",
    "007",
    "11",
    "13",
    "17",
    "19",
    "23",
    "29",
    "31",
    "37",
    "41",
    "43",
    "47",
    "53",
    "59",
    "61",
    "67",
    "08",
    "π",
    "00",
    "e",
    "2000",
    "9000",
    "69",
    "2.0",
  ],
};

const hackerGenerator = () => {
  let firstName =
    hackerName.firstName[
      Math.floor(Math.random() * hackerName.firstName.length)
    ];

  let lastName =
    hackerName.lastName[Math.floor(Math.random() * hackerName.lastName.length)];

  let coolNumber =
    hackerName.coolNumbers[
      Math.floor(Math.random() * hackerName.coolNumbers.length)
    ];

  return `Your hacker name is: ${firstName} ${lastName} ${coolNumber}`;
};
git;
console.log(hackerGenerator());
