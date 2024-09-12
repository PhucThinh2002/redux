const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        // Kiểm tra xem đã tồn tại trong danh sách yêu thích chưa
        const existingIndex = state.findIndex((item) => item.id === action.payload.id);
        if (existingIndex !== -1) {
          return state; // Không thêm nếu đã tồn tại
        }
        return [...state, action.payload];
      case 'REMOVE_FAVORITE':
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  };
  
  export default favoriteReducer;