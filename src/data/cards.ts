// src/data/cards.ts
interface CardsData {
  [section: string]: string[];
}

export const cardsData: CardsData = {};

// السكشنات المتوفرة
const sections = [
  "mn_al_akher",
  "khayalak",
  "min_qalbik",
  "mood",
  "waraqak",
  "instruction",
  "marawgha",
];

// استيراد الصور لكل سكشن تلقائيًا
sections.forEach((section) => {
  // globEager يحمل الصور مباشرة
  const images = import.meta.globEager(`/src/assets/cards/${section}/*.png`);

  // تخزين كل الصور في مصفوفة
  cardsData[section] = Object.values(images).map((img: any) => img.default);
});
