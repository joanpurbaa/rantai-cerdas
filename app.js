const data = {
  materi: [
    {
      title: "Fondasi Web Development",
      description: "Pelajari HTML, CSS, Tailwind, dan SEO untuk website responsif dan terstruktur.",
      techs: ["HTML", "CSS", "Tailwind CSS", "SEO Dasar"]
    },
    {
      title: "Interaktivitas & Animasi",
      description: "Kuasai JavaScript, TypeScript, GSAP, dan Fetch API untuk website interaktif.",
      techs: ["JavaScript", "TypeScript", "DOM Manipulation", "GSAP", "AJAX/Fetch API"]
    },
    {
      title: "Frontend & Backend Development",
      description: "Gunakan React.js, Node.js, MongoDB, dan Prisma untuk aplikasi keren dengan autentikasi JWT.",
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma", "JWT"]
    },
    {
      title: "Deployment & Pengelolaan Proyek",
      description: "Belajar Git, Next.js, dan deploy otomatis ke Vercel dengan CI/CD.",
      techs: ["Git", "GitHub", "Next.js", "NextAuth", "Vercel", "CI/CD"]
    }
  ],
  alurBelajar: [
    {
      bulan: "Bulan ke-1",
      title: "Fondasi Web Development",
      description: "Belajar dasar pembuatan website dengan HTML & CSS, styling dengan Tailwind CSS, serta optimasi SEO untuk performa yang lebih baik."
    },
    {
      bulan: "Bulan ke-2",
      title: "Interaktivitas & Animasi",
      description: "Memahami JavaScript & TypeScript, membuat animasi interaktif dengan GSAP, serta mengambil data dari API menggunakan Fetch API."
    },
    {
      bulan: "Bulan ke-3",
      title: "Frontend & Backend Development",
      description: "Membangun aplikasi full-stack menggunakan React.js di frontend, Node.js & MongoDB di backend, serta autentikasi dengan JWT."
    },
    {
      bulan: "Bulan ke-4",
      title: "Deployment & Pengelolaan Proyek",
      description: "Mengelola kode dengan Git, membangun aplikasi SSR dengan Next.js, serta menerapkan deployment otomatis dengan Vercel dan CI/CD."
    }
  ],
  kelas: [
    {
      title: "Web Development Dasar",
      description: "Belajar HTML, CSS, dan Tailwind untuk membangun halaman web statis dan SEO-friendly.",
      duration: "1 Bulan",
      price: "Rp 300.000"
    },
    {
      title: "JavaScript & Interaktivitas",
      description: "Pahami JavaScript dari dasar hingga membuat website interaktif dengan Fetch API & GSAP.",
      duration: "1 Bulan",
      price: "Rp 400.000"
    },
    {
      title: "Frontend Developer",
      description: "Belajar React.js dan Next.js untuk membangun UI interaktif",
      duration: "1 Bulan",
      price: "Rp 500.000"
    },
    {
      title: "Backend Developer",
      description: "Mempelajari Node.js, Express, dan MongoDB untuk membangun server dan API.",
      duration: "1 Bulan",
      price: "Rp 600.000"
    },
    {
      title: "Full-Stack Development",
      description: "Menguasai MERN Stack dan deployment aplikasi dengan CI/CD.",
      duration: "1 Bulan",
      price: "Rp 700.000"
    },
    {
      title: "Paket Lengkap Web Developer",
      description: "Mencakup semua modul dari dasar hingga full-stack dalam 4 bulan intensif.",
      duration: "4 Bulan",
      price: "Rp 2.500.000"
    }
  ],
  faqData : [
    {
      question: "Apakah seorang pemula bisa ikut belajar?",
      answer: "Tentu aja! Nggak perlu takut kalau masih newbie. Kita mulai dari dasar banget, jadi kamu bakal dibimbing step-by-step sampai paham. Pokoknya, nggak ada kata terlambat buat belajar hal baru!"
    },
    {
      question: "Apa bisa mendaftar jika tidak memiliki pengalaman dengan coding?",
      answer: "100% bisa! Justru program ini dirancang buat yang belum pernah ngoding sama sekali. Kita bakal ngajarin dari nol, jadi kamu nggak perlu background IT. Cukup modal semangat dan rasa penasaran, selebihnya kita bantu!"
    },
    {
      question: "Apa aja metode belajar yang kami sediakan?",
      answer: "Belajar di sini fleksibel banget! Ada video tutorial biar kamu bisa belajar sambil santai, latihan interaktif buat nguji pemahaman, plus forum diskusi buat tanya-jawab kalau ada yang bikin bingung. Dijamin nggak bakal ngerasa belajar sendirian!"
    },
    {
      question: "Apakah saya perlu memiliki perangkat khusus untuk mengikuti program ini?",
      answer: "Nggak perlu perangkat canggih! Cukup punya laptop dengan koneksi internet udah cukup buat mulai belajar. Asalkan bisa buka browser, kamu bisa ikutan. Nggak ada alasan buat nggak mulai sekarang!"
    },
    {
      question: "Bagaimana jika saya tidak dapat mengikuti jadwal belajar yang disarankan?",
      answer: "Santai aja! Materinya bisa diakses kapan aja dan diulang sepuasnya. Jadi kamu bebas belajar sesuai ritme sendiri, nggak perlu khawatir ketinggalan. Mau belajar pagi, siang, malem, atau bahkan sambil rebahan, semuanya bisa!"
    }
  ]
};

