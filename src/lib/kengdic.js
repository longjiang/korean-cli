import Papa from 'papaparse'

export default {
  _csv: '../data/kengdic_2011.tsv.txt',
  _data: [],
  load() {
    return new Promise(resolve => {
      Papa.parse(this._csv, {
        download: true,
        header: true,
        complete: results => {
          this._data = results.data
          resolve(this)
        }
      })
    })
  },
  unique(array) {
    var uniqueArray = []
    for (let i in array) {
      if (!uniqueArray.includes(array[i])) uniqueArray.push(array[i])
    }
    return uniqueArray
  },
  get(id) {
    return this._data.find(row => row.id === id)
  },
  isChinese(text) {
    if (this.matchChinese(text)) return true
  },
  matchChinese(text) {
    return text.match(
      // eslint-disable-next-line no-irregular-whitespace
      /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B‌​\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]+/g
    )
  },
  randomArrayItem(array, start = 0, length = false) {
    length = length || array.length
    array = array.slice(start, length)
    let index = Math.floor(Math.random() * array.length)
    return array[index]
  },
  random() {
    return this.randomArrayItem(this._data)
  },
  lookupByCharacter(char) {
    return this._data.filter(row => row.hanja && row.hanja.includes(char))
  },
  lookupHangul(hangul) {
    const candidates = this._data
      .filter(row => {
        return row.hangul === hangul
      })
      .sort((a, b) => b.english.length - a.english.length)
    return candidates
  },
  lookupByPattern(pattern) {
    // pattern like '～体'
    var results = []
    if (pattern.includes('～')) {
      const regexPattern = '^' + pattern.replace(/～/gi, '.+') + '$'
      const regex = new RegExp(regexPattern)
      results = this._data.filter(word => regex.test(word.hangul))
    } else {
      results = this._data.filter(word => word.hangul.includes(pattern))
    }
    return results
  },
  lookupFuzzy(text, limit = false) {
    let results = []
    if (this.isChinese(text)) {
      results = this._data.filter(row => row.hanja && row.hanja.includes(text))
    } else {
      results = this._data.filter(row => {
        return (
          (row.hangul && row.hangul.includes(text)) ||
          (row.english && row.english.includes(text))
        )
      })
    }
    if (results) {
      results = results.sort((a, b) => b.english.length - a.english.length)
      if (limit) {
        results = results.slice(0, limit)
      }
      return results
    }
  }
}
