const stories = [
  {
    id: 1,
    title: "Truyện A",
    cover: "https://via.placeholder.com/150",
    desc: "Giới thiệu ngắn gọn.",
  },
  {
    id: 2,
    title: "Truyện B",
    cover: "https://via.placeholder.com/150",
    desc: "Giới thiệu hấp dẫn.",
  },
];

const listEl = document.getElementById("story-list");

stories.forEach((story) => {
  const card = document.createElement("div");
  card.className = "story-card";
  card.innerHTML = `
    <img src="${story.cover}" alt="${story.title}" style="width:100%; border-radius:8px;">
    <h3>${story.title}</h3>
    <p>${story.desc}</p>
    <a href="story.html?id=${story.id}">Đọc ngay</a>
  `;
  listEl.appendChild(card);
});
