import { NiatItem } from "../types";

export const NIAT_ITEMS: NiatItem[] = [
  {
    id: "niat-umrah",
    title: "Lafadz Niat Umrah",
    subtitle: "Dibaca saat di Miqat sebelum melewati batas",
    arabic: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً\nنَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى",
    latin: "Labbaikallaahumma 'umratan. Nawaitul 'umrata wa ahramtu bihaa lillaahi ta'aalaa.",
    translation: "Aku penuhi panggilan-Mu ya Allah untuk berumrah. Aku berniat melaksanakan umrah dan berihram karenanya karena Allah Ta'ala.",
    instruction: "Dibaca setelah mengenakan pakaian ihram, shalat sunnah ihram 2 rakaat (jika bukan waktu terlarang), dan sebelum melewati garis Miqat (misal: Bir Ali, Yalamlam, atau saat di pesawat).",
    category: "niat_umrah",
    reference: "HR. Muslim no. 1218 & Kitab Manasik Kemenag RI"
  },
  {
    id: "niat-umrah-badal",
    title: "Niat Umrah Badal (Untuk Orang Lain / Almarhum)",
    subtitle: "Mengumrahkan orang tua atau kerabat yang wafat/udzur syar'i",
    arabic: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً عَنْ فُلَانِ بْنِ فُلَانٍ\nنَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا عَنْ فُلَانٍ لِلَّهِ تَعَالَى",
    latin: "Labbaikallaahumma 'umratan 'an [Sebut Nama Orang]. Nawaitul 'umrata wa ahramtu bihaa 'an [Sebut Nama Orang] lillaahi ta'aalaa.",
    translation: "Aku penuhi panggilan-Mu ya Allah untuk berumrah atas nama [Nama Orang]. Aku berniat umrah dan berihram karenanya atas nama [Nama Orang] karena Allah Ta'ala.",
    instruction: "Syarat membadalkan umrah: yang membadalkan sudah pernah melaksanakan umrah untuk dirinya sendiri terlebih dahulu.",
    category: "niat_umrah",
    reference: "HR. Abu Dawud no. 1811 & Ibnu Majah"
  },
  {
    id: "talbiyah-utama",
    title: "Lafadz Kalimat Talbiyah",
    subtitle: "Syiar agung haji & umrah sejak berihram hingga awal Thawaf",
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
    latin: "Labbaikallaahumma labbaaik, labbaaika laa syariika laka labbaaik, innal hamda wan-ni'mata laka wal-mulk, laa syariika lak.",
    translation: "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu semata, tiada sekutu bagi-Mu.",
    instruction: "Disunnahkan bagi laki-laki mengeraskan suara talbiyah, dan bagi wanita membaca dengan suara lembut yang didengar dirinya sendiri.",
    category: "talbiyah",
    reference: "HR. Bukhari no. 1549 & Muslim no. 1184"
  },
  {
    id: "shalawat-sesudah-talbiyah",
    title: "Shalawat Sesudah Membaca Talbiyah",
    subtitle: "Sunnah memperbanyak shalawat di antara lantunan talbiyah",
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
    latin: "Allaahumma shalli wa sallim 'alaa sayyidinaa Muhammadin wa 'alaa aali sayyidinaa Muhammad.",
    translation: "Ya Allah, limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad beserta segenap keluarga Nabi Muhammad.",
    instruction: "Dianjurkan dibaca setelah mengulang beberapa kali lafadz talbiyah.",
    category: "shalawat",
    reference: "Sunan Asy-Syafi'i & Adab Safar"
  },
  {
    id: "doa-sesudah-talbiyah",
    title: "Doa Memohon Ridha & Surga Sesudah Talbiyah",
    subtitle: "Memohon keselamatan dari siksa api neraka",
    arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ، وَنَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ، رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin: "Allaahumma innaa nas-aluka ridhaaka wal-jannah, wa na'uudzu bika min sakhatika wan-naar. Rabbanaa aatinaa fid-dunyaa hasanah wa fil-aakhirati hasanah wa qinaa 'adzaaban-naar.",
    translation: "Ya Allah, kami memohon ridha-Mu dan surga, dan kami berlindung kepada-Mu dari kemurkaan-Mu dan siksa api neraka. Ya Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.",
    instruction: "Dibaca dengan penuh harap, khusyuk, dan kerendahan hati saat perjalanan menuju Tanah Suci Makkah.",
    category: "doa_talbiyah",
    reference: "HR. Baihaqi & Kitab Al-Adzkar Imam An-Nawawi"
  },
  {
    id: "niat-haji",
    title: "Lafadz Niat Haji (Tamattu' / Ifrad)",
    subtitle: "Dibaca bagi jamaah yang menunaikan rukun haji",
    arabic: "لَبَّيْكَ اللَّهُمَّ حَجًّا\nنَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلَّهِ تَعَالَى",
    latin: "Labbaikallaahumma hajjan. Nawaitul hajja wa ahramtu bihii lillaahi ta'aalaa.",
    translation: "Aku penuhi panggilan-Mu ya Allah untuk berhaji. Aku berniat haji dan berihram karenanya karena Allah Ta'ala.",
    instruction: "Dibaca pada tanggal 8 Dzulhijjah (Hari Tarwiyah) dari pemondokan di Makkah (untuk Haji Tamattu') atau dari Miqat (untuk Haji Ifrad/Qiran).",
    category: "niat_haji",
    reference: "HR. Muslim & Fiqhus Sunnah"
  }
];

