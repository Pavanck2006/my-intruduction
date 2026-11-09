import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

const app = express()
const port = Number(process.env.PORT) || 5000
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173'

app.use(helmet())
app.use(cors({ origin: clientUrl, credentials: true }))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`MyPortfolio API listening on port ${port}`)
})
