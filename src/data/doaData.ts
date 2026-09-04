import { PrayerItem } from "../types";

export const PRAYERS_DATA: PrayerItem[] = [
  // --- TRAVEL (SAFAR) ---
  {
    id: "doa-keluar-rumah",
    title: "Doa Keluar Rumah Menuju Bandara",
    category: "Travel",
    occasion: "Dibaca saat melangkahkan kaki keluar dari pintu rumah",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin: "Bismillaahi tawakkaltu 'alallaahi, laa hawla wa laa quwwata illaa billaah.",
    translation: "Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan upaya kecuali dengan pertolongan Allah.",
    reference: "HR. Abu Dawud no. 5095 & Tirmidzi no. 3426",
    isFavorite: true
  },
  {
    id: "doa-naik-kendaraan",
    title: "Doa Naik Kendaraan (Pesawat / Bus)",
    category: "Travel",
    occasion: "Dibaca saat duduk di kursi pesawat, bus, atau kereta",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ",
    latin: "Subhaanal-ladzii sakh-khara lanaa haadzaa wa maa kunnaa lahuu muqriniina, wa innaa ilaa rabbinaa lamunqalibuun.",
    translation: "Maha Suci Allah yang telah menundukkan semua ini bagi kami padahal sebelumnya kami tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.",
    reference: "QS. Az-Zukhruf: 13-14",
    isFavorite: false
  },
  {
    id: "doa-safar-lengkap",
    title: "Doa Bepergian Jauh (Doa Safar Lengkap)",
    category: "Travel",
    occasion: "Dibaca ketika kendaraan mulai bergerak melaju",
    arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَىٰ، وَمِنَ الْعَمَلِ مَا تَرْضَىٰ، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَٰذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ",
    latin: "Allaahumma innaa nas-aluka fii safarinaa haadzal birra wat-taqwaa, wa minal 'amali maa tardhaa. Allaahumma hawwin 'alainaa safaranaa haadzaa watwi 'annaa bu'dah. Allaahumma antas-saahibu fis-safari wal-khaliifatu fil-ahli.",
    translation: "Ya Allah, sesungguhnya kami memohon kepada-Mu dalam perjalanan kami ini kebaikan dan ketakwaan, serta amal perbuatan yang Engkau ridhai. Ya Allah, mudahkanlah perjalanan kami ini dan dekatkanlah kejauhannya. Ya Allah, Engkaulah teman dalam perjalanan dan penjaga bagi keluarga yang ditinggalkan.",
    reference: "HR. Muslim no. 1342",
    isFavorite: true
  },

  // --- UMRAH ---
  {
    id: "doa-masuk-kota-makkah",
    title: "Doa Memasuki Kota Suci Makkah",
    category: "Umrah",
    occasion: "Dibaca ketika mulai melihat perbatasan tanah haram Makkah",
    arabic: "اللَّهُمَّ هَذَا حَرَمُكَ وَأَمْنُكَ فَحَرِّمْنِي عَلَى النَّارِ، وَآمِنِّي مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ، وَاجْعَلْنِي مِنْ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ",
    latin: "Allaahumma haadzaa haramuka wa amnuka faharrimnii 'alan-naar, wa aaminnii min 'adzaabika yawma tab'atsu 'ibaadak, waj'alnii min awliyaa-ika wa ahli thaa'atik.",
    translation: "Ya Allah, ini adalah tanah haram-Mu dan tempat aman-Mu, maka haramkanlah daging dan kulitku dari api neraka, amankanlah aku dari azab-Mu pada hari Engkau membangkitkan hamba-hamba-Mu, dan jadikanlah aku termasuk kekasih-Mu dan orang yang taat kepada-Mu.",
    reference: "Doa Atsar Para Shalihin",
    isFavorite: false
  },
  {
    id: "doa-masuk-masjidil-haram",
    title: "Doa Masuk Masjidil Haram",
    category: "Umrah",
    occasion: "Mendahulukan kaki kanan saat melangkah masuk pintu masjid",
    arabic: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    latin: "Bismillaahi wash-shalaatu was-salaamu 'alaa rasuulillaah. Allaahummaghfir lii dzunuubii waftah lii abwaaba rahmatik.",
    translation: "Dengan nama Allah, shalawat dan salam atas Rasulullah. Ya Allah, ampunilah dosa-dosaku dan bukakanlah untukku pintu-pintu rahmat-Mu.",
    reference: "HR. Abu Dawud no. 465 & Ibnu Majah",
    isFavorite: true
  },
  {
    id: "doa-melihat-kabah",
    title: "Doa Ketika Pertama Kali Melihat Ka'bah",
    category: "Umrah",
    occasion: "Mengangkat kedua tangan saat mata memandang Baitullah",
    arabic: "اللَّهُمَّ زِدْ هَٰذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً، وَزِدْ مَنْ شَرَّفَهُ وَعَظَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيفًا وَتَكْرِيمًا وَتَعْظِيمًا وَبِرًّا",
    latin: "Allaahumma zid haadzal baita tasyriifan wa ta'zhiiman wa takriiman wa mahaabah, wa zid man syarrafahuu wa 'azzhamahuu mimman hajjahuu awi'tamarahuu tasyriifan wa takriiman wa ta'zhiiman wa birraa.",
    translation: "Ya Allah, tambahkanlah kemuliaan, keagungan, kehormatan, dan wibawa pada Rumah (Baitullah) ini. Serta tambahkanlah kemuliaan, kehormatan, keagungan, dan kebajikan bagi orang yang memuliakan dan mengagungkannya dari kalangan orang yang berhaji atau berumrah.",
    reference: "Musannaf Ibnu Abi Syaibah & Asy-Syafi'i",
    isFavorite: true
  },

  // --- TAWAF ---
  {
    id: "doa-istilam-hajar-aswad",
    title: "Doa Istilam di Garis Hajar Aswad",
    category: "Tawaf",
    occasion: "Dibaca tiap melintasi garis awal putaran Tawaf sambil melambaikan tangan kanan",
    arabic: "بِسْمِ اللَّهِ، وَاللَّهُ أَكْبَرُ",
    latin: "Bismillaahi wallaahu akbar.",
    translation: "Dengan nama Allah, dan Allah Maha Besar.",
    reference: "HR. Bukhari no. 1612 & Muslim no. 1277",
    isFavorite: true
  },
  {
    id: "doa-antara-rukun-yamani",
    title: "Doa Antara Rukun Yamani & Hajar Aswad (Sapu Jagad)",
    category: "Tawaf",
    occasion: "Dibaca pada setiap akhir putaran dari Rukun Yamani hingga Hajar Aswad",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin: "Rabbanaa aatinaa fid-dunyaa hasanah wa fil-aakhirati hasanah wa qinaa 'adzaaban-naar.",
    translation: "Ya Tuhan kami, berikanlah kepada kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami dari siksaan api neraka.",
    reference: "HR. Abu Dawud no. 1892 (Shahih)",
    isFavorite: true
  },
  {
    id: "doa-maqam-ibrahim",
    title: "Doa di Maqam Ibrahim Saat Shalat Sunnah Thawaf",
    category: "Tawaf",
    occasion: "Dibaca saat beranjak ke belakang Maqam Ibrahim sesudah putaran ke-7",
    arabic: "وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى",
    latin: "Wattakhidzuu mim maqaami Ibraahiima mushallaa.",
    translation: "Dan jadikanlah sebagian maqam Ibrahim tempat shalat.",
    reference: "QS. Al-Baqarah: 125 & HR. Muslim no. 1218",
    isFavorite: false
  },
  {
    id: "doa-minum-air-zamzam",
    title: "Doa Minum Air Zamzam",
    category: "Tawaf",
    occasion: "Dibaca menghadap Ka'bah saat meminum air zamzam",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ وَسَقَمٍ",
    latin: "Allaahumma inni as-aluka 'ilman naafi'an, wa rizqan waasi'an, wa syifaa-an min kulli daa-in wa saqam.",
    translation: "Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang lapang, dan kesembuhan dari segala macam penyakit dan derita.",
    reference: "HR. Ad-Daraquthni & Al-Hakim (Shahih)",
    isFavorite: true
  },

  // --- SAI ---
  {
    id: "doa-mendaki-shafa",
    title: "Doa Mendaki Bukit Shafa",
    category: "Sai",
    occasion: "Dibaca saat menaiki Bukit Shafa mengawali putaran pertama Sa'i",
    arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ، فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا، نَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ",
    latin: "Innas-shafaa wal-marwata min sya'aa-irillaah, faman hajjal baita awi'tamara falaa junaaha 'alaihi ay-yath-thawwafa bihimaa. Nabda-u bimaa bada-allaahu bih.",
    translation: "Sesungguhnya Shafa dan Marwah adalah sebahagian dari syiar Allah. Barangsiapa yang beribadah haji ke Baitullah atau berumrah, maka tidak ada dosa baginya mengerjakan sa'i antara keduanya. Kami memulai dengan apa yang Allah mulai dengannya.",
    reference: "QS. Al-Baqarah: 158 & HR. Muslim no. 1218",
    isFavorite: false
  },
  {
    id: "doa-pilar-hijau-sai",
    title: "Doa di Antara Lampu Hijau Sa'i",
    category: "Sai",
    occasion: "Dibaca saat berlari-lari kecil di antara dua pilar lampu hijau",
    arabic: "رَبِّ اغْفِرْ وَارْحَمْ، وَاعْفُ وَتَكَرَّمْ، وَتَجَاوَزْ عَمَّا تَعْلَمْ، إِنَّكَ تَعْلَمُ مَا لَا نَعْلَمُ، إِنَّكَ أَنْتَ اللَّهُ الْأَعَزُّ الْأَكْرَمُ",
    latin: "Rabbighfir warham, wa'fu wa takarram, wa tajaawaz 'amma ta'lam, innaka ta'lamu maa laa na'lam, innaka antallaahul a'azzul akram.",
    translation: "Ya Tuhanku ampunilah dan sayangilah, maafkanlah dan muliakanlah, serta lewatkanlah dari apa yang Engkau ketahui. Sesungguhnya Engkau mengetahui apa yang tidak kami ketahui. Sesungguhnya Engkau adalah Allah Yang Maha Perkasa lagi Maha Mulia.",
    reference: "Atsar Sahabat Ibnu Umar & Ibnu Mas'ud RA",
    isFavorite: true
  },

  // --- TAHALLUL ---
  {
    id: "doa-tahallul-cukur",
    title: "Doa Menggunting / Mencukur Rambut (Tahallul)",
    category: "Tahallul",
    occasion: "Dibaca saat mencukur atau memotong rambut di Bukit Marwah",
    arabic: "اللَّهُمَّ اجْعَلْ لِكُلِّ شَعْرَةٍ نُورًا يَوْمَ الْقِيَامَةِ، وَاغْفِرْ لِي وَلِلْمُحَلِّقِينَ وَالْمُقَصِّرِينَ، يَا أَرْحَمَ الرَّاحِمِينَ",
    latin: "Allaahummaj'al likulli sya'ratin nuuran yawmal qiyaamah, waghfir lii wa lil-muhalliqiina wal-muqash-shiriina, yaa arhamar raahimiin.",
    translation: "Ya Allah, jadikanlah untuk setiap helai rambut ini cahaya pada hari kiamat, dan ampunilah aku serta orang-orang yang mencukur dan memendekkan rambutnya, wahai Tuhan Yang Maha Pengasih dari segala yang mengasihi.",
    reference: "Kitab Al-Idhah fi Manasik Al-Hajj Imam An-Nawawi",
    isFavorite: true
  },

  // --- MADINAH ---
  {
    id: "doa-masuk-kota-madinah",
    title: "Doa Memasuki Kota Madinah Al-Munawwarah",
    category: "Madinah",
    occasion: "Dibaca saat tiba di perbatasan kota Nabi yang bercahaya",
    arabic: "اللَّهُمَّ هَذَا حَرَمُ رَسُولِكَ فَاجْعَلْهُ لِي وِقَايَةً مِنَ النَّارِ، وَأَمَانًا مِنَ الْعَذَابِ وَسُوءِ الْحِسَابِ",
    latin: "Allaahumma haadzaa haramu rasuulik, faj'alhu lii wiqaayatan minan-naar, wa amaanan minal 'adzaabi wa suu-il hisaab.",
    translation: "Ya Allah, kota ini adalah tanah haram Rasul-Mu, maka jadikanlah ia sebagai pelindung bagiku dari siksa neraka, dan pemberi rasa aman dari siksa serta hisab yang buruk.",
    reference: "Kitab Ihya' 'Ulumiddin Imam Al-Ghazali",
    isFavorite: false
  },
  {
    id: "doa-ziarah-makam-rasulullah",
    title: "Salam dan Doa Ziarah Makam Rasulullah SAW",
    category: "Madinah",
    occasion: "Dibaca tepat di depan makam mulia Rasulullah SAW di Masjid Nabawi",
    arabic: "السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ، السَّلَامُ عَلَيْكَ يَا خِيَرَةَ اللَّهِ مِنْ خَلْقِهِ، أَشْهَدُ أَنَّكَ قَدْ بَلَّغْتَ الرِّسَالَةَ، وَأَدَّيْتَ الْأَمَانَةَ، وَنَصَحْتَ الْأُمَّةَ، وَجَاهَدْتَ فِي اللَّهِ حَقَّ جِهَادِهِ",
    latin: "As-salaamu 'alaika yaa Rasuulallaah, as-salaamu 'alaika yaa khiyaratallaahi min khalqih. Asyhadu annaka qad ballaghtar-risaalah, wa addaital amaanah, wa nashahtal ummah, wa jaahadta fillaahi haqqa jihaadih.",
    translation: "Salam sejahtera atasmu wahai Rasulullah. Salam sejahtera atasmu wahai manusia pilihan Allah dari segenap ciptaan-Nya. Aku bersaksi bahwa engkau telah menyampaikan risalah, menunaikan amanah, menasihati umat, dan berjihad di jalan Allah dengan sebenar-benarnya jihad.",
    reference: "Sunan Al-Baihaqi & Al-Adzkar An-Nawawi",
    isFavorite: true
  },
  {
    id: "doa-raudhah-mustajab",
    title: "Doa Mustajab di Raudhah Asy-Syarifah",
    category: "Madinah",
    occasion: "Dibaca di taman surga (antara makam dan mimbar Nabi SAW)",
    arabic: "اللَّهُمَّ إِنَّ هَذِهِ رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ، فَاغْفِرْ لِي ذُنُوبِي كُلَّهَا، دِقَّهَا وَجِلَّهَا، وَأَوَّلَهَا وَآخِرَهَا، وَعَلَانِيَتَهَا وَسِرَّهَا، وَارْزُقْنِي شَفَاعَةَ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
    latin: "Allaahumma inna haadzihi raudhatum mir riyaadhil jannah, faghfir lii dzunuubii kullahaa, diqqahaa wa jillahaa, wa awwalahaa wa aakhirahaa, wa 'alaaniyatahaa wa sirrahaa, warzuqnii syafaa'ata nabiyyika Muhammadin shallallaahu 'alaihi wa sallam.",
    translation: "Ya Allah, sesungguhnya ini adalah salah satu taman dari taman-taman surga. Maka ampunilah segala dosaku, yang kecil maupun yang besar, yang pertama maupun yang terakhir, yang tampak maupun yang tersembunyi. Dan anugerahkanlah kepadaku syafaat Nabi-Mu Muhammad SAW.",
    reference: "HR. Bukhari no. 1196 & Doa Shalihin Raudhah",
    isFavorite: true
  },

  // --- RETURN (PULANG) ---
  {
    id: "doa-tawaf-wada",
    title: "Doa Tawaf Wada' (Perpisahan dengan Baitullah)",
    category: "Return",
    occasion: "Dibaca saat selesai Tawaf perpisahan sebelum meninggalkan Makkah",
    arabic: "اللَّهُمَّ لَا تَجْعَلْ هَٰذَا آخِرَ الْعَهْدِ بِبَيْتِكَ الْحَرَامِ، وَإِنْ جَعَلْتَهُ فَاعْوِضْنِي عَنْهُ الْجَنَّةَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
    latin: "Allaahumma laa taj'al haadzaa aakhiral 'ahdi bibaitikal haraam, wa in ja'altahuu fa'widh-nii 'anhul jannata birahmatika yaa arhamar raahimiin.",
    translation: "Ya Allah, janganlah Engkau jadikan kunjungan ini sebagai kali terakhir aku berkunjung ke Rumah-Mu yang suci. Dan jika Engkau menakdirkan ini yang terakhir, maka gantikanlah untukku dengan surga berkat rahmat-Mu, wahai Tuhan Yang Paling Pengasih.",
    reference: "Doa Masyhur Tawaf Wada'",
    isFavorite: true
  },
  {
    id: "doa-kembali-tanah-air",
    title: "Doa Saat Perjalanan Kembali ke Indonesia",
    category: "Return",
    occasion: "Dibaca saat pesawat mendarat atau kembali ke kediaman",
    arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
    latin: "Aa-yibuuna, taa-ibuuna, 'aabiduuna, lirabbinaa haamiduun.",
    translation: "Kami kembali dengan bertaubat, tetap beribadah, dan hanya kepada Tuhan kamilah kami selalu memuji.",
    reference: "HR. Bukhari no. 1799 & Muslim no. 1342",
    isFavorite: false
  }
];
