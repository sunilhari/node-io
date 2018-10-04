const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const shortId = require('shortid');

const adapter = new FileSync('db.json')
const db = low(adapter);

db.defaults({ users: [], tasks: [], completionlog: [] })
  .write()

const checkifUserExsists = (ip) => (
  getUser({ ip })
)

const addUser = ({ name, ip, email, time }) => (
  db.get('users')
    .push({ id: shortId.generate(), name, ip, email, time })
    .write()
    .id
)

const getUser = (searchParams) => (
  db.get('users')
    .find(searchParams)
    .value()
)