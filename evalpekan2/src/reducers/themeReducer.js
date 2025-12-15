export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // Menggunakan 'dark' dan 'light' agar sesuai dengan className di App.css
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light' 
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export const initialThemeState = {
  theme: 'light'
};