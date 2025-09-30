
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}


function validateEmail(email: string): void {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    throw new ValidationError(`Invalid email: ${email}`);
  }
}

function validateNonEmpty(input: string, fieldName: string): void {
  if (!input.trim()) {
    throw new ValidationError(`${fieldName} cannot be empty`);
  }
}


function validatePositiveNumber(value: number, fieldName: string): void {
  if (value <= 0) {
    throw new ValidationError(`${fieldName} must be a positive number`);
  }
}
