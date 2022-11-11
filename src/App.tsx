import React from "react";
import { Header } from "./components/header/Header";
import { MenuList } from "./components/menu/menu-list/Menu-list";
import pizzaMenu from '@app/mocks/pizza.json'
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <MenuList items={pizzaMenu} />
      <Footer/>
    </div>
  );
};
