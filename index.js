import express from 'express'
import routes from './src/routes/crmRoutes'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// bodyParser setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

// serving static files
app.use(express.static('public'));



app.get('/', (req, res) => res.send( `Node and express server running on PORT ${PORT}`))

app.listen(PORT, () =>
console.log(`your server is running on the port ${PORT}`))
