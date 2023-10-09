export const PortfolioItemPage = () => {
  return (
    <div>
      <h1>{selectedItem.title}</h1>
      <p>{selectedItem.description}</p>
      <img src={selectedItem.imageUrl} alt={selectedItem.title} />
    </div>
  );
};
