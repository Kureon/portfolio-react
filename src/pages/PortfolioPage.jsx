import { PortfolioItemCard } from "../components/ui/PortfolioItemCard";
import { portfolioItems } from "../utils/data";

export const PortfolioPage = () => {
  return (
    {portfolioItems.map((item) => (
      <PortfolioItemCard key={item.id} item={item} />
    ))}
  )
};
