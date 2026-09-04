import { TawafRound } from "../types";

export const TAWAF_ROUNDS_DATA: TawafRound[] = [
  {
    round: 1,
    title: "Putaran Pertama (Awal Tawaf)",
    type: "guide",
    arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
    latin: "Bismillahi wallahu akbar.",
    translation: "Dengan nama Allah, dan Allah Maha Besar.",
    reference: "HR. Bukhari no. 1612 & Muslim no. 1277",
    tips: "Mulai dari garis lurus Hajar Aswad. Lakukan Istilam (mengangkat tangan kanan ke arah Hajar Aswad sambil mengucap Bismillah Allahu Akbar). Tidak perlu berdesak-desakan mencium Hajar Aswad."
  },
  {
    round: 2,
    title: "Putaran Kedua",
    type: "dhikr",
    arabic: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلا إِلَهَ إِلا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    latin: "Subhanallah, walhamdulillah, wa laa ilaha illallah, wallahu akbar, wa la hawla wa la quwwata illa billahil 'aliyyil 'adzim.",
    translation: "Maha Suci Allah, segala puji bagi Allah, tiada sesembahan yang berhak disembah selain Allah, Allah Maha Besar, dan tiada daya serta upaya kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung.",
    reference: "Dzikir Sunnah Shahih",
    tips: "Dianjurkan memperbanyak dzikir, tasbih, dan istighfar dengan suara perlahan tanpa mengganggu jamaah lain."
  },
  {
    round: 3,
    title: "Putaran Ketiga",
    type: "optional_prayer",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي",
    latin: "Allahumma inni as-alukal 'afwa wal 'afiyata fi dini wa dunyaya wa ahli wa mali, allahummastur 'awrati wa aamin raw'ati.",
    translation: "Ya Allah, sesungguhnya aku memohon ampunan dan keselamatan dalam agamaku, duniaku, keluargaku, dan hartaku. Ya Allah, tutupilah aib-aibku dan tenangkanlah rasa takutku.",
    reference: "HR. Abu Dawud no. 5074 & Ibnu Majah",
    tips: "Doa pilihan para ulama. Anda juga bebas berdoa dalam bahasa Indonesia untuk kebaikan orang tua dan anak keturunan."
  },
  {
    round: 4,
    title: "Putaran Keempat",
    type: "dhikr",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    latin: "Laa ilaha illallahu wahdahu laa syarika lah, lahul mulku wa lahul hamdu, wa huwa 'ala kulli syai-in qadir.",
    translation: "Tiada sesembahan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya segala pujian, dan Dia Maha Kuasa atas segala sesuatu.",
    reference: "HR. Tirmidzi no. 3585",
    tips: "Perbanyak bacaan tahlil dan syukuri kesempatan emas dapat thawaf langsung mengitari Ka'bah Baitullah."
  },
  {
    round: 5,
    title: "Putaran Kelima",
    type: "optional_prayer",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا، وَأَدْخِلْنَا جَنَّاتِ النَّعِيمِ",
    latin: "Rabbighfir li wa liwalidayya warhamhuma kama rabbayani shaghira, wa adkhilna jannatin na'im.",
    translation: "Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah mereka berdua sebagaimana mereka telah mendidikku di waktu kecil, dan masukkanlah kami ke surga kenikmatan.",
    reference: "Doa Pilihan Birrul Walidain",
    tips: "Sangat dianjurkan memfokuskan putaran ini mendoakan kedua orang tua, baik yang masih hidup maupun yang telah berpulang."
  },
  {
    round: 6,
    title: "Putaran Keenam",
    type: "dhikr",
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    latin: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.",
    translation: "Ya Allah, sesungguhnya Engkau Maha Pengampun lagi Maha Pemaaf, menyukai ampunan, maka ampunilah aku.",
    reference: "HR. Tirmidzi no. 3513 (Shahih)",
    tips: "Minta penghapusan atas dosa-dosa masa lalu, kelapangan dada, dan keteguhan iman."
  },
  {
    round: 7,
    title: "Putaran Ketujuh (Putaran Terakhir)",
    type: "guide",
    arabic: "اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَعُمْرَةً مَبْرُورَةً، وَسَعْيًا مَشْكُورًا، وَذَنْبًا مَغْفُورًا، وَعَمَلًا صَالِحًا مَقْبُولًا",
    latin: "Allahummaj'alhu hajjan mabruura wa 'umratan mabruurah, wa sa'yan masykura, wa dzanban maghfura, wa 'amalan shalihan maqbula.",
    translation: "Ya Allah, jadikanlah ini haji dan umrah yang mabrur, sa'i yang disyukuri, dosa yang diampuni, dan amal saleh yang diterima.",
    reference: "Doa Mustajab Pilihan Akhir Thawaf",
    tips: "Setelah melewati garis Hajar Aswad ke-7, Tawaf Anda selesai! Tutup kembali pundak kanan (jika sebelumnya idhthiba'), lalu menuju belakang Maqam Ibrahim untuk shalat sunnah Tawaf 2 raka'at."
  }
];

export const RUKUN_YAMANI_DOA = {
  title: "Doa Antara Rukun Yamani & Hajar Aswad (Sunnah Tiap Putaran)",
  arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
  latin: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adzaban-nar.",
  translation: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.",
  reference: "HR. Abu Dawud no. 1892 (Hadits Shahih dari Rasulullah SAW)"
};

export const AFTER_TAWAF_GUIDE = {
  title: "Amalan Setelah Selesai 7 Putaran Tawaf",
  steps: [
    {
      title: "1. Menutup Kembali Bahu Kanan",
      desc: "Bagi pria, kembalikan kain ihram menutupi kedua pundak (Idhthiba' hanya disunnahkan saat thawaf saja)."
    },
    {
      title: "2. Shalat Sunnah Thawaf 2 Raka'at",
      desc: "Di belakang Maqam Ibrahim (jika memungkinkan) atau di bagian mana saja di dalam Masjidil Haram. Rakaat 1 membaca Al-Fatihah & Al-Kafirun, Rakaat 2 membaca Al-Fatihah & Al-Ikhlas."
    },
    {
      title: "3. Minum Air Zamzam & Berdoa",
      desc: "Minum air zamzam hingga kenyang sambil menghadap kiblat dan usapkan sedikit ke wajah/kepala."
    },
    {
      title: "4. Beranjak ke Bukit Shafa untuk Sa'i",
      desc: "Keluar menuju area Mas'a (tempat sa'i) melalui pintu Babus Shafa."
    }
  ]
};
