import React, {useState} from 'react';
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from './hop.png';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if(category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
       <section className="menu section">
        <div className="title">
          <div className='welcome'>
            <h1>Welcome To Hoppy Hour!</h1>
          </div>
          <img src={logo} alt="logo" className="logo" />
            <h2>Our Selection</h2>
          <div className="underline"></div>
        </div>
        <Categories
         categories={categories}
         activeCategory={activeCategory}
         filterItems={filterItems}
         />
         <menu items={menuItems} />
      </section>

    </main>
  );
};

export default App;