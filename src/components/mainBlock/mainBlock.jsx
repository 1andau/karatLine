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


  const sizes = [
    "15", 
   "15.5",
    "16",
    "16.5",
   " 17",
   " 17.5",
    "18",
    "18.5",
    "19",
    "19.5",
    "20",
  ]
  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (

<div className="flex justify-center items-center h-screen w-screen">
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-auto max-w-7xl h-full">
    <div className="w-full md:w-2/2 bg-white-500 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2">
        <img src="/assets/1.png" alt="Image 1" className="w-full h-auto max-h-62" />
        <img src="/assets/2.png" alt="Image 2" className="w-full h-auto max-h-62" />
        <img src="/assets/3.png" alt="Image 3" className="w-full h-auto max-h-62" />
        <img src="/assets/4.png" alt="Image 4" className="w-full h-auto max-h-62" />
        <img src="/assets/5.png" alt="Image 5" className="w-full h-auto max-h-62" />
        <img src="/assets/6.png" alt="Image 6" className="w-full h-auto max-h-62" />
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
        <table className="w-full border-separate border-spacing-x-2">
          <tbody>
            {left.map((leftItem, index) => (
              <tr key={index}>
                <td className="border-b border-[#808080] py-1 px-2 text-[#2E2E30]">
                  <div className="flex justify-between ">
                    <span>{leftItem}</span>
                    <span>{right[index]}</span>
                  </div>
                </td>
                <td className="border-b border-[#808080] py-1 px-2 text-[#2E2E30]">
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

  <div className="w-full md:w-1/2 bg-black-500 overflow-y-auto p-4">

    <div className="flex items-center justify-between mt-4">
      <img src="/assets/icons/1.svg" alt="Icon 1" className="w-6 h-6" />
      <img src="/assets/icons/2.svg" alt="Icon 1" className="w-6 h-6" />
      <img src="/assets/icons/3.svg" alt="Icon 1" className="w-6 h-6" />
      <img src="/assets/icons/2.svg" alt="Icon 1" className="w-6 h-6" />
      <span className="text-[#2E2E30] text-xs">Серьги из золота</span>

      <img src="/assets/icons/2.svg" alt="Icon 1" className="w-5 h-5" />
      <span className="text-[#2E2E30] text-xs">Золотые гвоздики с фианитами</span>

    </div>

    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <span className="text-[#2E2E30] text-xs mr-2 underline decoration-dotted">18 отзывов</span>
        <img src="/assets/icons/star.svg" alt="Star" className="w-4 h-4 mr-1"/>
        <img src="/assets/icons/star.svg" alt="Star" className="w-4 h-4 mr-1"/>
        <img src="/assets/icons/star.svg" alt="Star" className="w-4 h-4 mr-1"/>
        <img src="/assets/icons/star.svg" alt="Star" className="w-4 h-4 mr-1"/>
        <img src="/assets/icons/star.svg" alt="Star" className="w-4 h-4 mr-1"/>
        <span className="text-[#2E2E30] text-xs ml-2">5.0</span>
      </div>
      <span className="text-[#2E2E30] text-xs">Код: 000-383753</span>
    </div>

    <h2 className="text-[#2E2E30]  font-bold mt-4 text-3xl	">Золотые серьги гвоздики с фианитами</h2>
    <div className="bg-[#F4F5F6] p-4 mt-4">

    <div className="border border-[#CAA212] p-2 flex items-center justify-between w-11/12 md:w-8/12">
        <span className="text-[#2E2E30] text-sm">16 501 ₽</span>
        <div className="flex items-center">
          <span className="text-[#2E2E30] text-sm mr-2">По коду ЛЕТО</span>
          <img src="/assets/icons/arrow.svg" alt="Arrow" className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5">
        <div className="flex items-center">
        <span className="text-[#2E2E30] text-xl text-sm mr-2">20 902 ₽</span>
          <span className="text-[#2E2E30] text-xl line-through mr-2">22 680 ₽</span>
          <div className="bg-[#D43939] text-white text-sm p-2 rounded">15%</div>
          </div>
          <img src="/assets/icons/down.svg" alt="Arrow" className="w-4 h-4" />

          </div> 

    </div>

    <div className="bg-[#F4F5F6] p-4 mt-4">
    <div className="flex items-center">
    <h1 className='text-[#2E2E30] text-xl ine-through mr-2'>Размер</h1>
<span className='text-[#2E2E30] underline decoration-dotted ine-through mr-2 pt-1	'>Как выбрать размер</span>

</div>

<div className="flex flex-wrap mt-4 ">
        {sizes.map((size, key) => (
        <div className="ring-size mr-2 mb-2 border border-[#808080] p-1 flex-grow text-xs text-[#2E2E30]" key={key} > {size} </div>
        ))}
        
       

      </div>
</div>



<div className="flex space-x-4 mt-4">
      <div className="border border-[#808080] p-4 flex items-center justify-between w-full">
        <span className="text-[#2E2E30] text-sm">5100 ₽ х 4</span>
        <div className="flex items-center">
          <span className="text-[#2E2E30] text-sm mr-2">Долями</span>
          <img src="/assets/icons/2.svg" alt="Arrow" className="w-4 h-4"/>
        </div>
      </div>
      <div className="border border-[#808080] p-4 flex items-center justify-between w-full">
        <span className="text-[#2E2E30] text-sm">5100 ₽ х 4</span>
        <div className="flex items-center">
          <span className="text-[#2E2E30] text-sm mr-2">Сплит</span>
          <img src="/assets/icons/2.svg" alt="Arrow" className="w-4 h-4"/>
        </div>
</div>
</div>

<button className="bg-[#2E2E30] text-white w-full p-4 flex items-center justify-between mt-4">
      <span className="text-sm">Добавить в корзину</span>
      <span className="text-sm">Размер 15</span>
    </button>


<div className="flex space-x-4 mt-4">
  <div className="border border-[#808080] p-4 flex items-center justify-between w-full">
    <span className="text-[#2E2E30] text-sm">Купить в один клик</span>
  </div>

  <div className="border border-[#808080] p-4 flex items-center max-w-[48px] max-h-[48px]">
    <div className="flex items-center">
      <img src="/assets/icons/heart.svg" alt="heart" className="w-10 h-10"/>
    </div>
  </div>

  <div className="border border-[#808080] p-4 flex items-center max-w-[48px] max-h-[48px]">
    <div className="flex items-center">
      <img src="/assets/icons/chopsticks.svg" alt="chopsticks" className="w-8 h-8"/>
    </div>
  </div>

  <div className="border border-[#808080] p-4 flex items-center max-w-[48px] max-h-[48px]">
    <div className="flex items-center">
      <img src="/assets/icons/jopa.svg" alt="share" className="w-8 h-8"/>
    </div>
  </div>
</div>



<div className="flex space-x-4 mt-4">
      <div className="border border-[#808080] p-4 flex items-center justify-between w-full ">
        <div className='flex flex-col'>
        <span className="text-[#2E2E30] text-sm">В наличии</span>
        <span className="text-[#2E2E30] text-l mr-2 font-bold	 "> В одном магазине</span>
        </div>
   

        <div className="flex items-center">
          <img src="/assets/icons/2.svg" alt="Arrow" className="w-4 h-4"/>
        </div>
      </div>

</div>



<div className="flex space-x-4 mt-4">
      <div className="border border-[#808080] p-4 flex items-center justify-between w-full ">
        <div className='flex flex-col'>
        <span className="text-[#2E2E30] text-sm">Дополните образ</span>
        <span className="text-[#2E2E30] text-l mr-2 font-bold">4 изделия</span>
        </div>
   

        <div className="flex items-center">
          <img src="/assets/icons/2.svg" alt="Arrow" className="w-4 h-4"/>
        </div>
      </div>

</div>
,
    
  </div>
    

  </div>
</div>

  )
}

export default MainBlock