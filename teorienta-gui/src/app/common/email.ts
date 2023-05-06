export class Email {
    to: string;
    subject: string;
    message: string;

    constructor(to: string, subject: string, message: string) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    clean(): void {
        this.to = '';
        this.subject = '';
        this.message = '';
    }

    copy(to: string, subject: string, message: string): void {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
}
