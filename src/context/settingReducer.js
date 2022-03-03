const settingReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_AMOUNT":
      let newAmount = action.payload;
      if (newAmount < 1) {
        newAmount = 1;
      }

      if (newAmount > 20) {
        newAmount = 20;
      }
      return { ...state, amount: newAmount };

    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };
    case "CHANGE_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "END_SETTING":
      return { ...state, setting: false };
    case "START_SETTING":
      return { ...state, setting: true };
    default:
      throw new Error(
        `Should reach that , there is no such action ${action.type}`
      );
  }
};
export default settingReducer;
