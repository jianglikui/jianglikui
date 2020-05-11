import { createStore } from "redux";

export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

const reducer = {
  [ADD]: (state) => {
    return { ...state, times: state.times + 1 };
  },
  [SUBTRACT]: (state) => ({ ...state, times: state.times - 1 }),
};

const store = createStore(function (state = { times: 0 }, action) {
  const reduce = reducer[action.type];
  if (typeof reduce === "function") {
    return reduce(state, action);
  }
  return state;
});

export const dispatch = store.dispatch;

//封装订阅方法，增加订阅时自动执行一次，增加回调函数返回state参数
export const subscribe = (callback) => {
  callback(store.getState());
  return store.subscribe(() => {
    callback(store.getState());
  });
};
