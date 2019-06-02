export default function secondNumberReducer(state = null, { type, payload }) {
  switch (type) {
    case 'updateSecondNumber':
      return payload;
    default:
      return state;
  }
};