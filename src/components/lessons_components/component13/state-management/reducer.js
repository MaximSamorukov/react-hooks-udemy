import { users } from './users';

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'ADD':

      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          tel: payload.tel,
        }
      ];
    case 'RESTORE':
      return users;
    case 'DELETE':
      const newState = state.filter((i) => i.id !== payload.id);
      return newState;
    default:
      return users;
  }
};

const reducerOnSelect = (state, {type, payload}) => {
  switch (type) {
    case 'SELECT':
      return {
        id: payload.id,
      };
    default:
      return {
        id: null,
      };
  }
};

export { reducerOnSelect, reducer };