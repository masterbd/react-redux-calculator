export default function operationNumberReducer(state = null, { type, payload }) {
  switch (type) {
    case 'updateOperation':
      return payload;
    default:
      return state;
  }
};