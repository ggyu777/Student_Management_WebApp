import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const useMwReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatchWithMiddleware = action => {
    if (typeof action === "function") {
      return action(dispatch, state, navigate);
    }

    dispatch(action);
  };

  return [state, dispatchWithMiddleware];
};

export default useMwReducer;
