import randomFromArray from '../lib/index'

describe('random-from-array', () => {
  it('returns a random value from array of strings', () => {
    const arr: Array<string> = ['bossa nova', 'jazz', 'rock']
    const result = randomFromArray(arr)

    console.info('result:', result)
    expect(arr).toContain(result)
  })

  it('returns a random value from array of objects', () => {
    const arrOfObj: Array<{ value: string }> = [
      { value: 'bossa nova' },
      { value: 'jazz' },
      { value: 'rock' }
    ]
    const result = randomFromArray(arrOfObj)

    console.info('result:', result)
    expect(arrOfObj).toContain(result)
  })
})
