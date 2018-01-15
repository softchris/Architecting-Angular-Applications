class Dispatcher {
    constructor() { this.listeners = []; }
    dispatch(message) { }
    register(listener) { this.listeners.push(listener); }
}

const dispatcher = new Dispatcher();

export default dispatcher;