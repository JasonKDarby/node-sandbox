const fs = require('fs')

const readFile = (filePath) => fs.readFileSync(filePath)

const parseDate = (ds) => new Date(ds.replace(' ', ''))

const parseFields = (jsArray) => jsArray.map(e => {
    const o = { ...e }
    o.registered = parseDate(e.registered)

    return o
})

export { readFile, parseFields }