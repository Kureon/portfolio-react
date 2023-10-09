import React, { useState } from "react";
import "./App.css";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

  return (
    <div className="App">
      <PortfolioItemPage selectedItem={selectedItem} />
    </div>
  );
};
