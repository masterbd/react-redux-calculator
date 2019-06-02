export default function firstNumberReducer(state = null, { type, payload }) {
  switch (type) {
    case 'updateFirstNumber':
      return (payload === undefined) ? null : payload;
    default:
      return state;
  }
};