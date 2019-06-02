export default function firstNumberReducer(state = null, { type, payload }) {
  switch (type) {
    case 'updateFirstNumber':
      return payload;
    default:
      return state;
  }
};