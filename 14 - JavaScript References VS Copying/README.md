## JavaScript References VS Copying

- It is about differences between referencing vs copying of JavaScript variable.

## Why did I work on this project?

- In order to improve my JS skills

## What did I learn from this project?

- The ways of making copy of an array

  - `spread operator` : copy = [...original]
  - `slice`: copy = slice(original)
  - `concat`: copy = [].concat(original)
  - `from Array`: copy = Array.from(original)

- Making copy of an object
  - `spread operator`: copy = {...original}
    - copying only one level deep
  - `Object.assign()`: copy = Object.assign({}, original, {})

## How did I do this?

- vanilla JavaScript

## Notes

- Primitive types such as string,number, boolen are copied by value. When we assign these variables to other variables, we copy the value to the new variable which means they become independent as can be seen in console first two examples.
- Reference types such as objects,array are coped by reference. When we assign these variables to other variables, that means each variable contains a reference to the same array. They become dependent which means if we change one of them, the other will change simultaneously.
