const stateManager = (function() {
  let state = {
    items: []
  };

  const subscribers = [];

  function getState() {
    return state;
  }

  function setState(newState) {
    state = { ...state, ...newState };
    subscribers.forEach(callback => callback());
  }

  function subscribe(callback) {
    subscribers.push(callback);
  }

  return {
    getState,
    setState,
    subscribe
  };
})();

export default stateManager;
