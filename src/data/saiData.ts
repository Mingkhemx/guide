import { SaiRound } from "../types";

export const SAI_START_DOA = {
  title: "Doa Ketika Mendekati Bukit Shafa (Awal Sa'i)",
  arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ نَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ",
  latin: "Innas-shafaa wal-marwata min sya'aa-irillaah. Nabda-u bimaa bada-allaahu bih.",
  translation: "Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar-syiar Allah. Kami memulai dengan apa yang Allah mulai dengannya.",
  reference: "HR. Muslim no. 1218 (Dibaca saat pertama kali mendaki Shafa)"
};

export const HILL_SUNNAH_DOA = {
  title: "Doa Menghadap Ka'bah di Atas Bukit Shafa & Marwah (3x)",
  arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ",
  latin: "Allahu akbar, Allahu akbar, Allahu akbar. Laa ilaha illallahu wahdahu laa syarika lah, lahul mulku wa lahul hamdu yuhyi wa yumitu wa huwa 'ala kulli syai-in qadir. Laa ilaha illallahu wahdah, anjaza wa'dah, wa nashara 'abdah, wa hazamal ahzaaba wahdah.",
  translation: "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Tiada sesembahan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya segala pujian, Dia menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu. Tiada sesembahan selain Allah semata, Dia menepati janji-Nya, menolong hamba-Nya, dan mengalahkan musuh-musuh sendirian.",
  reference: "HR. Muslim no. 1218 (Sunnah dibaca 3x dengan doa pribadi di sela-selanya)"
};

export const GREEN_ZONE_DOA = {
  title: "Doa di Antara Pilar Lampu Hijau (Batu Hijau)",
  arabic: "رَبِّ اغْفِرْ وَارْحَمْ، وَاعْفُ وَتَكَرَّمْ، وَتَجَاوَزْ عَمَّا تَعْلَمْ، إِنَّكَ تَعْلَمُ مَا لَا نَعْلَمُ، إِنَّكَ أَنْتَ اللَّهُ الْأَعَزُّ الْأَكْرَمُ",
  latin: "Rabbighfir warham, wa'fu wa takarram, wa tajaawaz 'amma ta'lam, innaka ta'lamu maa laa na'lam, innaka antallaahul a'azzul akram.",
  translation: "Ya Tuhanku ampunilah dan sayangilah, maafkanlah dan muliakanlah, serta lewatkanlah dari apa yang Engkau ketahui. Sesungguhnya Engkau mengetahui apa yang tidak kami ketahui. Sesungguhnya Engkau adalah Allah Yang Maha Perkasa lagi Maha Mulia.",
  reference: "Atsar Shahih dari Abdullah bin Umar RA"
};

