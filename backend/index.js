const express = require('express')

PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => console.log(`Сервер запущен http://localhost:${PORT}`))