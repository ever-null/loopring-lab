class ActionSet {

  constructor(actions) {
    actions.forEach((action) => {
      const actionName = `${action.name.substring(0,1).toLowerCase()}${action.name.substring(1)}`;
      this[actionName] = async (...args) => await action(...args);
    });
  }

}

export default ActionSet;