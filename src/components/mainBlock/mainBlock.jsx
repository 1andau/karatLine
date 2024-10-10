import React, { useState } from 'react'


const MainBlock = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    'Описание и характеристики',
    'Отзывы (4)',
    'Оплата и доставка',
    'Гарантия и уход'
  ];

  const rings = [
    'Кольца золотые женские с фианитами',
    'Помолвочные кольца',
    'Золотые кольца',
    'Кольцо на фалангу',
    'Помолвочные кольца',
    'Золотые кольца'
  ];

  const left = [
    "Вес от", 
    "Металл", 
    "Проба",
    "Основная вставка",
    "Вес от ",
    "Вес от", 
    "Металл", 
    "Проба",
    "Основная вставка",
    "Вес от ",
    "Металл", 
    "Проба",
  ]

  const right = [
    "1.58", 
    "Золото", 
    "585",
    "Фианит",
    "1.58", 
    "Золото", 
    "585",
    "Фианит",
    "1.58", 
    "Золото", 
    "585",
    "Фианит",
  ]
  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (


<div className="flex justify-center items-center h-screen w-screen">
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-auto max-w-7xl h-full">
    <div className="w-full md:w-2/3 bg-white-500 overflow-y-auto p-4">
      <h1 className="text-[#2E2E30]">Первая секция</h1>
      <div className="grid grid-cols-2 gap-2">
        <img src="/assets/1.png" alt="Image 1" className="w-full h-auto" />
        <img src="/assets/2.png" alt="Image 2" className="w-full h-auto" />
        <img src="/assets/3.png" alt="Image 3" className="w-full h-auto" />
        <img src="/assets/4.png" alt="Image 4" className="w-full h-auto" />
        <img src="/assets/5.png" alt="Image 5" className="w-full h-auto" />
        <img src="/assets/6.png" alt="Image 6" className="w-full h-auto" />
      </div>
      <div className="mt-4">
        <ul className="flex flex-wrap text-[#2E2E30] text-lg font-inter list-none p-0 space-x-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer relative uppercase text-sm"
              onClick={() => setActiveCategory(index)}
            >
              {category}
              {activeCategory === index && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#CAA212]"></div>
              )}
            </li>
          ))}
        </ul>
        <div className="h-px bg-white"></div>
      </div>

      <div className="mt-4">
        <h2 className="text-[#2E2E30] text-2xl leading-9 mb-2">Описание</h2>
        <p className="text-[#2E2E30] text-base leading-6">Артикул товара А910227 Код: 000-383753</p>
        <p className="text-[#2E2E30] text-base leading-6 mt-2">
          Кольцо из коллекции GALATEA — это воплощение утонченного стиля, вдохновленное образом морской нимфы Галатеи.
        </p>
        <p className="text-[#2E2E30] text-base leading-6 mt-2">
          Кольцо инкрустировано крупным фианитом: глубокий синий оттенок фианита символизирует морские глубины, где обитала Галатея. Каждая деталь этого украшения тщательно продумана, что отражает стремление наших мастеров к безграничному совершенству.
        </p>
        <p className="text-[#2E2E30] text-base leading-6 mt-2">
          Вдохновение для создания этой коллекции черпалось из древнегреческой мифологии, воспевавшей красоту нимф и богинь. Кольцо GALATEA подчеркивает вашу индивидуальность и тонкий вкус, добавляя вашему образу изысканность и элегантность.
        </p>
        <p className="text-[#2E2E30] text-base leading-6 mt-2">
          Изделие выполнено из серебра 925 пробы, покрыто родием.
        </p>
        <p className='text-[#2E2E30]'>Фианит - 9*11 мм</p>
      </div>

      <div className="mt-4">
        <div className="flex space-x-2">
          {rings.map((ring, index) => (
            <div key={index} className="border border-[#808080] p-2 flex-grow text-xs text-[#2E2E30]">
              {ring}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 bg-[#F4F5F6]">
        <h3 className="text-lg mb-2 text-[#2E2E30]">Характеристики</h3>
        <table className="w-full border-separate border-spacing-x-4">
          <tbody>
            {left.map((leftItem, index) => (
              <tr key={index}>
                <td className="border-b border-[#808080] py-2 px-4 text-[#2E2E30]">
                  <div className="flex justify-between">
                    <span>{leftItem}</span>
                    <span>{right[index]}</span>
                  </div>
                </td>
                <td className="border-b border-[#808080] py-2 px-4 text-[#2E2E30]">
                  <div className="flex justify-between">
                    <span>{leftItem}</span>
                    <span>{right[index]}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="w-full md:w-1/3 bg-green-500 overflow-y-auto p-4">
      <h1 className="text-[#2E2E30] uppercase">Вторая секция</h1>
      <p className="text-[#2E2E30]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>


  )
}

export default MainBlock