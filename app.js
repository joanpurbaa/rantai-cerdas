const data = [
  [
    "Fondasi Web Development",
    "Pelajari HTML, CSS, Tailwind, dan SEO untuk website responsif dan terstruktur.",
    ["HTML", "CSS", "Tailwind CSS", "SEO Dasar"]
  ],
  [
    "Interaktivitas & Animasi",
    "Kuasai JavaScript, TypeScript, GSAP, dan Fetch API untuk website interaktif.",
    ["JavaScript", "TypeScript", "DOM Manipulation", "GSAP", "AJAX/Fetch API"]
  ],
  [
    "Frontend & Backend Development",
    "Gunakan React.js, Node.js, MongoDB, dan Prisma untuk aplikasi keren dengan autentikasi JWT.",
    ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma", "JWT"]
  ],
  [
    "Deployment & Pengelolaan Proyek",
    "Belajar Git, Next.js, dan deploy otomatis ke Vercel dengan CI/CD.",
    ["Git", "GitHub", "Next.js", "NextAuth", "Vercel", "CI/CD"]
  ]
];

const cardWrapper = document.getElementById("cardWrapper");

data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("col-span-2", "bg-zinc-900", "text-orange-50", "rounded-[50px]", "px-14", "py-8", "flex", "flex-col");

  const title = document.createElement("h3");
  title.classList.add("text-2xl", "font-semibold", "mt-4");
  title.textContent = item[0];
  card.appendChild(title);

  const description = document.createElement("p");
  description.classList.add("mt-2", "text-lg", "font-normal", "flex-grow");
  description.textContent = item[1];
  card.appendChild(description);

  const techList = document.createElement("div");
  techList.classList.add("mt-20", "flex", "gap-3", "flex-wrap");
  item[2].forEach(tech => {
    const listItem = document.createElement("p");
    listItem.classList.add("bg-zinc-800", "hover:bg-amber-500", "py-2", "px-3", "rounded-md")
    listItem.textContent = tech;
    techList.appendChild(listItem);
  });
  card.appendChild(techList);

  cardWrapper.appendChild(card);
});