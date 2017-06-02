(function(){
  angular
    .module('quizApp')
    .factory('DataService', DataFactory);

    function DataFactory(){
      var dataObj = {
        mountainData: mountainData,
        quizQuestions: quizQuestions,
        correctAnswers: correctAnswers
      }

      return dataObj;
    }

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
    var quizQuestions  = [
        {
            type: "text",
            text: "Which is the 5th highest mountain in the world?",
            possibilities: [
                {
                    answer: "Kanchenjunga"
                },
                {
                    answer: "Makalu"
                },
                {
                    answer: "Lotse"
                },
                {
                    answer: "Dhaulagiri"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which mountain was climbed on 1960 by a Swiss/Austrian/Nepali expedition?",
            possibilities: [
                {
                    answer: "Kanchenjunga"
                },
                {
                    answer: "Annapurna"
                },
                {
                    answer: "Dhaulagiri"
                },
                {
                    answer: "Manaslu"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which one of these is known as Mount Everest",
            possibilities: [
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sunrise%2C_Manaslu.jpg"
                },
                {
                    answer: "http://cdn.c.photoshelter.com/img-get2/I0000nzpMCMh3NGo/fit=1000x750/EB-EVEREST-03454.jpg"
                },
                {
                    answer: "http://www.himalayanglacier.it/wp-content/gallery/annapurna-base-camp/Lofty-mountains-view-from-Annapurna-base-camp_shutterstock_2557550.jpg"
                },
                {
                    answer: "http://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/mount-everest-556908.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Annapurna Mountain?",
            possibilities: [
                {
                    answer: "http://www.himalayanglacier.it/wp-content/gallery/annapurna-base-camp/Lofty-mountains-view-from-Annapurna-base-camp_shutterstock_2557550.jpg"
                },
                {
                    answer: "http://images.summitpost.org/original/257166.jpg"
                },
                {
                    answer: "http://images.summitpost.org/original/43278.jpg"
                },
                {
                    answer: "http://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/mount-everest-556908.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does Manaslu Mountain Lies?",
            possibilities: [
                {
                    answer: "Khumbu, Nepal"
                },
                {
                    answer: "Annapurna Range"
                },
                {
                    answer: "Gorkha District, Nepal"
                },
                {
                    answer: "Taplejung, Nepal"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the height of Makalu?",
            possibilities: [
                {
                    answer: "8,485 m."
                },
                {
                    answer: "8,516 m."
                },
                {
                    answer: "8,167 m."
                },
                {
                    answer: "8,091 m"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the mountain partly lies in Sikkim, India as well?",
            possibilities: [
                {
                    answer: "Lhotse"
                },
                {
                    answer: "Dhaulagiri"
                },
                {
                    answer: "Cho Oyu"
                },
                {
                    answer: "Kanchenjunga"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these mountain is also known as Chomolungma in China?",
            possibilities: [
                {
                    answer: "http://www.himalayanglacier.it/wp-content/gallery/annapurna-base-camp/Lofty-mountains-view-from-Annapurna-base-camp_shutterstock_2557550.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sunrise%2C_Manaslu.jpg"
                },
                {
                    answer: "http://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/mount-everest-556908.jpg"
                },
                {
                    answer: "http://www.himalayannepaltrek.com/files/groups/Kanchenjunga-Trekking.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is world's third highest mountain?",
            possibilities: [
                {
                    answer: "Kangchenjunga"
                },
                {
                    answer: "Lhotse"
                },
                {
                    answer: "Manaslu"
                },
                {
                    answer: "Annapurna"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these mountain was first ascended in 3 June 1950 Maurice Herzog and Louis Lachenal?",
            possibilities: [
                {
                    answer: "Makalu"
                },
                {
                    answer: "Cho Oyu"
                },
                {
                    answer: "Manaslu"
                },
                {
                    answer: "Annapurna"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var mountainData = [
        {
            type: "Mount Everest",
            image_url: "http://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/mount-everest-556908.jpg",
            locations: "Solukhumbu District, Sagarmatha Zone, Nepal",
            elevation: "8,848 m.",
            ascent: "29 May 1953 Edmund Hillary and Tenzing Norgay",
            prominence: "Earth's highest from sea level",
            description: "Mount Everest, also known in Nepal as Sagarmāthā and in China as Chomolungma, is Earth's highest mountain. Its peak is 8,848 metres (29,029 ft) above sea level. Mount Everest is in the Mahalangur Range.[8][9] The international border between China (Tibet Autonomous Region) and Nepal runs across Everest's summit point. Its massif includes neighbouring peaks Lhotse, 8,516 m (27,940 ft); Nuptse, 7,855 m (25,771 ft), and Changtse, 7,580 m (24,870 ft)."
        },
        {
            type: "Kangchenjunga",
            image_url: "http://www.himalayannepaltrek.com/files/groups/Kanchenjunga-Trekking.jpg",
            locations: "Taplejung District, Mechi Zone, Nepal",
            elevation: "8,586 m.",
            ascent: "25 May 1955 by Joe Brown and George Band",
            prominence: "3rd highest",
            description: "Kangchenjunga (Nepali: कञ्चनजङ्घा; Hindi: कंचनजंघा; Sikkimese: ཁང་ཅེན་ཛོཾག་), also spelled Kanchenjunga, is the third highest mountain in the world, and lies partly in Nepal and partly in Sikkim, India.[3] It rises with an elevation of 8,586 m (28,169 ft) in a section of the Himalayas called Kangchenjunga Himal that is limited in the west by the Tamur River, in the north by the Lhonak Chu and Jongsang La, and in the east by the Teesta River."
        },
        {
            type: "Lhotse",
            image_url: "http://cdn.c.photoshelter.com/img-get2/I0000nzpMCMh3NGo/fit=1000x750/EB-EVEREST-03454.jpg",
            locations: "Khumbu, Nepal",
            elevation: "8,516 m.",
            ascent: "May 18, 1956 Fritz Luchsinger, Ernst Reiss",
            prominence: "4th highest",
            description: "Lhotse (Nepali: ल्होत्से; Tibetan: ལྷོ་རྩེ) is the fourth highest mountain in the world at 8,516 metres (27,940 ft), after Mount Everest, K2, and Kangchenjunga. Part of the Everest massif, Lhotse is connected to the latter peak via the South Col. Lhotse means “South Peak” in Tibetan. In addition to the main summit at 8,516 metres (27,940 ft) above sea level, the mountain comprises the smaller peaks Lhotse Middle (East) at 8,414 m (27,605 ft), and Lhotse Shar at 8,383 m (27,503 ft). The summit is on the border between the Tibet region of China and the Khumbu region of Nepal."
        },
        {
            type: "Makalu",
            image_url: "http://images.summitpost.org/original/43278.jpg",
            locations: "Khumbu, Nepal",
            elevation: "8,485 m.",
            ascent: "May 15, 1955 by Lionel Terray and Jean Couzy",
            prominence: "5th  Highest",
            description: "Makalu is the fifth highest mountain in the world at 8,485 metres (27,838 ft). It is located in the Mahalangur Himalayas 19 km (12 mi) southeast of Mount Everest, on the border between Nepal and China. One of the eight-thousanders, Makalu is an isolated peak whose shape is a four-sided pyramid. Makalu has two notable subsidiary peaks. Kangchungtse, or Makalu II (7,678 m) lies about 3 km (2 mi) north-northwest of the main summit. Rising about 5 km (3.1 mi) north-northeast of the main summit across a broad plateau, and connected to Kangchungtse by a narrow, 7,200 m saddle, is Chomo Lonzo (7,804 m)."
        },
        {
            type: "Cho Oyu",
            image_url: "http://images.summitpost.org/original/257166.jpg",
            locations: "Nepal–China (Tibet)",
            elevation: "8,188 m.",
            ascent: "October 19, 1954 by Herbert Tichy, Joseph Jöchler, Pasang Dawa Lama",
            prominence: "6th Highest",
            description: "Cho Oyu (Nepali: चोयु; Tibetan: ཇོ་བོ་དབུ་ཡ) is the sixth highest mountain in the world at 8,188 metres (26,864 ft) above sea level. Cho Oyu means 'Turquoise Goddess' in Tibetan. The mountain is the westernmost major peak of the Khumbu sub-section of the Mahalangur Himalaya 20 km west of Mount Everest. The mountain stands on the China-Nepal border. Just a few kilometres west of Cho Oyu is Nangpa La (5,716m/18,753 ft), a glaciated pass that serves as the main trading route between the Tibetans and the Khumbu's Sherpas. This pass separates the Khumbu and Rolwaling Himalayas. Due to its proximity to this pass and the generally moderate slopes of the standard northwest ridge route, Cho Oyu is considered the easiest 8,000 metre peak to climb.[2] It is a popular objective for professionally guided parties."
        },
        {
            type: "Dhaulagiri",
            image_url: "http://snowleopardtrek.com/wp-content/uploads/2015/06/Dhaulagiri_-_view_from_aircraft.jpg",
            locations: "Dhaulagiri, Nepal",
            elevation: "8,167 m.",
            ascent: "May 13, 1960 by Kurt Diemberger, A. Schelbert, E. Forrer, Nawang Dorje, Nyima Dorje",
            prominence: "7th Highest",
            description: "The Dhaulagiri massif in Nepal extends 120 km (70 mi) from the Kaligandaki River west to the Bheri. This massif is bounded on the north and southwest by tributaries of the Bheri River and on the southeast by Myagdi Khola. Dhaulagiri I is the seventh highest mountain in the world at 8,167 metres (26,795 ft) above sea level. It was first climbed on May 13, 1960 by a Swiss/Austrian/Nepali expedition. The mountain's name is धौलागिरी (dhaulāgirī) in Nepali. This comes from Sanskrit where धवल (dhawala) means dazzling, white, beautiful[3] and गिरि (giri) means mountain.[4] Dhaulagiri I is also the highest point of the Gandaki river basin. Annapurna I (8,091m/26,545 ft) is 34 km. east of Dhaulagiri I. The Kali Gandaki River flows between the two in the Kaligandaki Gorge, said to be the world's deepest."
        },
        {
            type: "Manaslu",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sunrise%2C_Manaslu.jpg",
            locations: "Gorkha District, Nepal",
            elevation: "8,163 m.",
            ascent: "May 9, 1956 by a Japanese team",
            prominence: "8th Highest",
            description: "Manaslu (Nepali: मनास्लु, also known as Kutang) is the eighth highest mountain in the world at 8,163 metres (26,781 ft) above sea level. It is located in the Mansiri Himal, part of the Nepalese Himalayas, in the west-central part of Nepal. Its name, which means 'mountain of the spirit', comes from the Sanskrit word manasa, meaning 'intellect' or 'soul'. Manaslu was first climbed on May 9, 1956 by Toshio Imanishi and Gyalzen Norbu, members of a Japanese expedition. It is said that 'just as the British consider Everest their mountain, Manaslu has always been a Japanese mountain'. Manaslu Peak is the highest peak in the Gorkha District and is located about 64 km (40 mi) east of Annapurna. The mountain's long ridges and valley glaciers offer feasible approaches from all directions, and culminate in a peak that towers steeply above its surrounding landscape, and is a dominant feature when viewed from afar."
        },
        {
            type: "Annapurna",
            image_url: "http://www.himalayanglacier.it/wp-content/gallery/annapurna-base-camp/Lofty-mountains-view-from-Annapurna-base-camp_shutterstock_2557550.jpg",
            locations: "Gandaki Zone, Nepal",
            elevation: "8,091 m.",
            ascent: "3 June 1950 Maurice Herzog and Louis Lachenal",
            prominence: "10th Highest",
            description: "Annapurna (Sanskrit, Nepali, Newar: अन्नपूर्ण) is a massif in the Himalayas in north-central Nepal that includes one peak over 8,000 metres (26,000 ft), thirteen peaks over 7,000 metres (23,000 ft), and sixteen more over 6,000 metres (20,000 ft).[3] The massif is 55 kilometres (34 mi) long, and is bounded by the Kali Gandaki Gorge on the west, the Marshyangdi River on the north and east, and by Pokhara Valley on the south. At the western end the massif encloses a high basin called the Annapurna Sanctuary. Annapurna I Main is the tenth highest mountain in the world at 8,091 metres (26,545 ft) above sea level."
        }
    ];

})();
