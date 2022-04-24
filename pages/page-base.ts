import { Page } from '@playwright/test';
import { createLogger, transports, format, Logger } from "winston";

export class PageBase {
    protected readonly logger: Logger;
    constructor(protected readonly page: Page) {
        this.logger = createLogger({
            transports: [new transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.printf(({ timestamp, level, message }) => {
                        return `[${timestamp}] ${level}: ${message}`;
                    })
                )
            }),
            new transports.File({
                dirname: "logs",
                filename: "playwright-sample.log",
                level: "info",
                format: format.combine(
                    format.timestamp(),
                    format.splat(),
                    format.printf(({ timestamp, level, message, metadata }) => {
                        return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(
                            metadata
                        )}`;
                    })
                )
            }),],
            format: format.combine(format.metadata(), format.timestamp()),
            defaultMeta: {
                test: 'PageBase',
              },
        });
    }
}