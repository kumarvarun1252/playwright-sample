import { Page, Locator, ElementHandle } from '@playwright/test';
import { Logger } from "winston";
import { logger } from "@utils/logger";

export class PageBase {
    protected readonly logger: Logger;
    constructor(protected readonly page: Page) {
        this.logger = logger;
    }

    async handleException(error: Error | unknown): Promise<void> {
        if (error instanceof Error) {
          console.error('Exception occurred:', error.message);
        } else {
          console.error('Non-Error exception occurred:', error);
        }
        throw error;
      }
    
      async click(locator: Locator): Promise<void> {
        try {
          await locator.click();
        } catch (error) {
          await this.handleException(error);
        }
      }
    
      async fill(locator: Locator, text: string): Promise<void> {
        try {
          await locator.fill(text);
        } catch (error) {
          await this.handleException(error);
        }
      }
    
      async press(locator: Locator, key: string): Promise<void> {
        try {
          await locator.press(key);
        } catch (error) {
          await this.handleException(error);
        }
      }
    
      // Add more common actions as needed
    }