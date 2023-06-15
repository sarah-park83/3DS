const fs = require('fs')

const data = [
  {
    id: 1,
    word: 'jump',
    difficulty: 1,
  },
  {
    id: 2,
    word: 'code',
    difficulty: 1,
  },
  {
    id: 3,
    word: 'baby',
    difficulty: 1,
  },
  {
    id: 4,
    word: 'park',
    difficulty: 1,
  },
  {
    id: 5,
    word: 'open',
    difficulty: 1,
  },
  {
    id: 6,
    word: 'fish',
    difficulty: 1,
  },
  {
    id: 7,
    word: 'book',
    difficulty: 1,
  },
  {
    id: 8,
    word: 'rock',
    difficulty: 1,
  },
  {
    id: 9,
    word: 'drop',
    difficulty: 1,
  },
  {
    id: 10,
    word: 'tree',
    difficulty: 1,
  },
  {
    id: 11,
    word: 'blue',
    difficulty: 1,
  },
  {
    id: 12,
    word: 'time',
    difficulty: 1,
  },
  {
    id: 13,
    word: 'cake',
    difficulty: 1,
  },
  {
    id: 14,
    word: 'wave',
    difficulty: 1,
  },
  {
    id: 15,
    word: 'door',
    difficulty: 1,
  },
  {
    id: 16,
    word: 'city',
    difficulty: 1,
  },
  {
    id: 17,
    word: 'fire',
    difficulty: 1,
  },
  {
    id: 18,
    word: 'rain',
    difficulty: 1,
  },
  {
    id: 19,
    word: 'mind',
    difficulty: 1,
  },
  {
    id: 20,
    word: 'star',
    difficulty: 1,
  },
  {
    id: 21,
    word: 'moon',
    difficulty: 1,
  },
  {
    id: 22,
    word: 'work',
    difficulty: 1,
  },
  {
    id: 23,
    word: 'play',
    difficulty: 1,
  },
  {
    id: 24,
    word: 'cool',
    difficulty: 1,
  },
  {
    id: 25,
    word: 'home',
    difficulty: 1,
  },
  {
    id: 26,
    word: 'song',
    difficulty: 1,
  },
  {
    id: 27,
    word: 'test',
    difficulty: 1,
  },
  {
    id: 28,
    word: 'gift',
    difficulty: 1,
  },
  {
    id: 29,
    word: 'lock',
    difficulty: 1,
  },
  {
    id: 30,
    word: 'idea',
    difficulty: 1,
  },
  {
    id: 31,
    word: 'road',
    difficulty: 1,
  },
  {
    id: 32,
    word: 'hope',
    difficulty: 1,
  },
  {
    id: 33,
    word: 'bird',
    difficulty: 1,
  },
  {
    id: 34,
    word: 'game',
    difficulty: 1,
  },
  {
    id: 35,
    word: 'luck',
    difficulty: 1,
  },
  {
    id: 36,
    word: 'girl',
    difficulty: 1,
  },
  {
    id: 37,
    word: 'baby',
    difficulty: 1,
  },
  {
    id: 38,
    word: 'idea',
    difficulty: 1,
  },
  {
    id: 39,
    word: 'team',
    difficulty: 1,
  },
  {
    id: 40,
    word: 'dark',
    difficulty: 1,
  },
  {
    id: 41,
    word: 'snow',
    difficulty: 1,
  },
  {
    id: 42,
    word: 'zero',
    difficulty: 1,
  },
  {
    id: 43,
    word: 'wait',
    difficulty: 1,
  },
  {
    id: 44,
    word: 'zone',
    difficulty: 1,
  },
  {
    id: 45,
    word: 'true',
    difficulty: 1,
  },
  {
    id: 46,
    word: 'rich',
    difficulty: 1,
  },
  {
    id: 47,
    word: 'real',
    difficulty: 1,
  },
  {
    id: 48,
    word: 'park',
    difficulty: 1,
  },
  {
    id: 49,
    word: 'hard',
    difficulty: 1,
  },
  {
    id: 50,
    word: 'fall',
    difficulty: 1,
  },
  {
    id: 51,
    word: 'busy',
    difficulty: 1,
  },
  {
    id: 52,
    word: 'apple',
    difficulty: 1,
  },
  {
    id: 53,
    word: 'table',
    difficulty: 1,
  },
  {
    id: 54,
    word: 'music',
    difficulty: 1,
  },
  {
    id: 55,
    word: 'beach',
    difficulty: 1,
  },
  {
    id: 56,
    word: 'light',
    difficulty: 1,
  },
  {
    id: 57,
    word: 'hello',
    difficulty: 1,
  },
  {
    id: 58,
    word: 'pizza',
    difficulty: 1,
  },
  {
    id: 59,
    word: 'happy',
    difficulty: 1,
  },
  {
    id: 60,
    word: 'smile',
    difficulty: 1,
  },
  {
    id: 61,
    word: 'river',
    difficulty: 1,
  },
  {
    id: 62,
    word: 'phone',
    difficulty: 1,
  },
  {
    id: 63,
    word: 'ocean',
    difficulty: 1,
  },
  {
    id: 64,
    word: 'lucky',
    difficulty: 1,
  },
  {
    id: 65,
    word: 'dream',
    difficulty: 1,
  },
  {
    id: 66,
    word: 'cloud',
    difficulty: 1,
  },
  {
    id: 67,
    word: 'heart',
    difficulty: 1,
  },
  {
    id: 68,
    word: 'house',
    difficulty: 1,
  },
  {
    id: 69,
    word: 'space',
    difficulty: 1,
  },
  {
    id: 70,
    word: 'tiger',
    difficulty: 1,
  },
  {
    id: 71,
    word: 'night',
    difficulty: 1,
  },
  {
    id: 72,
    word: 'earth',
    difficulty: 1,
  },
  {
    id: 73,
    word: 'peace',
    difficulty: 1,
  },
  {
    id: 74,
    word: 'honey',
    difficulty: 1,
  },
  {
    id: 75,
    word: 'fairy',
    difficulty: 1,
  },
  {
    id: 76,
    word: 'magic',
    difficulty: 1,
  },
  {
    id: 77,
    word: 'paint',
    difficulty: 1,
  },
  {
    id: 78,
    word: 'wings',
    difficulty: 1,
  },
  {
    id: 79,
    word: 'grape',
    difficulty: 1,
  },
  {
    id: 80,
    word: 'sunny',
    difficulty: 1,
  },
  {
    id: 81,
    word: 'dream',
    difficulty: 1,
  },
  {
    id: 82,
    word: 'peace',
    difficulty: 1,
  },
  {
    id: 83,
    word: 'bread',
    difficulty: 1,
  },
  {
    id: 84,
    word: 'daisy',
    difficulty: 1,
  },
  {
    id: 85,
    word: 'sugar',
    difficulty: 1,
  },
  {
    id: 86,
    word: 'happy',
    difficulty: 1,
  },
  {
    id: 87,
    word: 'alive',
    difficulty: 1,
  },
  {
    id: 88,
    word: 'dance',
    difficulty: 1,
  },
  {
    id: 89,
    word: 'dream',
    difficulty: 1,
  },
  {
    id: 90,
    word: 'faith',
    difficulty: 1,
  },
  {
    id: 91,
    word: 'quiet',
    difficulty: 1,
  },
  {
    id: 92,
    word: 'smoke',
    difficulty: 1,
  },
  {
    id: 93,
    word: 'unity',
    difficulty: 1,
  },
  {
    id: 94,
    word: 'video',
    difficulty: 1,
  },
  {
    id: 95,
    word: 'water',
    difficulty: 1,
  },
  {
    id: 96,
    word: 'zebra',
    difficulty: 1,
  },
  {
    id: 97,
    word: 'wheat',
    difficulty: 1,
  },
  {
    id: 98,
    word: 'voice',
    difficulty: 1,
  },
  {
    id: 99,
    word: 'winds',
    difficulty: 1,
  },
  {
    id: 100,
    word: 'yacht',
    difficulty: 1,
  },
  {
    id: 101,
    word: 'honor',
    difficulty: 1,
  },
  {
    id: 102,
    word: 'grace',
    difficulty: 1,
  },
  {
    id: 103,
    word: 'banana',
    difficulty: 1,
  },
  {
    id: 104,
    word: 'purple',
    difficulty: 1,
  },
  {
    id: 105,
    word: 'dragon',
    difficulty: 1,
  },
  {
    id: 106,
    word: 'summer',
    difficulty: 1,
  },
  {
    id: 107,
    word: 'friend',
    difficulty: 1,
  },
  {
    id: 108,
    word: 'cookie',
    difficulty: 1,
  },
  {
    id: 109,
    word: 'flower',
    difficulty: 1,
  },
  {
    id: 110,
    word: 'bright',
    difficulty: 1,
  },
  {
    id: 111,
    word: 'rocket',
    difficulty: 1,
  },
  {
    id: 112,
    word: 'butter',
    difficulty: 1,
  },
  {
    id: 113,
    word: 'circle',
    difficulty: 1,
  },
  {
    id: 114,
    word: 'silver',
    difficulty: 1,
  },
  {
    id: 115,
    word: 'orange',
    difficulty: 1,
  },
  {
    id: 116,
    word: 'guitar',
    difficulty: 1,
  },
  {
    id: 117,
    word: 'sunset',
    difficulty: 1,
  },
  {
    id: 118,
    word: 'singer',
    difficulty: 1,
  },
  {
    id: 119,
    word: 'planet',
    difficulty: 1,
  },
  {
    id: 120,
    word: 'purple',
    difficulty: 1,
  },
  {
    id: 121,
    word: 'smooth',
    difficulty: 1,
  },
  {
    id: 122,
    word: 'coffee',
    difficulty: 1,
  },
  {
    id: 123,
    word: 'forest',
    difficulty: 1,
  },
  {
    id: 124,
    word: 'bridge',
    difficulty: 1,
  },
  {
    id: 125,
    word: 'school',
    difficulty: 1,
  },
  {
    id: 126,
    word: 'spirit',
    difficulty: 1,
  },
  {
    id: 127,
    word: 'camera',
    difficulty: 1,
  },
  {
    id: 128,
    word: 'winter',
    difficulty: 1,
  },
  {
    id: 129,
    word: 'piano',
    difficulty: 1,
  },
  {
    id: 130,
    word: 'spring',
    difficulty: 1,
  },
  {
    id: 131,
    word: 'beauty',
    difficulty: 1,
  },
  {
    id: 132,
    word: 'bottle',
    difficulty: 1,
  },
  {
    id: 133,
    word: 'follow',
    difficulty: 1,
  },
  {
    id: 134,
    word: 'sweety',
    difficulty: 1,
  },
  {
    id: 135,
    word: 'polish',
    difficulty: 1,
  },
  {
    id: 136,
    word: 'purple',
    difficulty: 1,
  },
  {
    id: 137,
    word: 'banana',
    difficulty: 1,
  },
  {
    id: 138,
    word: 'listen',
    difficulty: 1,
  },
  {
    id: 139,
    word: 'purple',
    difficulty: 1,
  },
  {
    id: 140,
    word: 'forest',
    difficulty: 1,
  },
  {
    id: 141,
    word: 'player',
    difficulty: 1,
  },
  {
    id: 142,
    word: 'soccer',
    difficulty: 1,
  },
  {
    id: 143,
    word: 'orange',
    difficulty: 1,
  },
  {
    id: 144,
    word: 'rocket',
    difficulty: 1,
  },
  {
    id: 145,
    word: 'friend',
    difficulty: 1,
  },
  {
    id: 146,
    word: 'wisdom',
    difficulty: 1,
  },
  {
    id: 147,
    word: 'flight',
    difficulty: 1,
  },
  {
    id: 148,
    word: 'nature',
    difficulty: 1,
  },
  {
    id: 149,
    word: 'purple',
    difficulty: 1,
  },
  {
    id: 150,
    word: 'summer',
    difficulty: 1,
  },
  {
    id: 151,
    word: 'jungle',
    difficulty: 1,
  },
  {
    id: 152,
    word: 'flavor',
    difficulty: 1,
  },
  {
    id: 153,
    word: 'planet',
    difficulty: 1,
  },
  {
    id: 154,
    word: 'bridge',
    difficulty: 1,
  },
  {
    id: 155,
    word: 'shallow',
    difficulty: 2,
  },
  {
    id: 156,
    word: 'passive',
    difficulty: 2,
  },
  {
    id: 157,
    word: 'barrier',
    difficulty: 2,
  },
  {
    id: 158,
    word: 'inflate',
    difficulty: 2,
  },
  {
    id: 159,
    word: 'healthy',
    difficulty: 2,
  },
  {
    id: 160,
    word: 'species',
    difficulty: 2,
  },
  {
    id: 161,
    word: 'testify',
    difficulty: 2,
  },
  {
    id: 162,
    word: 'perfume',
    difficulty: 2,
  },
  {
    id: 163,
    word: 'install',
    difficulty: 2,
  },
  {
    id: 164,
    word: 'indulge',
    difficulty: 2,
  },
  {
    id: 165,
    word: 'deserve',
    difficulty: 2,
  },
  {
    id: 166,
    word: 'compose',
    difficulty: 2,
  },
  {
    id: 167,
    word: 'despise',
    difficulty: 2,
  },
  {
    id: 168,
    word: 'provide',
    difficulty: 2,
  },
  {
    id: 169,
    word: 'predict',
    difficulty: 2,
  },
  {
    id: 170,
    word: 'promote',
    difficulty: 2,
  },
  {
    id: 171,
    word: 'century',
    difficulty: 2,
  },
  {
    id: 172,
    word: 'nervous',
    difficulty: 2,
  },
  {
    id: 173,
    word: 'stumble',
    difficulty: 2,
  },
  {
    id: 174,
    word: 'dilemma',
    difficulty: 2,
  },
  {
    id: 175,
    word: 'package',
    difficulty: 2,
  },
  {
    id: 176,
    word: 'surgeon',
    difficulty: 2,
  },
  {
    id: 177,
    word: 'recruit',
    difficulty: 2,
  },
  {
    id: 178,
    word: 'anxiety',
    difficulty: 2,
  },
  {
    id: 179,
    word: 'cabinet',
    difficulty: 2,
  },
  {
    id: 180,
    word: 'routine',
    difficulty: 2,
  },
  {
    id: 181,
    word: 'portion',
    difficulty: 2,
  },
  {
    id: 182,
    word: 'teacher',
    difficulty: 2,
  },
  {
    id: 183,
    word: 'prosper',
    difficulty: 2,
  },
  {
    id: 184,
    word: 'archive',
    difficulty: 2,
  },
  {
    id: 185,
    word: 'courage',
    difficulty: 2,
  },
  {
    id: 186,
    word: 'volcano',
    difficulty: 2,
  },
  {
    id: 187,
    word: 'wriggle',
    difficulty: 2,
  },
  {
    id: 188,
    word: 'control',
    difficulty: 2,
  },
  {
    id: 189,
    word: 'calorie',
    difficulty: 2,
  },
  {
    id: 190,
    word: 'apology',
    difficulty: 2,
  },
  {
    id: 191,
    word: 'husband',
    difficulty: 2,
  },
  {
    id: 192,
    word: 'reserve',
    difficulty: 2,
  },
  {
    id: 193,
    word: 'curtain',
    difficulty: 2,
  },
  {
    id: 194,
    word: 'dignity',
    difficulty: 2,
  },
  {
    id: 195,
    word: 'appoint',
    difficulty: 2,
  },
  {
    id: 196,
    word: 'embrace',
    difficulty: 2,
  },
  {
    id: 197,
    word: 'feature',
    difficulty: 2,
  },
  {
    id: 198,
    word: 'revenge',
    difficulty: 2,
  },
  {
    id: 199,
    word: 'biology',
    difficulty: 2,
  },
  {
    id: 200,
    word: 'capture',
    difficulty: 2,
  },
  {
    id: 201,
    word: 'dictate',
    difficulty: 2,
  },
  {
    id: 202,
    word: 'perfect',
    difficulty: 2,
  },
  {
    id: 203,
    word: 'enhance',
    difficulty: 2,
  },
  {
    id: 204,
    word: 'veteran',
    difficulty: 2,
  },
  {
    id: 205,
    word: 'strategy',
    difficulty: 2,
  },
  {
    id: 206,
    word: 'category',
    difficulty: 2,
  },
  {
    id: 207,
    word: 'challenge',
    difficulty: 2,
  },
  {
    id: 208,
    word: 'champion',
    difficulty: 2,
  },
  {
    id: 209,
    word: 'victory',
    difficulty: 2,
  },
  {
    id: 210,
    word: 'adventure',
    difficulty: 2,
  },
  {
    id: 211,
    word: 'questing',
    difficulty: 2,
  },
  {
    id: 212,
    word: 'puzzle',
    difficulty: 2,
  },
  {
    id: 213,
    word: 'solution',
    difficulty: 2,
  },
  {
    id: 214,
    word: 'exciting',
    difficulty: 2,
  },
  {
    id: 216,
    word: 'playful',
    difficulty: 2,
  },
  {
    id: 217,
    word: 'gameplay',
    difficulty: 2,
  },
  {
    id: 218,
    word: 'dungeon',
    difficulty: 2,
  },
  {
    id: 219,
    word: 'sandbox',
    difficulty: 2,
  },
  {
    id: 220,
    word: 'gambling',
    difficulty: 2,
  },
  {
    id: 222,
    word: 'strategy',
    difficulty: 2,
  },
  {
    id: 223,
    word: 'creative',
    difficulty: 2,
  },
  {
    id: 224,
    word: 'secretion',
    difficulty: 2,
  },
  {
    id: 225,
    word: 'entertain',
    difficulty: 2,
  },
  {
    id: 226,
    word: 'clearance',
    difficulty: 2,
  },
  {
    id: 227,
    word: 'advantage',
    difficulty: 2,
  },
  {
    id: 228,
    word: 'advertise',
    difficulty: 2,
  },
  {
    id: 229,
    word: 'reinforce',
    difficulty: 2,
  },
  {
    id: 230,
    word: 'sacrifice',
    difficulty: 2,
  },
  {
    id: 231,
    word: 'practical',
    difficulty: 2,
  },
  {
    id: 232,
    word: 'knowledge',
    difficulty: 2,
  },
  {
    id: 233,
    word: 'adventure',
    difficulty: 2,
  },
  {
    id: 234,
    word: 'rebellion',
    difficulty: 2,
  },
  {
    id: 235,
    word: 'departure',
    difficulty: 2,
  },
  {
    id: 236,
    word: 'landowner',
    difficulty: 2,
  },
  {
    id: 237,
    word: 'exemption',
    difficulty: 2,
  },
  {
    id: 238,
    word: 'exception',
    difficulty: 2,
  },
  {
    id: 239,
    word: 'quotation',
    difficulty: 2,
  },
  {
    id: 240,
    word: 'conductor',
    difficulty: 2,
  },
  {
    id: 241,
    word: 'champagne',
    difficulty: 2,
  },
  {
    id: 242,
    word: 'timetable',
    difficulty: 2,
  },
  {
    id: 243,
    word: 'nightmare',
    difficulty: 2,
  },
  {
    id: 244,
    word: 'tradition',
    difficulty: 2,
  },
  {
    id: 245,
    word: 'circulate',
    difficulty: 2,
  },
  {
    id: 246,
    word: 'mechanism',
    difficulty: 2,
  },
  {
    id: 247,
    word: 'bloodshed',
    difficulty: 2,
  },
  {
    id: 248,
    word: 'introduce',
    difficulty: 2,
  },
  {
    id: 249,
    word: 'recommend',
    difficulty: 2,
  },
  {
    id: 250,
    word: 'beginning',
    difficulty: 2,
  },
  {
    id: 251,
    word: 'neighbour',
    difficulty: 2,
  },
  {
    id: 252,
    word: 'technique',
    difficulty: 2,
  },
  {
    id: 253,
    word: 'foreigner',
    difficulty: 2,
  },
  {
    id: 254,
    word: 'guerrilla',
    difficulty: 2,
  },
  {
    id: 255,
    word: 'sensitive',
    difficulty: 2,
  },
  {
    id: 256,
    word: 'ambiguity',
    difficulty: 2,
  },
  {
    id: 257,
    word: 'coalition',
    difficulty: 2,
  },
  {
    id: 258,
    word: 'pollution',
    difficulty: 2,
  },
  {
    id: 259,
    word: 'ambiguous',
    difficulty: 2,
  },
  {
    id: 260,
    word: 'character',
    difficulty: 2,
  },
  {
    id: 261,
    word: 'radiation',
    difficulty: 2,
  },
  {
    id: 262,
    word: 'depressed',
    difficulty: 2,
  },
  {
    id: 263,
    word: 'precedent',
    difficulty: 2,
  },
  {
    id: 264,
    word: 'prosecute',
    difficulty: 2,
  },
  {
    id: 265,
    word: 'direction',
    difficulty: 2,
  },
  {
    id: 266,
    word: 'overwhelm',
    difficulty: 2,
  },
  {
    id: 267,
    word: 'highlight',
    difficulty: 2,
  },
  {
    id: 268,
    word: 'formulate',
    difficulty: 2,
  },
  {
    id: 269,
    word: 'isolation',
    difficulty: 2,
  },
  {
    id: 270,
    word: 'infection',
    difficulty: 2,
  },
  {
    id: 271,
    word: 'executive',
    difficulty: 2,
  },
  {
    id: 272,
    word: 'penetrate',
    difficulty: 2,
  },
  {
    id: 273,
    word: 'temporary',
    difficulty: 2,
  },
  {
    id: 273,
    word: 'supplementary',
    difficulty: 3,
  },
  {
    id: 274,
    word: 'uncertainty',
    difficulty: 3,
  },
  {
    id: 275,
    word: 'performance',
    difficulty: 3,
  },
  {
    id: 276,
    word: 'conservative',
    difficulty: 3,
  },
  {
    id: 277,
    word: 'requirement',
    difficulty: 3,
  },
  {
    id: 278,
    word: 'sympathetic',
    difficulty: 3,
  },
  {
    id: 279,
    word: 'anniversary',
    difficulty: 3,
  },
  {
    id: 280,
    word: 'manufacture',
    difficulty: 3,
  },
  {
    id: 281,
    word: 'respectable',
    difficulty: 3,
  },
  {
    id: 282,
    word: 'spontaneous',
    difficulty: 3,
  },
  {
    id: 283,
    word: 'spokesperson',
    difficulty: 3,
  },
  {
    id: 284,
    word: 'appointment',
    difficulty: 3,
  },
  {
    id: 285,
    word: 'concentration',
    difficulty: 3,
  },
  {
    id: 286,
    word: 'arrangement',
    difficulty: 3,
  },
  {
    id: 287,
    word: 'expenditure',
    difficulty: 3,
  },
  {
    id: 288,
    word: 'unfortunate',
    difficulty: 3,
  },
  {
    id: 289,
    word: 'hypothesize',
    difficulty: 3,
  },
  {
    id: 290,
    word: 'beneficiary',
    difficulty: 3,
  },
  {
    id: 291,
    word: 'entertainment',
    difficulty: 3,
  },
  {
    id: 292,
    word: 'observation',
    difficulty: 3,
  },
  {
    id: 293,
    word: 'distributor',
    difficulty: 3,
  },
  {
    id: 294,
    word: 'announcement',
    difficulty: 3,
  },
  {
    id: 295,
    word: 'exploration',
    difficulty: 3,
  },
  {
    id: 296,
    word: 'consideration',
    difficulty: 3,
  },
  {
    id: 297,
    word: 'mathematics',
    difficulty: 3,
  },
  {
    id: 298,
    word: 'astonishing',
    difficulty: 3,
  },
  {
    id: 299,
    word: 'discrimination',
    difficulty: 3,
  },
  {
    id: 300,
    word: 'anticipation',
    difficulty: 3,
  },
  {
    id: 301,
    word: 'conventional',
    difficulty: 3,
  },
  {
    id: 302,
    word: 'interference',
    difficulty: 3,
  },
  {
    id: 303,
    word: 'publication',
    difficulty: 3,
  },
  {
    id: 304,
    word: 'presidential',
    difficulty: 3,
  },
  {
    id: 305,
    word: 'institution',
    difficulty: 3,
  },
  {
    id: 306,
    word: 'recommendation',
    difficulty: 3,
  },
  {
    id: 307,
    word: 'disposition',
    difficulty: 3,
  },
  {
    id: 308,
    word: 'demonstrator',
    difficulty: 3,
  },
  {
    id: 309,
    word: 'implication',
    difficulty: 3,
  },
  {
    id: 310,
    word: 'comprehensive',
    difficulty: 3,
  },
  {
    id: 311,
    word: 'strikebreaker',
    difficulty: 3,
  },
  {
    id: 312,
    word: 'preparation',
    difficulty: 3,
  },
  {
    id: 313,
    word: 'cooperation',
    difficulty: 3,
  },
  {
    id: 314,
    word: 'architecture',
    difficulty: 3,
  },
  {
    id: 315,
    word: 'administration',
    difficulty: 3,
  },
  {
    id: 316,
    word: 'disappointment',
    difficulty: 3,
  },
  {
    id: 317,
    word: 'personality',
    difficulty: 3,
  },
  {
    id: 318,
    word: 'restoration',
    difficulty: 3,
  },
  {
    id: 319,
    word: 'contemporary',
    difficulty: 3,
  },
  {
    id: 320,
    word: 'coincidence',
    difficulty: 3,
  },
  {
    id: 321,
    word: 'contribution',
    difficulty: 3,
  },
  {
    id: 322,
    word: 'fashionable',
    difficulty: 3,
  },
  {
    id: 323,
    word: 'entertainment',
    difficulty: 3,
  },
  {
    id: 324,
    word: 'extravaganza',
    difficulty: 3,
  },
  {
    id: 325,
    word: 'achievement',
    difficulty: 3,
  },
  {
    id: 326,
    word: 'competition',
    difficulty: 3,
  },
  {
    id: 327,
    word: 'multiplayer',
    difficulty: 3,
  },
  {
    id: 328,
    word: 'masterpiece',
    difficulty: 3,
  },
  {
    id: 329,
    word: 'engrossing',
    difficulty: 3,
  },
  {
    id: 330,
    word: 'challenging',
    difficulty: 3,
  },
  {
    id: 331,
    word: 'enthusiastic',
    difficulty: 3,
  },
  {
    id: 332,
    word: 'immersive',
    difficulty: 3,
  },
  {
    id: 333,
    word: 'remarkable',
    difficulty: 3,
  },
  {
    id: 334,
    word: 'interactive',
    difficulty: 3,
  },
  {
    id: 335,
    word: 'spectacular',
    difficulty: 3,
  },
  {
    id: 336,
    word: 'enthralling',
    difficulty: 3,
  },
  {
    id: 337,
    word: 'unforgettable',
    difficulty: 3,
  },
  {
    id: 338,
    word: 'engagements',
    difficulty: 3,
  },
  {
    id: 339,
    word: 'exploration',
    difficulty: 3,
  },
  {
    id: 340,
    word: 'adventurous',
    difficulty: 3,
  },
  {
    id: 341,
    word: 'conquerable',
    difficulty: 3,
  },
  {
    id: 342,
    word: 'exhilarating',
    difficulty: 3,
  },
]

function removeArray(data) {
  return data.map((el, i) => {
    el.id = i + 1
    return el
  })
}

const newData = removeArray(data)

const jsonData = JSON.stringify(newData, null, 2)

fs.writeFile('words.json', jsonData, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('JSON done!')
  }
})
