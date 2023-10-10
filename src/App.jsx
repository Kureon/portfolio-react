import { useState } from "react";
import { portfolioItems } from "./utils/data";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

  return (
    <div className="App">
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
