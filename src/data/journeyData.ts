import { JourneyDay } from "../types";

export const INITIAL_JOURNEY_DAYS: JourneyDay[] = [
  {
    day: 1,
    title: "Keberangkatan Indonesia ke Tanah Suci",
    location: "Jakarta (CGK) → Madinah (MED) / Jeddah",
    phase: "Fase Keberangkatan & Safar",
    activities: [
      "Berkumpul di Bandara Soekarno-Hatta Terminal 3",
      "Briefing manasik dan pembagian paspor / boarding pass oleh Muthawwif",
      "Shalat sunnah safar 2 rakaat di musholla bandara",
      "Penerbangan langsung / transit menuju Arab Saudi (sekitar 9-10 jam perjalanan)",
      "Tiba di Bandara Pangeran Mohammad bin Abdulaziz Madinah, proses imigrasi & bagasi",
      "Perjalanan bus ber-AC menuju hotel di dekat pelataran Masjid Nabawi"
    ],
    prayers: [
      "Doa Keluar Rumah",
      "Doa Masuk Kendaraan / Pesawat",
      "Doa Safar Panjang & Dzikir Perjalanan"
    ],
    checklist: [
      { id: "d1-1", text: "Periksa paspor, visa umrah, dan buku kuning", completed: true, time: "05:30" },
      { id: "d1-2", text: "Timbang bagasi (maks 25-30kg) dan simpan obat pribadi di tas kabin", completed: true, time: "07:00" },
      { id: "d1-3", text: "Shalat Safar 2 rakaat di musholla bandara", completed: true, time: "09:15" },
      { id: "d1-4", text: "Check-in hotel Madinah & istirahat sejenak", completed: true, time: "19:00" }
    ],
    completed: true,
    iconName: "plane"
  },
  {
    day: 2,
    title: "Hari Pertama di Madinah Al-Munawwarah",
    location: "Masjid Nabawi, Madinah",
    phase: "Fase 1: Madinah Al-Munawwarah",
    activities: [
      "Mengenal rute hotel ke gerbang masuk Masjid Nabawi",
      "Melaksanakan Shalat Shubuh berjamaah di Masjid Nabawi (pahala 1.000x shalat biasa)",
      "Ziarah Makam Rasulullah SAW, Makam Abu Bakar Ash-Shiddiq, dan Umar bin Khattab RA",
      "Ziarah ke Pemakaman Baqi' (sebelah timur Masjid Nabawi)",
      "Kajian adab dan sunnah di Kota Nabi oleh Ustadz pembimbing"
    ],
    prayers: [
      "Doa Memasuki Kota Madinah",
      "Doa Masuk Masjid Nabawi",
      "Salam & Doa Ziarah Makam Rasulullah SAW"
    ],
    checklist: [
      { id: "d2-1", text: "Shalat Subuh berjamaah di Nabawi", completed: true, time: "05:15" },
      { id: "d2-2", text: "Ziarah Makam Nabi & Khulafaur Rasyidin", completed: true, time: "07:30" },
      { id: "d2-3", text: "Ziarah Pemakaman Baqi'", completed: true, time: "08:30" },
      { id: "d2-4", text: "Cek jadwal & permit Nusuk untuk Raudhah", completed: true, time: "16:00" }
    ],
    completed: true,
    iconName: "mosque"
  },
  {
    day: 3,
    title: "Ziarah Sejarah Madinah & Raudhah",
    location: "Madinah & Sekitarnya",
    phase: "Fase 1: Madinah Al-Munawwarah (Hari Ini)",
    activities: [
      "Ziarah Masjid Quba dalam keadaan suci/berwudhu (pahalanya setara ibadah umrah)",
      "Ziarah Jabal Uhud dan Makam Syuhada Uhud (mengenang Sayyidina Hamzah RA)",
      "Kunjungan ke Perkebunan Kurma Madinah",
      "Agenda Utama Puncak: Masuk Raudhah Asy-Syarifah (Taman Surga) dengan izin aplikasi Nusuk",
      "Memperbanyak istighfar, taubat, dan munajat doa di Raudhah"
    ],
    prayers: [
      "Doa Shalat Sunnah di Masjid Quba",
      "Salam Syuhada Uhud",
      "Doa Mustajab di Raudhah Syarifah"
    ],
    checklist: [
      { id: "d3-1", text: "Wudhu dari hotel & shalat sunnah di Masjid Quba", completed: true, time: "07:00" },
      { id: "d3-2", text: "Ziarah Jabal Uhud & Makam Syuhada", completed: true, time: "09:30" },
      { id: "d3-3", text: "Masuk antrean Raudhah (Bawa Barcode Nusuk)", completed: false, time: "14:00" },
      { id: "d3-4", text: "Persiapan koper & kain ihram untuk esok hari", completed: false, time: "20:00" }
    ],
    completed: false,
    iconName: "sparkles"
  },
  {
    day: 4,
    title: "Miqat di Bir Ali & Menuju Makkah",
    location: "Dzulhulaifah (Bir Ali) → Makkah Al-Mukarramah",
    phase: "Fase 2: Menuju Baitullah",
    activities: [
      "Mandi sunnah ihram, memotong kuku, dan merapikan rambut sebelum berpakaian ihram",
      "Mengenakan pakaian ihram dari hotel di Madinah",
      "Berangkat menuju Masjid Miqat Dzulhulaifah (Bir Ali)",
      "Shalat sunnah ihram 2 rakaat di Masjid Bir Ali",
      "Mengucapkan lafadz Niat Umrah di Bir Ali (resmi berlaku larangan ihram)",
      "Perjalanan ke Makkah menggunakan Kereta Cepat Haramain (sekitar 2 jam 20 menit) sambil melantunkan Talbiyah",
      "Check-in hotel Makkah dan bersiap melaksanakan Umrah pertama"
    ],
    prayers: [
      "Lafadz Niat Umrah",
      "Lantunan Kalimat Talbiyah",
      "Doa Memasuki Kota Makkah"
    ],
    checklist: [
      { id: "d4-1", text: "Mandi ihram & kenakan pakaian ihram rapi", completed: false, time: "08:30" },
      { id: "d4-2", text: "Shalat Sunnah Ihram di Masjid Bir Ali", completed: false, time: "10:30" },
      { id: "d4-3", text: "Ucapkan Niat Umrah sebelum meninggalkan Bir Ali", completed: false, time: "11:15" },
      { id: "d4-4", text: "Naik Kereta Cepat Haramain & terus bertalbiyah", completed: false, time: "13:00" }
    ],
    completed: false,
    iconName: "train"
  },
  {
    day: 5,
    title: "Pelaksanaan Rukun Ibadah Umrah Wajib",
    location: "Masjidil Haram, Makkah Al-Mukarramah",
    phase: "Fase 3: Inti Manasik Umrah",
    activities: [
      "Masuk Masjidil Haram melalui Babussalam atau gerbang yang ditentukan",
      "Melihat Ka'bah Baitullah dan melafalkan doa penuh takzim",
      "Melaksanakan Tawaf Qudum/Umrah 7 Putaran berlawanan arah jarum jam (gunakan Tawaf Counter)",
      "Shalat sunnah Tawaf 2 rakaat di belakang Maqam Ibrahim dan minum air Zamzam",
      "Melaksanakan Sa'i 7 putaran antara Shafa dan Marwah (gunakan Sa'i Counter)",
      "Tahallul (memotong/mencukur rambut) di bukit Marwah - Umrah Selesai!",
      "Melepas pakaian ihram dan kembali berganti pakaian biasa yang halal"
    ],
    prayers: [
      "Doa Masuk Masjidil Haram & Melihat Ka'bah",
      "Panduan Doa Tawaf 7 Putaran",
      "Doa di Belakang Maqam Ibrahim & Air Zamzam",
      "Panduan Doa Sa'i Shafa-Marwah & Doa Tahallul"
    ],
    checklist: [
      { id: "d5-1", text: "Thawaf 7 putaran mengelilingi Ka'bah", completed: false, time: "01:00" },
      { id: "d5-2", text: "Shalat 2 rakaat di belakang Maqam Ibrahim", completed: false, time: "02:30" },
      { id: "d5-3", text: "Minum air zamzam menghadap kiblat", completed: false, time: "02:45" },
      { id: "d5-4", text: "Sa'i 7 putaran (Shafa ke Marwah)", completed: false, time: "03:15" },
      { id: "d5-5", text: "Tahallul cukur/potong rambut di Marwah", completed: false, time: "05:00" }
    ],
    completed: false,
    iconName: "kaaba"
  },
  {
    day: 6,
    title: "Memperbanyak Ibadah di Masjidil Haram",
    location: "Masjidil Haram, Makkah Al-Mukarramah",
    phase: "Fase 4: Makkah Al-Mukarramah",
    activities: [
      "Menunaikan seluruh shalat fardhu 5 waktu berjamaah di depan Ka'bah (100.000x pahala)",
      "Melakukan Thawaf Sunnah (tidak perlu pakaian ihram & tidak perlu sa'i)",
      "Khataman Al-Qur'an dan memperbanyak doa titipan keluarga",
      "I'tikaf di Masjidil Haram hingga waktu Isya"
    ],
    prayers: [
      "Doa Sujud Tilawah",
      "Doa Khatam Al-Qur'an",
      "Doa Memohon Ampunan dan Kelancaran Hajat Keluarga"
    ],
    checklist: [
      { id: "d6-1", text: "Shalat 5 waktu full berjamaah di pelataran Ka'bah", completed: false, time: "Sepanjang Hari" },
      { id: "d6-2", text: "Tawaf sunnah di luar jam terik matahari", completed: false, time: "09:00" },
      { id: "d6-3", text: "Membaca catatan doa titipan di depan Multazam", completed: false, time: "16:30" }
    ],
    completed: false,
    iconName: "heart-handshake"
  },
  {
    day: 7,
    title: "Ziarah Sejarah Kota Makkah",
    location: "Jabal Tsur, Arafah, Muzdalifah, Mina, Jabal Nur",
    phase: "Fase 4: Makkah Al-Mukarramah",
    activities: [
      "Ziarah ke Jabal Tsur (tempat persembunyian Rasulullah SAW & Abu Bakar saat hijrah)",
      "Ziarah ke Padang Arafah & Jabal Rahmah (tempat pertemuan Nabi Adam dan Hawa)",
      "Melewati Muzdalifah dan Mina (tempat pelemparan jumrah haji)",
      "Melihat dari kejauhan Jabal Nur / Gua Hira (tempat turunnya wahyu pertama Iqra')"
    ],
    prayers: [
      "Doa di Jabal Rahmah",
      "Doa Meneladani Perjuangan Rasulullah SAW",
      "Dzikir Arafah"
    ],
    checklist: [
      { id: "d7-1", text: "Ziarah Jabal Tsur & berdoa keselamatan", completed: false, time: "07:30" },
      { id: "d7-2", text: "Berfoto dan tafakkur di Jabal Rahmah Arafah", completed: false, time: "09:30" },
      { id: "d7-3", text: "Menyaksikan tenda Mina & jamarat", completed: false, time: "11:00" },
      { id: "d7-4", text: "Kembali ke Masjidil Haram untuk shalat Ashar", completed: false, time: "15:00" }
    ],
    completed: false,
    iconName: "mountain"
  },
  {
    day: 8,
    title: "Umrah Sunnah / Umrah Badal Kedua",
    location: "Masjid Tan'im (Siti Aisyah) / Ji'ranah",
    phase: "Fase 4: Makkah Al-Mukarramah",
    activities: [
      "Bagi jamaah yang ingin umrah sunnah untuk diri sendiri atau umrah badal orang tua",
      "Menuju Masjid Tan'im (Masjid Sayyidah Aisyah) dengan bus atau taksi",
      "Shalat sunnah ihram & berniat umrah di Miqat Tan'im",
      "Kembali ke Masjidil Haram melaksanakan Tawaf, Sa'i, dan Tahallul kedua",
      "Bagi jamaah yang tidak mengambil umrah sunnah, memperbanyak ibadah santai di hotel/masjid"
    ],
    prayers: [
      "Niat Umrah Badal",
      "Doa untuk Orang Tua Tercinta",
      "Doa Syukur Kelancaran Ibadah"
    ],
    checklist: [
      { id: "d8-1", text: "Mandi ihram & menuju Miqat Tan'im", completed: false, time: "08:00" },
      { id: "d8-2", text: "Niat Umrah Badal di Masjid Tan'im", completed: false, time: "09:00" },
      { id: "d8-3", text: "Tawaf & Sa'i kedua di Masjidil Haram", completed: false, time: "10:30" },
      { id: "d8-4", text: "Tahallul kedua selesai dengan berkah", completed: false, time: "12:30" }
    ],
    completed: false,
    iconName: "repeat"
  },
  {
    day: 9,
    title: "Tawaf Wada' & Kepulangan ke Tanah Air",
    location: "Makkah → Bandara Jeddah (JED) → Indonesia",
    phase: "Fase Kepulangan",
    activities: [
      "Packing koper & penimbangan air zamzam resmi (5 liter)",
      "Melaksanakan Tawaf Wada' (Tawaf Perpisahan) tanpa kain ihram dan tanpa Sa'i",
      "Berdoa memohon agar diundang kembali ke Baitullah sebelum keluar Masjidil Haram",
      "Check-out hotel dan perjalanan bus menuju Bandara Internasional King Abdulaziz Jeddah",
      "Penerbangan kembali menuju Bandara Soekarno-Hatta Jakarta",
      "Tiba di Indonesia dengan predikat Umrah yang Mabrur, Aamiin"
    ],
    prayers: [
      "Doa Khusus Tawaf Wada'",
      "Doa Meninggalkan Kota Makkah",
      "Doa Tiba Kembali di Tanah Air"
    ],
    checklist: [
      { id: "d9-1", text: "Selesaikan Tawaf Wada' 7 putaran", completed: false, time: "04:00" },
      { id: "d9-2", text: "Minum air zamzam terakhir & berdoa di Multazam", completed: false, time: "05:30" },
      { id: "d9-3", text: "Check-out hotel & serahkan koper ke bagasi bus", completed: false, time: "09:00" },
      { id: "d9-4", text: "Boarding pesawat kepulangan ke Jakarta", completed: false, time: "14:00" }
    ],
    completed: false,
    iconName: "plane-landing"
  }
];

export const JOURNEY_DAYS_DATA = INITIAL_JOURNEY_DAYS;

