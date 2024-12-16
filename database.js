const {MongoClient} = require('mongodb')

const url = 'mongodb+srv://sabhishekoct998:WbhGNDgk1Yahdcqn@mongo-tutorial.wbuwp.mongodb.net/'

const client = new MongoClient(url)

const dbName = 'Test'

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Student');

    const data = {
        registrationNumber: 'IN7383733',
        studentId: '123416',
        studentName: 'Akaay',
        fatherGuardianName: 'Virat',
        standard: '1st B',
        emergencyContact: '9790541141'
    }
  
    //insert
    //const insertResult = await collection.insertOne(data)
    //console.log('Insert Details :', insertResult)

    //read
    const result = await collection.find({}).toArray()
    //console.log('Read Details :', result)

    const searchResult = await collection.find({studentName: 'Alveena S. Kudhus'}).toArray()
    console.log('Search Result : ',searchResult)
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());