export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
        products: getUpdatedItems(state, action.payload),
      };
    case "remove":
      return getUpdatedItemsAfterRemoval(state, action.payload);
    case "reduce":
      return {
        count: state.count - 1,
        products: getUpdatedItemsAfterReducing(state, action.payload),
      };

    default:
      throw new Error();
  }
}

export function initCart() {
  return { count: 0, products: [] };
}

function getUpdatedItems(state, payload) {
  const existing = state.products.findIndex(
    (product) => product.id === payload.id
  );
  if (existing === -1) {
    return [...state.products, { ...payload, count: 1 }];
  } else {
    const updated = state.products.map((product) => {
      if (product.id === payload.id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    return [...updated];
  }
}

function getUpdatedItemsAfterRemoval(state, id) {
  const count = state.count;
  const updated = state.products.filter((product) => product.id !== id);
  return { count: updated.length, products: [...updated] };
}

function getUpdatedItemsAfterReducing(state, id) {
  let updated = state.products.map((product) => {
    if (product.id === id) {
      return { ...product, count: product.count - 1 };
    }
    return product;
  });
  updated = updated.filter((item) => item.count > 0);
  return [...updated];
}
