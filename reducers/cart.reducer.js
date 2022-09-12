export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
        products: [...state.products, action.payload],
      };

    default:
      throw new Error();
  }
}

export function initCart() {
  return { count: 0, products: [] };
}
