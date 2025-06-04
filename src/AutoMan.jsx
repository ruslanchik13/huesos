import React, { useState } from 'react';

const AutoMan = () => {
    const [activeTab, setActiveTab] = useState('about');

    const services = [
        { id: 1, name: "Диагностика", description: "Полная диагностика автомобиля перед ремонтом.", price: "от 1500 ₽" },
        { id: 2, name: "Замена масла", description: "Профессиональная замена моторного и трансмиссионного масла.", price: "от 900 ₽" },
        { id: 3, name: "Ремонт двигателя", description: "Капитальный ремонт и обслуживание двигателей всех типов.", price: "от 10 000 ₽" },
        { id: 4, name: "Тормозная система", description: "Обслуживание и восстановление тормозной системы.", price: "от 3000 ₽" },
        { id: 5, name: "Подвеска", description: "Ремонт и комплексная замена элементов подвески.", price: "от 2500 ₽" },
        { id: 6, name: "Электрика", description: "Поиск неисправностей и ремонт электронных систем.", price: "от 2000 ₽" },
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-500">AutoFix</h1>
                    <nav className="hidden md:flex space-x-6">
                        <button onClick={() => setActiveTab('about')} className={`hover:text-blue-400 transition ${activeTab === 'about' ? 'text-blue-400' : ''}`}>О нас</button>
                        <button onClick={() => setActiveTab('services')} className={`hover:text-blue-400 transition ${activeTab === 'services' ? 'text-blue-400' : ''}`}>Услуги</button>
                        <button onClick={() => setActiveTab('contact')} className={`hover:text-blue-400 transition ${activeTab === 'contact' ? 'text-blue-400' : ''}`}>Контакты</button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="absolute inset-0 bg-[url('https://brinmax.ru/800/600/https/www.arbeiterkammer.at/infopool/bilderas/AdobeStock_98697755_Automechaniker_PhotographeeEU.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Профессиональный ремонт автомобилей</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Качественный сервис для вашего авто — с опытом более 10 лет. Мы делаем ваш автомобиль лучше.
                    </p>
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">
                        Записаться на диагностику
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16">
                {activeTab === 'about' && (
                    <section id="about" className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">О нас</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <img src="https://i.pinimg.com/736x/e5/7c/6f/e57c6f6ee04337cdac306a4a36f7202e.jpg" alt="Автосервис" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Надежность и качество</h3>
                                <p className="text-gray-400 mb-4">
                                    Мы специализируемся на комплексном ремонте и техническом обслуживании автомобилей любых марок.
                                    Наши мастера имеют большой опыт работы и используют современное оборудование.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Современное оборудование
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Опытные мастера
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Гарантия на все виды работ
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'services' && (
                    <section id="services" className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">Наши услуги</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <div key={service.id} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-blue-900/20 transition group">
                                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                    <p className="text-gray-400 mb-4">{service.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="font-medium text-blue-400">{service.price}</span>
                                        <button className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition">
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {activeTab === 'contact' && (
                    <section id="contact" className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">Контакты</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold mb-4">Свяжитесь с нами</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Имя</label>
                                        <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                        <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Сообщение</label>
                                        <textarea id="message" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    </div>
                                    <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition">
                                        Отправить
                                    </button>
                                </form>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold mb-4">Информация</h3>
                                <div className="space-y-4 text-gray-400">
                                    <p>
                                        <strong>Адрес:</strong><br />
                                        г. Москва, ул. Автозаводская, д. 5
                                    </p>
                                    <p>
                                        <strong>Телефон:</strong><br />
                                        +7 (495) 123-45-67
                                    </p>
                                    <p>
                                        <strong>Email:</strong><br />
                                        info@autofix.ru
                                    </p>
                                    <p>
                                        <strong>Время работы:</strong><br />
                                        Пн-Сб: 9:00 - 19:00<br />
                                        Вс: выходной
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <iframe
                                        title="Location Map"
                                        src="https://maps.google.com/maps?q=moscow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="200"
                                        className="border-0 rounded"
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-8">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} AutoFix. Все права защищены.</p>
                </div>
            </footer>
        </div>
    );
};

export default AutoMan;
