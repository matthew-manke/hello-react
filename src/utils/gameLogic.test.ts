import { describe, it, expect } from 'vitest';
import { calculateWinner, SquareValue } from './gameLogic';

describe('calculateWinner', () => {
  it('should return null for an empty board', () => {
    const squares: SquareValue[] = Array(9).fill(null);
    expect(calculateWinner(squares)).toBe(null);
  });

  it('should return "X" if X has a horizontal line', () => {
    const squares: SquareValue[] = [
      'X', 'X', 'X',
      null, 'O', 'O',
      null, null, null
    ];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('should return "O" if O has a vertical line', () => {
    const squares: SquareValue[] = [
      'X', 'O', null,
      'X', 'O', null,
      null, 'O', 'X'
    ];
    expect(calculateWinner(squares)).toBe('O');
  });

  it('should return "X" if X has a diagonal line', () => {
    const squares: SquareValue[] = [
      'X', 'O', 'O',
      null, 'X', null,
      null, null, 'X'
    ];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('should return null if there is no winner', () => {
    const squares: SquareValue[] = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'X', 'X'
    ];
    expect(calculateWinner(squares)).toBe(null);
  });
});