const judulWrapper = document.getElementById("judulWrapper");
const barWrapper = document.getElementById("barWrapper");
const descWrapper = document.getElementById("descWrapper");
const faqList = document.getElementById("faqList");

const cardWrapper = document.getElementById("cardWrapper");
data.materi.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("col-span-2", "bg-zinc-900", "text-orange-50", "rounded-[50px]", "px-14", "py-8", "flex", "flex-col");

  card.innerHTML = `
    <h3 class="text-2xl font-semibold mt-4">${item.title}</h3>
    <p class="mt-2 text-lg font-normal flex-grow">${item.description}</p>
    <div class="mt-20 flex gap-3 flex-wrap">
      ${item.techs.map(tech => `<p class="bg-zinc-800 hover:bg-amber-500 py-2 px-3 rounded-md">${tech}</p>`).join('')}
    </div>
  `;

  cardWrapper.appendChild(card);
});

data.alurBelajar.forEach(item => {
  judulWrapper.innerHTML += `
    <div class="shadow-lg rounded-lg">
      <h2 class="text-xl">${item.bulan}</h2>
      <h1 class="mt-2 text-3xl font-bold">${item.title}</h1>
    </div>
  `;

  barWrapper.innerHTML += `
    <div class="flex items-center gap-3 py-10 justify-center">
      <p>⭐</p>
      <div class="h-2 w-full bg-amber-300 rounded-full"></div>
    </div>
  `;

  descWrapper.innerHTML += `
    <div class="shadow-lg rounded-lg">
      <p class="text-lg">${item.description}</p>
    </div>
  `;
});

const kelasWrapper = document.getElementById("kelasWrapper");
data.kelas.forEach(kelas => {
  kelasWrapper.innerHTML += `
    <div class="col-span-6 h-[280px] flex flex-col justify-between bg-zinc-900 rounded-3xl p-8">
      <div>
        <h2 class="text-2xl font-bold text-amber-400">${kelas.title}</h2>
        <p class="mt-3 text-lg">${kelas.description}</p>
      </div>
      <div class="w-full h-[0.1px] bg-zinc-700 rounded-full"></div>
      <div class="space-y-2">
        <div class="flex justify-between">
          <h3>Estimasi</h3>
          <p class="text-amber-400">${kelas.duration}</p>
        </div>
        <div class="flex justify-between">
          <h3>Harga</h3>
          <p class="text-amber-400">${kelas.price}</p>
        </div>
      </div>
    </div>
  `;
});

data.faqData.forEach(item => {
  const faqItem = document.createElement("li");
  faqItem.classList.add("border-orange-100", "border-y", "p-5", "faq-item");

  faqItem.innerHTML = `
    <div class="flex items-center justify-between gap-4 py-4">
      <h2 class="text-4xl font-medium flex-1">${item.question}</h2>
      <img class="w-14 h-14 chevron-icon transition-transform duration-300 cursor-pointer" src="images/icons/chevron-down.svg" alt="Chevron Icon">
    </div>
    <p class="text-2xl answer max-h-0 overflow-hidden transition-all duration-300 ease-in-out">${item.answer}</p>
  `;

  faqList.appendChild(faqItem);

  const question = faqItem.querySelector("h2");
  const chevronIcon = faqItem.querySelector(".chevron-icon");
  const answer = faqItem.querySelector(".answer");

  const toggleFAQ = () => {
    if (faqItem.classList.contains("active")) {
      faqItem.classList.remove("active");
      answer.style.maxHeight = "0";
      chevronIcon.src = "images/icons/chevron-down.svg";
      chevronIcon.style.transform = "rotate(0deg)";
    } else {
      document.querySelectorAll(".faq-item.active").forEach(activeItem => {
        activeItem.classList.remove("active");
        activeItem.querySelector(".answer").style.maxHeight = "0";
        activeItem.querySelector(".chevron-icon").src = "images/icons/chevron-down.svg";
        activeItem.querySelector(".chevron-icon").style.transform = "rotate(0deg)";
      });
      faqItem.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      chevronIcon.style.transform = "rotate(180deg)";
    }
  };

  question.addEventListener("click", toggleFAQ);
  chevronIcon.addEventListener("click", toggleFAQ);
});

