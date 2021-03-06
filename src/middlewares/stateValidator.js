import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);
  if (!tv4.validate(getState(), stateSchema)) {
    console.log('Invalid state detected:', action.type)
  }
};
