import { config } from 'dotenv'

const envFile = '.env'
const { parsed } = config({ path: envFile })

const NODE_PORT = parsed.NODE_PORT || 3000
const VAGALUME_API_URL = parsed.VAGALUME_API_URL || 'https://api.vagalume.com.br/'
const GENIUS_API_URL = parsed.GENIUS_API_URL || 'https://api.genius.com'
const GENIUS_API_KEY = parsed.GENIUS_API_KEY || '' // your genius api key goes here or on .env file

export { NODE_PORT, VAGALUME_API_URL, GENIUS_API_URL, GENIUS_API_KEY }
