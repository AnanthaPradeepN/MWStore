 class CriticalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CriticalError';
    this.handleCriticalFailure(message);
  }

  private handleCriticalFailure(msg: string): never {
    console.error(`CRITICAL: ${msg}`);
    throw new Error(`Unrecoverable: ${msg}`);
  }
}
