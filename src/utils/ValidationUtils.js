"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        throw new ValidationError(`Invalid email: ${email}`);
    }
}
function validateNonEmpty(input, fieldName) {
    if (!input.trim()) {
        throw new ValidationError(`${fieldName} cannot be empty`);
    }
}
function validatePositiveNumber(value, fieldName) {
    if (value <= 0) {
        throw new ValidationError(`${fieldName} must be a positive number`);
    }
}
//# sourceMappingURL=ValidationUtils.js.map