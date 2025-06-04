import React, { useState } from "react";

export default function Woman() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Увлажняющий крем для лица",
      category: "skin-care",
      price: "3500 ₽",
      image: "https://avatars.mds.yandex.net/get-mpic/4529750/img_id4150359159483747975.jpeg/orig",
      description: "Легкая текстура с экстрактами алоэ и зеленого чая.",
    },
    {
      id: 2,
      name: "Тушь для ресниц Velvet Black",
      category: "makeup",
      price: "1800 ₽",
      image: "https://avatars.mds.yandex.net/get-mpic/4219717/2a0000018a674098a09db519d3f23d186091/orig",
      description: "Объемная тушь с эффектом удлинения на весь день.",
    },
    {
      id: 3,
      name: "Парфюмированная вода Rose Bloom",
      category: "fragrance",
      price: "5200 ₽",
      image: "https://cdn1.ozone.ru/s3/multimedia-x/6398686173.jpg",
      description: "Цветочные ноты с акцентом на розу и свежесть.",
    },
    {
      id: 4,
      name: "Маска для волос Deep Repair",
      category: "hair-care",
      price: "2700 ₽",
      image: "https://main-cdn.sbermegamarket.ru/mid9/hlr-system/1481104211/600001109802b0.jpeg",
      description: "Интенсивное восстановление структуры волос.",
    },
    {
      id: 5,
      name: "Набор для ухода за кожей",
      category: "sets",
      price: "9800 ₽",
      image: "https://avatars.mds.yandex.net/get-mpic/4561793/img_id8886384936404850180.jpeg/orig",
      description: "Уход: очищение, тонизирование, увлажнение.",
    },
    {
      id: 6,
      name: "Тональный крем Natural Glow",
      category: "makeup",
      price: "3100 ₽",
      image: "https://i.ebayimg.com/images/g/54YAAOSwzO9d4m4R/s-l1200.jpg",
      description: "Создает естественный финиш с легким мерцанием.",
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products.filter(
          (p) =>
            p.category === activeTab &&
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const reviews = [
    {
      id: 1,
      user: "Алина С.",
      rating: 5,
      comment:
        "Очень понравился набор для ухода! Кожа стала намного мягче после первого применения.",
    },
    {
      id: 2,
      user: "Екатерина М.",
      rating: 4,
      comment:
        "Тушь держится целый день без осыпания. Единственное — сложно найти оттенок под свой цвет глаз.",
    },
    {
      id: 3,
      user: "Дарья Л.",
      rating: 5,
      comment:
        "Рекомендации по продуктам поразили — будто знали мои предпочтения!",
    },
  ];

  const categories = [
    { id: "all", label: "Все товары" },
    { id: "skin-care", label: "Уход за кожей" },
    { id: "makeup", label: "Макияж" },
    { id: "hair-care", label: "Уход за волосами" },
    { id: "fragrance", label: "Парфюмерия" },
    { id: "sets", label: "Подарочные наборы" },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-serif italic text-pink-600">Lumina</h1>
          <nav className="hidden md:flex space-x-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`capitalize hover:text-pink-500 transition ${
    activeTab === cat.id ? "text-pink-600 font-semibold" : ""
}`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left capitalize py-2 hover:text-pink-500 transition ${
    activeTab === cat.id ? "text-pink-600 font-semibold" : ""
}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-800 leading-tight">
              Откройте для себя мир изысканной красоты
            </h2>
            <p className="mt-4 text-gray-600">
              Подберите средства, которые подчеркнут вашу уникальность и создадут
              совершенный образ.
            </p>
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
              Посмотреть новинки
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://i.pinimg.com/originals/be/66/af/be66af82c61bcf65e6a154d81c3a6d08.jpg"
              alt="Hero"
              className="rounded-lg shadow-xl max-w-full h-auto transform rotate-2"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">Рекомендуем:</p>
              <p className="text-sm text-gray-600">
                Тональный крем Natural Glow
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <path
              d="M100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0ZM100 180C55.8174 180 20 144.183 20 100C20 55.8174 55.8174 20 100 20C144.183 20 180 55.8174 180 100C180 144.183 144.183 180 100 180Z"
              fill="#FBB6C2"
            />
            <circle cx="50" cy="50" r="10" fill="#FBB6C2" />
            <circle cx="150" cy="50" r="10" fill="#FBB6C2" />
            <circle cx="100" cy="150" r="10" fill="#FBB6C2" />
          </svg>
        </div>
      </section>

      {/* Products section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif italic text-center text-gray-800 mb-12">
            Популярные товары
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                    <button className="m-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
                      В корзину
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg">{product.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {product.description}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-pink-600 font-semibold">
                      {product.price}
                    </span>
                    <button className="text-gray-500 hover:text-pink-500 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif italic text-center text-gray-800 mb-12">
            Что говорят наши клиенты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-pink-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-bold">
                    {review.user.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h5 className="font-medium">{review.user}</h5>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gradient-to-br from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-serif italic mb-6">
            Хотите получать персональные рекомендации?
          </h3>
          <p className="max-w-xl mx-auto mb-8">
            Пройдите наш мини-опрос, и мы подберем идеальные средства ухода и макияжа
            именно для вас.
          </p>
          <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-50 transition">
            Начать подборку
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-serif italic text-pink-600">Lumina</h4>
              <p className="text-gray-600 mt-2 max-w-xs">
                Ваш источник изысканной красоты и качественных средств ухода.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Быстрая навигация</h5>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveTab(cat.id)}
                      className="text-gray-600 hover:text-pink-500 transition"
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Социальные сети</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-gray-500 text-sm">
            &copy; 2025 Lumina Beauty Shop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
