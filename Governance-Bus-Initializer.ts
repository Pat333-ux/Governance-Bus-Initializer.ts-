export class GovernanceBus {
  constructor() {
    this.channels = new Map();
  }

  register(moduleName, handler) {
    this.channels.set(moduleName, handler);
  }

  dispatch(target, payload) {
    const handler = this.channels.get(target);
    return handler ? handler(payload) : "No handler";
  }
}