export const SAI_ROUNDS_DATA: SaiRound[] = [
  {
    round: 1,
    from: "Shafa",
    to: "Marwah",
    title: "Putaran 1: Shafa ke Marwah",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا دَائِمًا، وَقَلْبًا خَاشِعًا، وَعِلْمًا نَافِعًا، وَيَقِينًا صَادِقًا",
    latin: "Allahumma inni as-aluka iimaanan daa-iman, wa qalban khaasyi'an, wa 'ilman naafi'an, wa yaqinan shaadiqan.",
    translation: "Ya Allah, sesungguhnya aku memohon kepada-Mu iman yang teguh, hati yang khusyuk, ilmu yang bermanfaat, dan keyakinan yang benar.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "Panduan Doa Putaran 1"
  },
  {
    round: 2,
    from: "Marwah",
    to: "Shafa",
    title: "Putaran 2: Marwah ke Shafa",
    arabic: "اللَّهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ، وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    latin: "Allahumma rabbana taqabbal minna innaka antas-sami'ul 'alim, wa tub 'alaina innaka antat-tawwabur rahim.",
    translation: "Ya Tuhan kami, terimalah amal ibadah dari kami, sesungguhnya Engkau Maha Mendengar lagi Maha Mengetahui, dan terimalah taubat kami sesungguhnya Engkau Maha Penerima Taubat lagi Maha Penyayang.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "QS. Al-Baqarah: 127-128"
  },
  {
    round: 3,
    from: "Shafa",
    to: "Marwah",
    title: "Putaran 3: Shafa ke Marwah",
    arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا",
    latin: "Allahummaj'al fi qalbi nura, wa fi bashari nura, wa fi sam'i nura, wa 'an yamini nura, wa 'an syimali nura.",
    translation: "Ya Allah, jadikanlah cahaya dalam hatiku, cahaya pada penglihatanku, cahaya pada pendengaranku, cahaya di sisi kananku, dan cahaya di sisi kiriku.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "HR. Muslim no. 763"
  },
  {
    round: 4,
    from: "Marwah",
    to: "Shafa",
    title: "Putaran 4: Marwah ke Shafa",
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ",
    latin: "Rabbana laa tuzigh qulubana ba'da idz hadaitana wa hab lana min ladunka rahmah, innaka antal wahhab.",
    translation: "Ya Tuhan kami, janganlah Engkau condongkan hati kami kepada kesesatan setelah Engkau berikan petunjuk kepada kami, dan berilah kami rahmat dari sisi-Mu, sesungguhnya Engkau Maha Pemberi.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "QS. Ali 'Imran: 8"
  },
  {
    round: 5,
    from: "Shafa",
    to: "Marwah",
    title: "Putaran 5: Shafa ke Marwah",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ",
    latin: "Allahumma inni as-alukal jannata wa maa qarraba ilaiha min qawlin aw 'amal, wa a'udzu bika minan-naari wa maa qarraba ilaiha min qawlin aw 'amal.",
    translation: "Ya Allah, aku memohon kepada-Mu surga dan apa saja yang mendekatkan kepadanya berupa perkataan atau perbuatan; dan aku berlindung kepada-Mu dari neraka dan apa saja yang mendekatkan kepadanya berupa perkataan atau perbuatan.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "HR. Ibnu Majah no. 3846 (Shahih)"
  },
  {
    round: 6,
    from: "Marwah",
    to: "Shafa",
    title: "Putaran 6: Marwah ke Shafa",
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    latin: "Rabbana hab lana min azwajina wa dzurriyyatina qurrata a'yun, waj'alna lil-muttaqina imama.",
    translation: "Ya Tuhan kami, anugerahkanlah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "QS. Al-Furqan: 74"
  },
  {
    round: 7,
    from: "Shafa",
    to: "Marwah",
    title: "Putaran 7: Shafa ke Marwah (Selesai di Marwah)",
    arabic: "اللَّهُمَّ اجْعَلْهُ سَعْيًا مَشْكُورًا، وَذَنْبًا مَغْفُورًا، وَعَمَلًا صَالِحًا مَقْبُولًا، وَتِجَارَةً لَنْ تَبُورَ",
    latin: "Allahummaj'alhu sa'yan masykura, wa dzanban maghfura, wa 'amalan shalihan maqbula, wa tijaratan lan tabur.",
    translation: "Ya Allah, jadikanlah sa'i ini sebagai sa'i yang disyukuri, dosa yang diampuni, amal shaleh yang diterima, dan perniagaan yang tidak akan merugi.",
    greenZoneInstruction: "Lari kecil di antara tanda lampu hijau (Khusus jamaah laki-laki)",
    duaGreenZone: GREEN_ZONE_DOA,
    reference: "Doa Akhir Sa'i di Bukit Marwah"
  }
];

export const TAHALLUL_GUIDE = {
  title: "Tahallul (Selesai Sa'i di Marwah)",
  arabic: "الْحَمْدُ لِلَّهِ الَّذِي قَضَى عَنَّا نُسُكَنَا",
  latin: "Alhamdulillahi-lladzi qadha 'anna nusukana.",
  translation: "Segala puji bagi Allah yang telah menyelesaikan manasik ibadah kami.",
  instructions: [
    "Pria: Disunnahkan mencukur gundul (Halq) karena didoakan Rasulullah 3x, atau memotong pendek merata (Taqshir).",
    "Wanita: Cukup memotong ujung rambut sepanjang satu ruas jari (sekitar 2-3 cm).",
    "Dengan bertahallul, seluruh larangan ihram kembali halal dan ibadah Umrah Anda selesai sempurna!"
  ]
};
