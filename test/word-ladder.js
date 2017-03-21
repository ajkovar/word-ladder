import assert from 'assert';
import wordLadder, { isValidTransform } from '../src/word-ladder';

describe('isValidTransform', () => {
  it('should return false for exact match', () => {
    assert.equal(false, isValidTransform('word', 'word'))
  })
  it('should return false for too many different letters', () => {
    assert.equal(false, isValidTransform('word', 'woss'))
  })
  it('should return true one letter differences', () => {
    assert.equal(true, isValidTransform('word', 'wors'))
  })
})

describe('wordLadder', () => {
  it('should return 0 with no match', () => {
    assert.equal(0, wordLadder('test', 'tesh', []))
  })

  it('should return 2 when needed', () => {
    assert.equal(2, wordLadder('test', 'tesh', ['tesh']))
  })

  it('should return 3 when needed', () => {
    assert.equal(3, wordLadder('test', 'tehh', ['tesh', 'tehh']))
  })

  it('should return 4 when needed', () => {
    assert.equal(4, wordLadder('test', 'thhh', ['tesh', 'tehh', 'thhh']))
  })

  it('should return 5 for sample provided', () => {
    assert.equal(5, wordLadder('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]))
  })

  it('should return 0 for other sample provided', () => {
    assert.equal(0, wordLadder('hit', 'cog', ["hot", "dot", "dog", "lot", "log"]))
  })
})
