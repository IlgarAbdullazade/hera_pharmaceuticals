export const calculateStockCounts = (item, quantity) => {
  const qty = quantity;
  const stock = item.product.in_stock;
  if (stock < qty) {
    return false;
  }
  return true;
};
