import { readFile, parseFields } from "../src/json-processing"

let json

let parsed

beforeEach(() => {
    const fileData = readFile('resources/data.json').toString()

    json = JSON.parse(fileData)

    parsed = parseFields(json)
})

test("registered date strings can be converted to JS dates", () => {
    const dates = parsed.map(e => e.registered)

    dates.forEach(d => expect(d).toBeInstanceOf(Date))
})