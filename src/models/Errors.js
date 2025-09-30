"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CriticalError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CriticalError';
        this.handleCriticalFailure(message);
    }
    handleCriticalFailure(msg) {
        console.error(`CRITICAL: ${msg}`);
        throw new Error(`Unrecoverable: ${msg}`);
    }
}
//# sourceMappingURL=Errors.js.map