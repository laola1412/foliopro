import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ukqbwdfddodynpwjlrlu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
