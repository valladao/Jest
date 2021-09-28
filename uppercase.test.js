const uppercase = require("./uppercase")

test(`uppercase 'test' to equal 'TEST'`, async () => {
  const str = await uppercase("test")
  expect(str).toBe("TEST")
})

test(`uppercase '' to error`, () => {
  return uppercase("").catch((e) => {
    expect(e).toMatch("Empty string")
  })
})