const skills = [
  {planet: 'mars', skill: 'communication', developer: 'Tye', _id: 2343},
  {planet: 'mars', skill: 'debugging', developer: 'Jacob', _id: 1243},
  {planet: 'earth', skill: 'determination', developer: 'Tye', _id: 5634},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, todos)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}