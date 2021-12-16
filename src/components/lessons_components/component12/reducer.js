function reducer(state, action) {
  switch(action.type) {
    case 'X2':
      return {
        count: state.count * 2,
      };
    case 'X3':
      return {
        count: state.count * 3,
      };
    case 'X4':
      return {
        count: state.count * 4,
      };
    case 'X5':
      return {
        count: state.count * 5,
      };
    case '/2':
      return {
        count: state.count / 2,
      };
    case '/3':
      return {
        count: state.count / 3,
      };
    case '/4':
      return {
        count: state.count / 4,
      };
    case '/5':
      return {
        count: state.count / 5,
      };
    case '>1<':
      return {
        count: 1,
      };
    default:
      return state
  }
}

export { reducer };