export const IHRAM_PROHIBITIONS = [
  {
    category: "Larangan Umum (Pria & Wanita)",
    items: [
      "Memotong kuku tangan maupun kaki",
      "Mencukur, mencabut, atau memotong rambut/bulu badan",
      "Memakai wewangian/parfum pada badan atau pakaian setelah berihram",
      "Membunuh binatang buruan darat atau mencabut pepohonan tanah haram",
      "Melakukan akad nikah, menikahkan, atau melamar",
      "Bercumbu mesra atau berhubungan suami-istri (Rafats)",
      "Bertengkar, berbantah-bantahan, atau berkata kotor (Jidal & Fusuq)"
    ]
  },
  {
    category: "Khusus Jamaah Laki-laki",
    items: [
      "Memakai pakaian yang bertaut jahitan sesuai bentuk tubuh (celana, baju kaos, kemeja, celana dalam berjahit)",
      "Menutup kepala dengan sesuatu yang menempel langsung (peci, topi, sorban)",
      "Memakai sepatu yang menutupi mata kaki dan jari-jari (disunnahkan sandal terbuka)"
    ]
  },
  {
    category: "Khusus Jamaah Wanita",
    items: [
      "Menutup wajah dengan cadar/niqab yang menempel di muka (boleh memakai kerudung/kain yang dijulurkan dari atas kepala)",
      "Memakai sarung tangan yang menutupi telapak tangan"
    ]
  }
];

export const TALBIYAH_DATA = {
  arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
  latin: "Labbaikallaahumma labbaaik, labbaaika laa syariika laka labbaaik, innal hamda wan-ni'mata laka wal-mulk, laa syariika lak.",
  translation: "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu semata, tiada sekutu bagi-Mu.",
  reference: "HR. Al-Bukhari no. 1549 & Muslim no. 1184"
};

export const MIQAT_LOCATIONS = [
  {
    name: "Dzulhulaifah (Bir Ali / Abyar 'Ali)",
    distance: "450 km (11 km dari Madinah)",
    designation: "Miqat bagi penduduk Madinah dan jamaah yang datang melewati rute Madinah.",
    notes: "Lokasi miqat utama jamaah gelombang 1 asal Indonesia yang terlebih dahulu ziarah ke Madinah."
  },
  {
    name: "Yalamlam (As-Sa'diyah)",
    distance: "120 km selatan Makkah",
    designation: "Miqat bagi jamaah yang datang dari arah Yaman, India, dan penerbangan via selatan.",
    notes: "Jamaah pesawat Indonesia gelombang 2 (langsung ke Jeddah) biasanya mengambil niat saat melintasi garis sejajar Yalamlam di udara."
  },
  {
    name: "Qarnul Manazil (As-Sailul Kabir)",
    distance: "75 km timur Makkah",
    designation: "Miqat bagi penduduk Najd, Riyadh, Teluk, dan jamaah penerbangan dari arah timur.",
    notes: "Bagi yang berkendara melalui rute darat Taif menuju Makkah."
  },
  {
    name: "Al-Juhfah (Rabigh)",
    distance: "187 km barat laut Makkah",
    designation: "Miqat bagi penduduk Syam (Suriah, Yordania, Palestina), Mesir, dan Afrika Utara.",
    notes: "Bila melewati jalur pesisir Laut Merah dari arah barat laut."
  },
  {
    name: "Tan'im (Masjid Sayyidah Aisyah)",
    distance: "7.5 km utara Masjidil Haram",
    designation: "Miqat bagi penduduk Makkah atau jamaah yang ingin menunaikan umrah kedua/sunnah.",
    notes: "Paling dekat dan mudah dijangkau dengan taksi atau bus umum dari pusat kota Makkah."
  },
  {
    name: "Ji'ranah",
    distance: "22 km timur laut Masjidil Haram",
    designation: "Miqat tempat Rasulullah SAW pernah berniat umrah sekembalinya dari perang Hunain.",
    notes: "Alternatif miqat umrah sunnah yang sangat afdhal di Makkah."
  }
];

export const NIAT_ITEMS_DATA = [
  {
    id: "niat-utama",
    title: "Lafadz Niat Umrah Standar",
    type: "standard",
    arabic: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً\nنَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى",
    latin: "Labbaikallaahumma 'umratan. Nawaitul 'umrata wa ahramtu bihaa lillaahi ta'aalaa.",
    translation: "Aku penuhi panggilan-Mu ya Allah untuk berumrah. Aku berniat umrah dan berihram karenanya karena Allah Ta'ala.",
    description: "Niat sah utama diucapkan saat di Miqat (misal: Bir Ali) setelah berpakaian ihram dan shalat sunnah ihram."
  },
  {
    id: "niat-isytirath",
    title: "Niat Umrah Bersyarat (Isytirath)",
    type: "conditional",
    arabic: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً، فَإِنْ حَبَسَنِي حَابِسٌ فَمَحِلِّي حَيْثُ حَبَسْتَنِي",
    latin: "Labbaikallaahumma 'umratan, fa in habasanii haabisun fa mahillii haitsu habastanii.",
    translation: "Aku penuhi panggilan-Mu ya Allah untuk berumrah, namun jika aku terhalang oleh suatu halangan, maka tempat tahallul-ku adalah di mana Engkau menahanku.",
    description: "Sangat dianjurkan bagi yang sakit, lansia, atau wanita yang khawatir datang bulan / tertahan halangan syar'i agar boleh bertahallul tanpa membayar denda Dam.",
    condition: "Sakit mendadak, uzur fisik berat, atau hambatan keamanan yang tidak terduga."
  }
];

