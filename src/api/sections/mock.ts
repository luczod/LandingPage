export const MockGridText = {
  __component: "section.section-grid",
  description: "abc",
  title: "My Grid",
  text_grid: [
    {
      title: "Teste 1",
      description: "Coisa",
    },
    {
      title: "Teste 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
    },
    {
      title: "Teste 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
    },
  ],
  metadata: {
    background: true,
    name: "grid-one",
    section_id: "grid-one",
  },
};

export const MockGridImg = {
  __component: "section.section-grid",
  description: "abc",
  title: "Gallery",
  image_grid: [
    {
      image: {
        alternativeText: "abc",
        url: "a.svg",
      },
    },
    {
      image: {
        alternativeText: "Um livro grande aberto",
        url: "a.svg",
      },
    },
  ],
  metadata: {
    background: false,
    name: "gallery",
    section_id: "gallery",
  },
};
