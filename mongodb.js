//  CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
        console.log(id.toHexString().length)
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Renew inspection'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})

    
