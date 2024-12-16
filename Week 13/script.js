document.addEventListener("DOMContentLoaded", () => {
  const books = [
    {
      title: "Đắc nhân tâm",
      author: "Dale Carnegie",
      cover: "book-dac-nhan-tam.jpg",
      summary:
        "A timeless guide to building meaningful relationships and achieving success by understanding and influencing people.",
      reviews: [
        "An inspiring book that changes the way you think about relationships.",
        "A must-read for personal development.",
      ],
      rating: 4.8,
      purchaseLink:
        "https://tiki.vn/sach-dac-nhan-tam-kho-lon-p247328675.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.269323_Y.1851643_Z.3864060_CN.Tu-duy%2C-Ky-nang-song&itm_medium=CPC&itm_source=tiki-ads&spid=247328676",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      cover: "book-rich-dad-poor-dad.jpg",
      summary:
        "A story about the lessons on wealth and financial freedom shared by two influential father figures.",
      reviews: [
        "Eye-opening and practical!",
        "Great for anyone starting their financial journey.",
      ],
      rating: 4.7,
      purchaseLink:
        "https://tiki.vn/day-con-lam-giau-tron-bo-13-tap-p263246321.html?spid=263246322",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "book-atomic-habits.jpg",
      summary:
        "Learn how small changes can compound into massive improvements in your daily life.",
      reviews: [
        "Incredibly practical and motivating.",
        "A game-changer for building good habits.",
      ],
      rating: 4.2,
      purchaseLink:
        "https://tiki.vn/atomic-habits-thay-doi-ti-hon-hieu-qua-bat-ngo-p270205503.html?spid=276652777",
    },
  ];

  const bookList = document.getElementById("book-list");

  // Render books dynamically
  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.summary}</p>
            <p><strong>Rating:</strong> ${renderStars(
              book.rating
            )}(${book.rating.toFixed(1)})</p>
            <div class="reviews">
                <h4>Reviews:</h4>
                <ul>
                    ${book.reviews
                      .map((review) => `<li>${review}</li>`)
                      .join("")}
                </ul>
            </div>
            <button onclick="addReview('${book.title}')">Add Review</button>
            <a href="${
              book.purchaseLink
            }" class="purchase-link" target="_blank">Purchase</a>
        `;

    bookList.appendChild(bookCard);
  });
  // Render stars based on rating
  function renderStars(rating) {
    const fullStars = Math.floor(rating); // Full stars (★)
    const halfStar = rating % 1 >= 0.5 ? "★" : ""; // Half star
    const emptyStars = 5 - Math.ceil(rating); // Empty stars (☆)
    return "★".repeat(fullStars) + halfStar + "☆".repeat(emptyStars);
  }
});

// Function to add a review
function addReview(bookTitle) {
  const newReview = prompt(`Enter your review for "${bookTitle}":`);
  if (newReview) {
    alert(`Your review for "${bookTitle}" has been added!`);
  }
}
