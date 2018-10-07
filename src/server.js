let _ = require('lodash')
let express = require('express')
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

let port = 3000

// Create the express router object for Checklist
// let app = express.Router()

let todoItems = [
  { id: 1, title: 'Prototype' },
  { id: 2, title: 'Design & UX' },
  { id: 3, title: 'Rewrite App' },
  { id: 4, title: 'Testing' },
  { id: 5, title: 'Release' },
]

let autoIncrementKey = todoItems[todoItems.length - 1].id + 1

// A GET to the root of a resource returns a list of that resource
app.get('/', function(req, res) {
  res.json(todoItems)
  res.json({ error: ['Item not found'] }, 201)
})

// A POST to the root of a resource should create a new object
app.post('/', function(req, res) {
  let params = _.pick(req.body, ['title'])
  if (params.title) {
    let payload = { ...params, id: autoIncrementKey }
    todoItems.push(payload)
    autoIncrementKey++
    res.json(payload)
  } else {
    res.json({ error: ['Missing title'] }, 422)
  }
})

// We specify a param in our path for the GET of a specific object
app.get('/:id', function(req, res) {
  let item = _.find(todoItems, ['id', parseInt(req.params.id)])
  if (item) {
    res.json(item)
  } else {
    res.json({ error: ['Item not found'] }, 404)
  }
})

// Similar to the GET on an object, to update it we can PATCH
app.put('/:id', function(req, res) {
  let item = _.find(todoItems, ['id', parseInt(req.params.id)])
  if (item) {
    let key = _.indexOf(todoItems, item)
    let params = _.pick(req.body, ['title'])
    let updatedValue = {...item, ...params}
    todoItems[key] = updatedValue
    res.json(updatedValue)
  } else {
    res.json({ error: ['Item not found'] }, 404)
  }
})

// Delete a specific object
app.delete('/:id', function(req, res) {
  let item = _.find(todoItems, ['id', parseInt(req.params.id)])
  if (item) {
    let key = _.indexOf(todoItems, item)
    todoItems.splice(key, 1)
    res.status(204).send()
  } else {
    res.json({ error: ['Item not found'] }, 404)
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
