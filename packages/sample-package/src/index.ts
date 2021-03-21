type Foo = {
  name: string
}

async function run (arg: Foo): Promise<void> {
  console.log(`this is a ${arg.name}.`)
}

const foo: Foo = { name: 'sample package' }

run(foo).catch(console.error)
