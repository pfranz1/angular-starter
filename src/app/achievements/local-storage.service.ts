import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Outputs the items in the local storage in a readable format.
   */
  getAllItems(): string {
    const result: Record<string, unknown> = {};
    Object.keys(localStorage).forEach((key) => {
      const item = localStorage.getItem(key);
      if (item) {
        try {
          result[key] = JSON.parse(item);
        } catch {
          result[key] = {};
        }
      } else {
        result[key] = {};
      }
    });
    return JSON.stringify(result, null, 2);
  }

  setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): unknown {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
