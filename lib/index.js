"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomAdjAnimal = exports.randomAdjective = exports.randomAnimal = void 0;
const adj = [
    'Adorable',
    'Agreeable',
    'Alive',
    'Amused',
    'Angry',
    'Annoyed',
    'Annoying',
    'Anxious',
    'Arrogant',
    'Ashamed',
    'Awful',
    'Bad',
    'Beautiful',
    'Better',
    'Bloody',
    'Blushing',
    'Bored',
    'Brainy',
    'Brave',
    'Bright',
    'Busy',
    'Calm',
    'Careful',
    'Cautious',
    'Charming',
    'Cheerful',
    'Clean',
    'Clever',
    'Clumsy',
    'Colorful',
    'Combative',
    'Concerned',
    'Condemned',
    'Confused',
    'Crazy',
    'Creepy',
    'Crowded',
    'Cruel',
    'Curious',
    'Cute',
    'Dangerous',
    'Dark',
    'Dead',
    'Defeated',
    'Defiant',
    'Depressed',
    'Different',
    'Difficult',
    'Disgusted',
    'Dizzy',
    'Doubtful',
    'Drab',
    'Dull',
    'Eager',
    'Easy',
    'Elated',
    'Elegant',
    'Energetic',
    'Envious',
    'Evil',
    'Excited',
    'Expensive',
    'Fair',
    'Faithful',
    'Famous',
    'Fancy',
    'Fantastic',
    'Fierce',
    'Filthy',
    'Fine',
    'Foolish',
    'Fragile',
    'Frantic',
    'Friendly',
    'Funny',
    'Gentle',
    'Gifted',
    'Glamorous',
    'Gleaming',
    'Glorious',
    'Good',
    'Gorgeous',
    'Graceful',
    'Grieving',
    'Grotesque',
    'Grumpy',
    'Handsome',
    'Happy',
    'Healthy',
    'Helpful',
    'Helpless',
    'Hilarious',
    'Homeless',
    'Homely',
    'Horrible',
    'Hungry',
    'Hurt',
    'Ill',
    'Important',
    'Innocent',
    'Itchy',
    'Jealous',
    'Jolly',
    'Joyous',
    'Kind',
    'Lazy',
    'Light',
    'Lively',
    'Lonely',
    'Long',
    'Lovely',
    'Lucky',
    'Modern',
    'Nasty',
    'Naughty',
    'Nervous',
    'Nice',
    'Nutty',
    'Obedient',
    'Obnoxious',
    'Odd',
    'Panicky',
    'Perfect',
    'Pleasant',
    'Poor',
    'Powerful',
    'Precious',
    'Prickly',
    'Proud',
    'Putrid',
    'Puzzled',
    'Quaint',
    'Real',
    'Relieved',
    'Repulsive',
    'Rich',
    'Scary',
    'Selfish',
    'Shiny',
    'Shy',
    'Silly',
    'Sleepy',
    'Smiling',
    'Sore',
    'Sparkling',
    'Splendid',
    'Spotless',
    'Stormy',
    'Strange',
    'Stupid',
    'Super',
    'Talented',
    'Tame',
    'Tasty',
    'Tender',
    'Terrible',
    'Thankful',
    'Tired',
    'Tough',
    'Troubled',
    'Ugliest',
    'Ugly',
    'Unsightly',
    'Unusual',
    'Upset',
    'Uptight',
    'Vast',
    'Vivacious',
    'Wandering',
    'Weary',
    'Wicked',
    'Wide-eyed',
    'Wild',
    'Witty',
    'Worried',
    'Worrisome',
    'Wrong',
    'Zany',
    'Zealous',
];
const animal = [
    'Aardvark',
    'Aardwolf',
    'Abyssinian',
    'Addax',
    'Agouti',
    'Aidi',
    'Ainu',
    'Airedoodle',
    'Akbash',
    'Akita',
    'Alabai',
    'Albatross',
    'Albino',
    'Allosaurus',
    'Allosaurus',
    'Alpaca',
    'AlpineGoat',
    'Alusky',
    'Amberjack',
    'Anaconda',
    'Anchovies',
    'Angelfish',
    'Angelshark',
    'Anglerfish',
    'AngoraGoat',
    'Anhinga',
    'Ant',
    'Anteater',
    'Antelope',
    'Ape',
    'AppleMoth',
    'Arapaima',
    'Archerfish',
    'ArcticChar',
    'ArcticFox',
    'ArcticHare',
    'ArcticWolf',
    'Arctodus',
    'Armadillo',
    'Armyworm',
    'AsianCarp',
    'Asp',
    'AtlasMoth',
    'Aurochs',
    'Aussiedor',
    'Aussiepom',
    'Avocet',
    'Axolotl',
    'AyamCemani',
    'Azawakh',
    'Babirusa',
    'Baboon',
    'Badger',
    'Baiji',
    'BaldEagle',
    'Balinese',
    'BalkanLynx',
    'BallPython',
    'BambooRat',
    'BananaEel',
    'Bandicoot',
    'Barb',
    'Barbet',
    'BarkBeetle',
    'BarnOwl',
    'BarnSpider',
    'Barnacle',
    'Barosaurus',
    'Barracuda',
    'BarredOwl',
    'Barylambda',
    'BasenjiDog',
    'BasenjiMix',
    'Bass',
    'Bassador',
    'Bat',
    'Batfish',
    'Baya',
    'Beabull',
    'Beagador',
    'Beagle',
    'BeagleMix',
    'Beaglier',
    'Beago',
    'Bear',
    'Beaski',
    'Beauceron',
    'Beaver',
    'BedBugs',
    'Bee',
    'Beefalo',
    'Beetle',
    'Bergamasco',
    'BettaFish',
    'Bichir',
    'Bichpoo',
    'Bilby',
    'Binturong',
    'Bird',
    'BirdSnake',
    'Birman',
    'Bison',
    'BlackBass',
    'BlackMamba',
    'BlackWasp',
    'BlindSnake',
    'Blobfish',
    'Bloodhound',
    'Blowfly',
    'BlueIguana',
    'BlueJay',
    'BlueRacer',
    'BlueShark',
    'BlueTang',
    'BlueTit',
    'BlueWhale',
    'Bluefish',
    'Bluegill',
    'Boas',
    'Bobcat',
    'Bobolink',
    'BoerGoat',
    'Boerboel',
    'Boggle',
    'Boiga',
    'Bombay',
    'Bonefish',
    'Bongo',
    'BonitoFish',
    'Bonobo',
    'Booby',
    'Boomslang',
    'Borador',
    'Bordoodle',
    'Borkie',
    'Boskimo',
    'Bowfin',
    'BoxTurtle',
    'Boxachi',
    'Boxador',
    'BoxerDog',
    'BoxerMix',
    'Boxfish',
    'Boxsky',
    'Boxweiler',
    'Briard',
    'Brittany',
    'BrookTrout',
    'BrownBear',
    'BrownHyena',
    'BrownSnake',
    'Brug',
    'Budgerigar',
    'Buffalo',
    'BullShark',
    'BullTrout',
    'Bullboxer',
    'Bulldog',
    'BulldogMix',
    'Bullfrog',
    'Bullsnake',
    'Bumblebee',
    'Burmese',
    'BushBaby',
    'BushDog',
    'BushViper',
    'Butterfly',
    'CactusMoth',
    'CactusWren',
    'Caecilian',
    'Caiman',
    'Camel',
    'CanaanDog',
    'CanadaLynx',
    'CaneCorso',
    'CaneRat',
    'CaneSpider',
    'Cantil',
    'Canvasback',
    'CapeLion',
    'Capuchin',
    'Capybara',
    'Caracal',
    'Cardinal',
    'Caribou',
    'Carp',
    'Cascabel',
    'Cassowary',
    'Cat',
    'CatSnake',
    'Catfish',
    'CavaTzu',
    'Cavador',
    'Cavapoo',
    'CaveBear',
    'CaveLion',
    'Centipede',
    'Chameleon',
    'Chamois',
    'Chartreux',
    'Cheagle',
    'Cheetah',
    'ChiChi',
    'Chickadee',
    'Chicken',
    'Chigger',
    'Chihuahua',
    'Chimaera',
    'Chimpanzee',
    'Chinchilla',
    'Chinook',
    'Chipit',
    'Chipmunk',
    'Chipoo',
    'Chiton',
    'Chiweenie',
    'Chorkie',
    'ChowChow',
    'ChowPom',
    'Chusky',
    'Cicada',
    'Cichlid',
    'Clownfish',
    'Coati',
    'CobiaFish',
    'Cobras',
    'Cockalier',
    'Cockapoo',
    'Cockatiel',
    'Cockatoo',
    'Cockle',
    'Cockroach',
    'Codfish',
    'Coelacanth',
    'Collie',
    'CollieMix',
    'CometMoth',
    'CommonCarp',
    'CommonFrog',
    'CommonLoon',
    'CommonToad',
    'ConeSnail',
    'CongerEel',
    'CongoSnake',
    'Conure',
    'Copperhead',
    'Coral',
    'CoralSnake',
    'Corella',
    'Corgidor',
    'Corgipoo',
    'Corkie',
    'Cormorant',
    'CornRexCat',
    'CornSnake',
    'Coryphodon',
    'CouesDeer',
    'Cougar',
    'Cow',
    'Coyote',
    'Crab',
    'CrabSpider',
    'Crane',
    'Crayfish',
    'Cricket',
    'Crocodile',
    'CrossFox',
    'Crow',
    'CubanBoa',
    'Cuckoo',
    'Cuttlefish',
    'Dachsador',
    'Dachshund',
    'Daeodon',
    'Dalmador',
    'Dalmatian',
    'Damselfish',
    'Daniff',
    'Danios',
    'Daug',
    'DeathAdder',
    'Deer',
    'DeerMouse',
    'DeerTick',
    'DesertWolf',
    'DevonRex',
    'Dhole',
    'Dickcissel',
    'Dimetrodon',
    'Dingo',
    'Dinofelis',
    'Dinosaurs',
    'Diplodocus',
    'Diprotodon',
    'DireWolf',
    'DiscoClam',
    'Discus',
    'DivingDuck',
    'Dobsonfly',
    'Dodo',
    'Doedicurus',
    'Dog',
    'DogTick',
    'Dolphin',
    'Donkey',
    'Dorgi',
    'Dorkie',
    'Dormouse',
    'Douc',
    'Doxiepoo',
    'Doxle',
    'DragonEel',
    'Dragonfish',
    'Dragonfly',
    'Drever',
    'DrumFish',
    'Duck',
    'Dugong',
    'DungBeetle',
    'Dunker',
    'Dunnock',
    'DuskyShark',
    'DwarfBoa',
    'Eagle',
    'EagleRay',
    'EaredGrebe',
    'Earthworm',
    'Earwig',
    'Echidna',
    'EdibleFrog',
    'Eel',
    'Eelcatfish',
    'Eelpout',
    'Egret',
    'Eider',
    'Eland',
    'Elephant',
    'ElfOwl',
    'Elk',
    'EmberTetra',
    'Emu',
    'Ermine',
    'Eryops',
    'Escolar',
    'EskimoDog',
    'Eskipoo',
    'Eurasier',
    'Eurypterus',
    'EveningBat',
    'Falcon',
    'Fallowdeer',
    'FalseCobra',
    'FancyMouse',
    'Fangtooth',
    'Feist',
    'FennecFox',
    'Ferret',
    'FinWhale',
    'Finch',
    'FireEel',
    'Firefly',
    'Fish',
    'Fisher',
    'FishingCat',
    'Flamingo',
    'Flea',
    'FleaBeetle',
    'FloridaGar',
    'Flounder',
    'FlukeFish',
    'Fly',
    'Flycatcher',
    'FlyingFish',
    'Fossa',
    'Fox',
    'FoxSnakes',
    'FoxTerrier',
    'FrenchLop',
    'Frenchton',
    'Frengle',
    'Frog',
    'Frogfish',
    'Frug',
    'FruitBat',
    'FruitFly',
    'FurSeal',
    'FurrowBee',
    'Gadwall',
    'Gar',
    'GardenEel',
    'Gastornis',
    'Gazelle',
    'Gecko',
    'Genet',
    'Gerbil',
    'Gharial',
    'GhostCrab',
    'GiantClam',
    'GiantWeta',
    'Gibbon',
    'Giraffe',
    'GlassFrog',
    'Glechon',
    'Glowworm',
    'Gnat',
    'Goat',
    'Goberian',
    'GobyFish',
    'Goldador',
    'Goldcrest',
    'GoldenDox',
    'GoldenMole',
    'Goldfish',
    'Gollie',
    'Goose',
    'Gopher',
    'Goral',
    'Gorilla',
    'Goshawk',
    'Gourami',
    'GrassCarp',
    'GrassSnake',
    'GrayFox',
    'GreatDane',
    'GreatEgret',
    'Grebe',
    'GreenAnole',
    'GreenFrog',
    'GreenHeron',
    'GreenMamba',
    'GreenSnake',
    'GreyHeron',
    'GreySeal',
    'Greyhound',
    'Groundhog',
    'Grouper',
    'Grouse',
    'Grunion',
    'GuineaFowl',
    'GuineaPig',
    'GulperEel',
    'Guppy',
    'GypsyMoth',
    'HabuSnake',
    'Haddock',
    'Hagfish',
    'Halibut',
    'Hamster',
    'HarborSeal',
    'Hare',
    'HarpSeal',
    'HarpyEagle',
    'Harrier',
    'Hartebeest',
    'Havamalt',
    'Havanese',
    'Havapoo',
    'Havashire',
    'Havashu',
    'Hawk',
    'Hedgehog',
    'Hellbender',
    'HermitCrab',
    'Heron',
    'Herring',
    'Himalayan',
    'HoaryBat',
    'HoboSpider',
    'Hogfish',
    'Hokkaido',
    'HoneyBee',
    'HoodedSeal',
    'Hoopoe',
    'Horgi',
    'HornShark',
    'Hornbill',
    'Hornet',
    'Horse',
    'Horsefly',
    'HouseFinch',
    'Housewren',
    'Housefly',
    'Hovasaurus',
    'Hovawart',
    'Human',
    'Huntaway',
    'Huskador',
    'Huskita',
    'Husky',
    'HuskyJack',
    'Hyaenodon',
    'Hyena',
    'Ibex',
    'Ibis',
    'Icadyptes',
    'Iguana',
    'Iguanodon',
    'Impala',
    'Inchworm',
    'Indri',
    'Insect',
    'Insects',
    'IoMoth',
    'IrishElk',
    'IvyBee',
    'Jabiru',
    'Jacana',
    'Jackabee',
    'Jackal',
    'Jackdaw',
    'Jackrabbit',
    'Jaguar',
    'Javanese',
    'Jellyfish',
    'Jerboa',
    'JohnDory',
    'JonahCrab',
    'JoroSpider',
    'Junglefowl',
    'Kagu',
    'KaiKen',
    'Kakapo',
    'Kangaroo',
    'Katydid',
    'Kaua’i‘Ō‘ō',
    'Kea',
    'Keagle',
    'Keelback',
    'Keeshond',
    'Kestrel',
    'KetaSalmon',
    'KeyDeer',
    'KhaoManee',
    'Kiang',
    'KikoGoat',
    'Killdeer',
    'Killifish',
    'KinderGoat',
    'KingCobra',
    'KingCrab',
    'KingEider',
    'KingQuail',
    'KingSalmon',
    'KingSnake',
    'Kingfisher',
    'Kingklip',
    'Kinkajou',
    'Kishu',
    'KitFox',
    'Kiwi',
    'Knifefish',
    'Koala',
    'KodiakBear',
    'Kodkod',
    'KoiFish',
    'Komondor',
    'Koolie',
    'Kouprey',
    'Kowari',
    'Krait',
    'Krill',
    'Kudu',
    'KudzuBug',
    'Kuvasz',
    'Labahoula',
    'Labmaraner',
    'Labrabull',
    'Labradane',
    'Labrottie',
    'LaceBug',
    'Ladybug',
    'Ladyfish',
    'LakeTrout',
    'Lamprey',
    'Lancetfish',
    'Leech',
    'Lemming',
    'LemonShark',
    'Lemur',
    'Leonberger',
    'Leopard',
    'LeopardCat',
    'LhasaApso',
    'Lhasapoo',
    'Liger',
    'Limpet',
    'Linnet',
    'Lion',
    'Lionfish',
    'Livyatan',
    'Lizard',
    'Lizardfish',
    'Llama',
    'Loach',
    'Lobster',
    'Locust',
    'Lorikeet',
    'Loris',
    'Lowchen',
    'Lumpfish',
    'LunaMoth',
    'Lungfish',
    'Lurcher',
    'LykoiCat',
    'Lynx',
    'Lyrebird',
    'Macaque',
    'Macaw',
    'MadoraMoth',
    'Maggot',
    'Magpie',
    'MahiMahi',
    'Maiasaura',
    'MaineCoon',
    'MalShi',
    'Malchi',
    'Mallard',
    'Malteagle',
    'Maltese',
    'MalteseMix',
    'Maltipom',
    'Maltipoo',
    'Mamba',
    'Manatee',
    'Mandrill',
    'ManedWolf',
    'MantaRay',
    'MarbleFox',
    'Margay',
    'MarineToad',
    'Markhor',
    'Marmoset',
    'Marmot',
    'MarshFrog',
    'MasonBee',
    'Massasauga',
    'Mastador',
    'Mastiff',
    'MastiffMix',
    'Mauzer',
    'MayBeetle',
    'Mayfly',
    'Meagle',
    'Mealybug',
    'Meerkat',
    'Megalania',
    'Megalodon',
    'Meganeura',
    'Meiolania',
    'Merganser',
    'Miki',
    'MilkSnake',
    'Milkfish',
    'Millipede',
    'MiniLop',
    'Mink',
    'MinkeWhale',
    'Mojarra',
    'Molamola',
    'Mole',
    'MoleCrab',
    'MoleSnake',
    'Mollusk',
    'Molly',
    'Mongoose',
    'Mongrel',
    'Monkey',
    'Monkfish',
    'Moorhen',
    'Moose',
    'MorayEel',
    'Morkie',
    'Mosasaurus',
    'Mosquito',
    'Moth',
    'Mouse',
    'MudSnake',
    'Mudi',
    'Mudpuppy',
    'Mudskipper',
    'Mule',
    'MuleDeer',
    'MulgaSnake',
    'MulletFish',
    'Muntjac',
    'MuskDeer',
    'Muskox',
    'Muskrat',
    'MynaBird',
    'Nabarlek',
    'Naegleria',
    'Narwhal',
    'Natterjack',
    'Nautilus',
    'Nebelung',
    'Needlefish',
    'Nematode',
    'NeonTetra',
    'Newfypoo',
    'Newt',
    'NightAdder',
    'NightHeron',
    'NightSnake',
    'Nightjar',
    'NilePerch',
    'Nilgai',
    'NoSeeUms',
    'NorwayRat',
    'NubianGoat',
    'Nudibranch',
    'Numbat',
    'Nuralagus',
    'NurseShark',
    'NutWeevil',
    'Nuthatch',
    'Nutria',
    'Nyala',
    'OakToad',
    'Oarfish',
    'OceanPerch',
    'OceanPout',
    'Ocelot',
    'Octopus',
    'Oilfish',
    'Okapi',
    'Olingo',
    'Olm',
    'Onager',
    'Opabinia',
    'Opah',
    'Opaleye',
    'Opossum',
    'Orangutan',
    'OrbWeaver',
    'Oribi',
    'OscarFish',
    'Osprey',
    'Ostracod',
    'Ostrich',
    'Otter',
    'Otterhound',
    'Ovenbird',
    'Oviraptor',
    'Owl',
    'Owlfly',
    'Ox',
    'Oxpecker',
    'Oyster',
    'OzarkBass',
    'Paddlefish',
    'Pademelon',
    'Palaeophis',
    'PalmRat',
    'Pangolin',
    'Panther',
    'Papillon',
    'Parakeet',
    'Parrot',
    'Parrotfish',
    'Parrotlet',
    'Partridge',
    'PeaPuffer',
    'Peacock',
    'Peagle',
    'Peekapoo',
    'Pekingese',
    'Pelagornis',
    'Pelican',
    'Penguin',
    'PerchFish',
    'Persian',
    'Pheasant',
    'Phytosaurs',
    'Pig',
    'Pigeon',
    'Pika',
    'PikeFish',
    'PineBeetle',
    'PineMarten',
    'PineSiskin',
    'PineSnake',
    'PineSnake',
    'Pinfish',
    'PinkSalmon',
    'PipeSnake',
    'Pipefish',
    'Piranha',
    'PitBull',
    'PitViper',
    'Pitador',
    'Pitsky',
    'Platypus',
    'Plesiosaur',
    'Pliosaur',
    'Pointer',
    'PointerMix',
    'PolarBear',
    'Polecat',
    'Pomapoo',
    'Pomchi',
    'Pomeagle',
    'Pomeranian',
    'Pomsky',
    'PondSkater',
    'Poochon',
    'Poodle',
    'Poogle',
    'PoolFrog',
    'Porcupine',
    'Possum',
    'Potoo',
    'Potoroo',
    'PrairieDog',
    'Prawn',
    'Pronghorn',
    'Pteranodon',
    'PuffAdder',
    'Pufferfish',
    'Puffin',
    'Pug',
    'PugMix',
    'Pugapoo',
    'Puggle',
    'Pugshire',
    'Puli',
    'Puma',
    'Pumi',
    'PussMoth',
    'PygmyShark',
    'PygoraGoat',
    'Pyrador',
    'Pyredoodle',
    'Pyrosome',
    'Python',
    'Quagga',
    'QuahogClam',
    'Quail',
    'QueenSnake',
    'Quetzal',
    'Quokka',
    'Quoll',
    'Rabbit',
    'Raccoon',
    'RaccoonDog',
    'RacerSnake',
    'Ragamuffin',
    'Ragdoll',
    'Raggle',
    'RainbowBoa',
    'Rat',
    'RatSnakes',
    'RatTerrier',
    'RedAphids',
    'RedDeer',
    'RedFinch',
    'RedFox',
    'RedKite',
    'RedPanda',
    'RedTailBoa',
    'RedWolf',
    'Redstart',
    'ReefShark',
    'Reindeer',
    'RexRabbit',
    'Rhea',
    'RhinoViper',
    'Rhinoceros',
    'RibbonEel',
    'RiverOtter',
    'Roadrunner',
    'Robin',
    'RockBass',
    'RockCrab',
    'RockHyrax',
    'RockPython',
    'Rockfish',
    'Rodents',
    'RoeDeer',
    'Rooster',
    'RootAphids',
    'RosyBoa',
    'Rotterman',
    'Rottle',
    'Rottsky',
    'Rottweiler',
    'RoveBeetle',
    'RubberBoa',
    'RuddyDuck',
    'SaanenGoat',
    'Sable',
    'Saiga',
    'Sailfish',
    'Salamander',
    'Salmon',
    'Saluki',
    'Sambar',
    'Samoyed',
    'SandCat',
    'SandCrab',
    'SandDollar',
    'SandLizard',
    'SandViper',
    'Sandpiper',
    'Sandworm',
    'Saola',
    'Sapsali',
    'Sardines',
    'SarusCrane',
    'Sauropoda',
    'Sauropoda',
    'SavuPython',
    'Sawfish',
    'Scallops',
    'Schipperke',
    'Schneagle',
    'Schnoodle',
    'Scorpion',
    'Sculpin',
    'SeaAnemone',
    'SeaBass',
    'SeaDragon',
    'SeaEagle',
    'SeaLion',
    'SeaOtter',
    'SeaRoach',
    'SeaSlug',
    'SeaSnake',
    'SeaSpider',
    'SeaSquirt',
    'SeaTrout',
    'SeaTurtle',
    'SeaUrchin',
    'Seagull',
    'Seahorse',
    'Seal',
    'SeiWhale',
    'Serval',
    'Seymouria',
    'Shark',
    'Sheep',
    'Shepkita',
    'Shepweiler',
    'ShibaInu',
    'Shichi',
    'ShihPoo',
    'ShihTzu',
    'ShihTzuMix',
    'Shikoku',
    'Shiranian',
    'Shollie',
    'Shrew',
    'Shrimp',
    'Siamese',
    'Siberian',
    'Siberpoo',
    'Sidewinder',
    'SikaDeer',
    'SilkyShark',
    'Simbakubwa',
    'SkateFish',
    'Skua',
    'Skunk',
    'Sloth',
    'SlowWorm',
    'Slug',
    'Snail',
    'Snailfish',
    'Snake',
    'SnookFish',
    'Snorkie',
    'SnowCrab',
    'SnowGoose',
    'Snowshoe',
    'SnowyOwl',
    'Somali',
    'SongThrush',
    'Spalax',
    'Spanador',
    'Sparrow',
    'SpermWhale',
    'Sphynx',
    'Spider',
    'SpiderWasp',
    'SpixsMacaw',
    'Sponge',
    'SpongyMoth',
    'SpongyMoth',
    'SpottedGar',
    'Springador',
    'Springbok',
    'SquashBee',
    'Squid',
    'Squirrel',
    'Stabyhoun',
    'StagBeetle',
    'Starfish',
    'Stingray',
    'Stoat',
    'StoneCrab',
    'Stonechat',
    'Stonefish',
    'Stork',
    'Sturgeon',
    'Suchomimus',
    'Suckerfish',
    'SunBear',
    'Superworm',
    'SwaiFish',
    'Swallow',
    'Swan',
    'Swordfish',
    'TaimenFish',
    'Taipan',
    'Takin',
    'Tamarin',
    'Tamaskan',
    'Tang',
    'Tapir',
    'Tarantula',
    'Tarpon',
    'Tarsier',
    'TawnyOwl',
    'Tenrec',
    'Termite',
    'Terrier',
    'TerrorBird',
    'Tetra',
    'Theropod',
    'Thrush',
    'Thylacoleo',
    'TibetanFox',
    'Tick',
    'Tiffany',
    'Tiger',
    'TigerMoth',
    'TigerShark',
    'Tigersnake',
    'TigerTrout',
    'Tiktaalik',
    'Titanoboa',
    'Titanosaur',
    'Toadfish',
    'TokayGecko',
    'Torkie',
    'Tornjak',
    'Tortoise',
    'Tosa',
    'Toucan',
    'Towhee',
    'Toxodon',
    'ToyPoodle',
    'TreeFrog',
    'TreeSnake',
    'TreeViper',
    'Treehopper',
    'Troodon',
    'Tropicbird',
    'Trout',
    'TsetseFly',
    'Tuatara',
    'Tuna',
    'TundraSwan',
    'Turaco',
    'Turkey',
    'Turnspit',
    'TurtleFrog',
    'Turtles',
    'TwigSnake',
    'Tylosaurus',
    'Uakari',
    'Uguisu',
    'Unau',
    'Uralowl',
    'Urial',
    'Uromastyx',
    'UrutuSnake',
    'Utonagan',
    'VampireBat',
    'Vaquita',
    'Veery',
    'Vegavis',
    'Vicuña',
    'VineSnake',
    'Vinegaroon',
    'Viper',
    'ViperBoa',
    'ViperShark',
    'Viperfish',
    'Vizsla',
    'Vole',
    'Vulture',
    'WahooFish',
    'Waimanu',
    'Wallaby',
    'Walrus',
    'Warbler',
    'Warthog',
    'Wasp',
    'WaterBug',
    'WaterVole',
    'Waterbuck',
    'WaxMoth',
    'Weasel',
    'WeaverBird',
    'Weimaraner',
    'WelshCorgi',
    'Westiepoo',
    'WhaleShark',
    'Whimbrel',
    'Whinchat',
    'Whippet',
    'WhiteBass',
    'WhiteShark',
    'WhiteTiger',
    'Whiting',
    'Whoodle',
    'WildBoar',
    'Wildebeest',
    'WinterMoth',
    'Wiwaxia',
    'Wolf',
    'WolfEel',
    'WolfSnake',
    'WolfSpider',
    'Wolffish',
    'Wolverine',
    'WomaPython',
    'Wombat',
    'WoodBison',
    'WoodDuck',
    'WoodFrog',
    'WoodTick',
    'WoodTurtle',
    'Woodlouse',
    'Woodpecker',
    'Woodrat',
    'Worm',
    'WormSnake',
    'Wrasse',
    'Wryneck',
    'Xeme',
    'Xerus',
    'Xiaosaurus',
    'Xiaotingia',
    'Yabby',
    'Yak',
    'Yarara',
    'YellowBass',
    'YellowTang',
    'YetiCrab',
    'Yoranian',
    'Yorkiepoo',
    'Zebra',
    'ZebraFinch',
    'ZebraPleco',
    'ZebraShark',
    'ZebraSnake',
    'Zebrafish',
    'Zebu',
    'Zokor',
    'Zonkey',
    'Zorse',
    'Zuchon',
];
const adjSize = adj.length;
const animalSize = animal.length;
function randomAnimal(options = {}) {
    var _a;
    (_a = options.maxLength) !== null && _a !== void 0 ? _a : (options.maxLength = Infinity);
    let randomAnimal;
    while (true) {
        randomAnimal = animal[getRandom(animalSize)];
        if (randomAnimal.length > options.maxLength)
            continue;
        return randomAnimal;
    }
}
exports.randomAnimal = randomAnimal;
function randomAdjective(options = {}) {
    var _a;
    (_a = options.maxLength) !== null && _a !== void 0 ? _a : (options.maxLength = Infinity);
    let randomAdjective;
    while (true) {
        randomAdjective = adj[getRandom(adjSize)];
        if (randomAdjective.length > options.maxLength)
            continue;
        return randomAdjective;
    }
}
exports.randomAdjective = randomAdjective;
function randomAdjAnimal(options = {}) {
    var _a, _b;
    (_a = options.maxLength) !== null && _a !== void 0 ? _a : (options.maxLength = Infinity);
    (_b = options.spacing) !== null && _b !== void 0 ? _b : (options.spacing = false);
    let randomAdj;
    let randomAnimal;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        randomAdj = adj[getRandom(adjSize)];
        randomAnimal = animal[getRandom(animalSize)];
        const size = randomAdj.length +
            randomAnimal.length +
            (options.spacing ? 1 : 0);
        if (size > options.maxLength)
            continue;
        return options.spacing
            ? randomAdj + ' ' + randomAnimal
            : randomAdj + randomAnimal;
    }
}
exports.randomAdjAnimal = randomAdjAnimal;
function getRandom(size) {
    return Math.floor(Math.random() * size);
}
//# sourceMappingURL=index.js.map