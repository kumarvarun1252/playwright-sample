// page-locators.ts

import { Locator } from '@playwright/test';

export const PageLocators = {
  searchInput: "input[name='q']",
  // Add more locators as needed
} as const;

// export const LoginLocators = {
//   usernameInput: (label: string) => Locator('label').withText(label).sibling('input'),
//   passwordInput: (label: string) => Locator('label').withText(label).sibling('input'),
//   loginButton: (label: string) => Locator('button').withText(label),
//   messageList: Locator('li'),
//   clearButton: Locator('button').withText('clear'),
//   logoutButton: Locator('button').withText('Logout'),
// };