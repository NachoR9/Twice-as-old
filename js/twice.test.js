import { describe, it , expect } from "vitest"
import { calculateAge } from "./twice.js"

describe('calculateAge', () => {
    it('should return 22 when father has 36 and his son 7', () => {
        expect(calculateAge(36,7)).toBe(22);
    });
    it('should return 5 when father has 55 and his son 30', () => {
        expect(calculateAge(55,30)).toBe(5);
    });
    it('should return 0 when father has 42 and his son 21', () => {
        expect(calculateAge(42,21)).toBe(0);
    });
    it('should return 20 when father has 22 and his son 1', () => {
        expect(calculateAge(22,1)).toBe(20);
    });
    it('should return 29 when father has 29 and his son 0', () => {
        expect(calculateAge(29,0)).toBe(29);
    });
})