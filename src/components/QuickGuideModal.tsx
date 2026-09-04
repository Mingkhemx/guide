import React from "react";
import { X, CheckCircle2, AlertTriangle, Sparkles, BookOpen } from "lucide-react";
import { IHRAM_PROHIBITIONS } from "../data/niatData";

interface QuickGuideModalProps {
  type: "ihram" | "steps" | "mustajab" | null;
  onClose: () => void;
  onNavigateToTab?: (tab: any) => void;
}

export const QuickGuideModal: React.FC<QuickGuideModalProps> = ({ type, onClose, onNavigateToTab }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in">
      <div className="w-full max-w-[480px] max-h-[85vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#004435] flex items-center justify-center">
              {type === "ihram" && <span className="text-base">👔</span>}
              {type === "steps" && <Sparkles className="w-4 h-4" />}
              {type === "mustajab" && <BookOpen className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-bold text-base text-[#004435]">
                {type === "ihram" && "Panduan Kain Ihram & Larangan"}
                {type === "steps" && "Urutan Ibadah Umrah Step by Step"}
                {type === "mustajab" && "Tempat & Waktu Doa Mustajab"}
              </h3>
              <p className="text-[11px] text-gray-500">
                {type === "ihram" && "Tata cara memakai ihram pria & larangan"}
                {type === "steps" && "5 Rukun Manasik Umrah sesuai Sunnah"}
                {type === "mustajab" && "Raudhah, Multazam, Hijr Ismail, & Sa'i"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-5 text-sm text-gray-700">
          {type === "ihram" && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/50">
                <h4 className="font-bold text-sm text-[#004435] mb-1.5">
                  Cara Memakai Kain Ihram Pria (2 Lembar)
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-700">
                  <li><strong>Kain Bawah (Izar):</strong> Dililitkan dari pinggang hingga menutupi bawah lutut (di atas mata kaki). Boleh dikuatkan dengan ikat pinggang ihram khusus berkantong.</li>
                  <li><strong>Kain Atas (Rida'):</strong> Diselempangkan menutupi kedua pundak.</li>
                  <li><strong>Posisi Idhthiba':</strong> Hanya saat melakukan Thawaf saja, pundak kanan dibuka dengan melipat ujung kain atas di bawah ketiak kanan ke pundak kiri. Setelah selesai thawaf, pundak kanan segera ditutup kembali.</li>
                </ol>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#004435] mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Larangan-Larangan Ihram
                </h4>
                <div className="space-y-3 text-xs">
                  {IHRAM_PROHIBITIONS.map((grp) => (
                    <div key={grp.category} className="p-3 rounded-xl bg-gray-50 border border-gray-200/70">
                      <span className="font-bold text-gray-900 block mb-1.5">{grp.category}</span>
                      <ul className="space-y-1 list-disc list-inside text-gray-600">
                        {grp.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {type === "steps" && (
            <div className="space-y-3">
              {[
                {
                  step: 1,
                  title: "Ihram & Niat dari Miqat",
                  desc: "Mandi sunnah, memakai kain ihram, shalat sunnah ihram 2 rakaat di Miqat (misal Bir Ali), dan berniat 'Labbaikallahumma 'umratan'. Sejak ini larangan ihram berlaku.",
                  actionTab: "niat"
                },
                {
                  step: 2,
                  title: "Thawaf 7 Putaran Mengelilingi Ka'bah",
                  desc: "Dimulai dari garis lurus Hajar Aswad dengan Istilam (Bismillahi Allahu Akbar). Ka'bah berada di sebelah kiri badan. Berjalan 7 putaran berlawanan arah jarum jam.",
                  actionTab: "counter"
                },
                {
                  step: 3,
                  title: "Shalat Sunnah Thawaf & Minum Air Zamzam",
                  desc: "Shalat 2 rakaat di belakang Maqam Ibrahim (atau area mana saja di Masjidil Haram), lalu minum air zamzam hingga kenyang sambil berdoa menghadap kiblat.",
                  actionTab: "doa"
                },
                {
                  step: 4,
                  title: "Sa'i 7 Putaran Antara Shafa & Marwah",
                  desc: "Mulai dari Bukit Shafa dan berakhir di Bukit Marwah. Saat melewati pilar lampu hijau, disunnahkan lari-lari kecil bagi jamaah pria.",
                  actionTab: "counter"
                },
                {
                  step: 5,
                  title: "Tahallul (Cukur / Potong Rambut)",
                  desc: "Pria mencukur gundul (utama) atau memendekkan rambut. Wanita memotong ujung rambut sepanjang 1 ruas jari. Dengan tahallul, ibadah Umrah tuntas dan larangan ihram gugur.",
                  actionTab: "doa"
                }
              ].map((s) => (
                <div key={s.step} className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#004435] text-[#FFE088] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-gray-900 text-xs mb-0.5">{s.title}</h5>
                    <p className="text-[12px] text-gray-600 leading-relaxed mb-2">{s.desc}</p>
                    {onNavigateToTab && (
                      <button
                        onClick={() => {
                          onClose();
                          onNavigateToTab(s.actionTab);
                        }}
                        className="text-[11px] font-semibold text-[#004435] hover:underline inline-flex items-center gap-1"
                      >
                        Buka Panduan Terkait &rarr;
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === "mustajab" && (
            <div className="space-y-3">
              {[
                {
                  place: "Multazam (Antara Pintu Ka'bah & Hajar Aswad)",
                  desc: "Tempat paling mustajab di muka bumi untuk menumpahkan segala hajat, ampunan, dan tangisan doa kepada Allah SWT."
                },
                {
                  place: "Raudhah Asy-Syarifah di Masjid Nabawi",
                  desc: "Taman dari taman-taman surga. Rasulullah SAW bersabda bahwa area antara mimbar dan rumah beliau adalah Raudhah."
                },
                {
                  place: "Hijr Ismail (Di Bawah Talang Emas / Mizab)",
                  desc: "Bagian dalam Hijr Ismail sebenarnya termasuk bagian dari dalam Ka'bah Baitullah. Shalat dan doa di sini setara shalat di dalam Ka'bah."
                },
                {
                  place: "Puncak Bukit Shafa & Marwah Saat Sa'i",
                  desc: "Menghadap kiblat ke arah Ka'bah, bertakbir 3 kali, membaca tahlil, dan berdoa di antara jeda takbir."
                },
                {
                  place: "Saat Meminum Air Zamzam",
                  desc: "Rasulullah SAW bersabda: 'Air Zamzam itu sesuai dengan niat orang yang meminumnya' (HR. Ibnu Majah)."
                }
              ].map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#004435] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#004435] mb-0.5">{m.place}</h5>
                    <p className="text-[12px] text-gray-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/70 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#004435] text-white text-xs font-semibold hover:bg-[#0b5d4b] transition-colors"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
