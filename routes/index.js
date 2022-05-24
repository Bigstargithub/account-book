const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get("/", (req, res) => {
  res.redirect("https://naver.com")
})

module.exports = router