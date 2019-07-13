const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/users'

mongoose.connect(
  db,
  err => {
    if (err) {
      console.log('Error', err)
    } else {
      console.log('Connnected to MongoDB')
    }
  }
)

function verifyToken (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('no headers is present')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === null) {
    return res.status(401).send('no token is present or null')
  }
  console.log('toekn', token)
  let payload = jwt.verify(token, 'secretKey')
  console.log('payload', payload)
  if (!payload) {
    return res.status(401).send('unauthorised request')
  }

  req._id = payload.subject
  next()
}

router.get('/', (req, res) => {
  res.send('hello from API')
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser) => {
    if (error) {
      console.log('err', error)
    } else {
      let payload = { subject: registeredUser._id }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({ token })
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log('error', error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      } else if (user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = { subject: user._id }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token })
      }
    }
  })
})

router.get('/events', (req, res) => {
  let events = [
    {
      id: 1,
      name: 'AutoExpo',
      description: 'Auto Expo Delhi',
      date: '2016-1555-1320-134'
    },
    {
      id: 2,
      name: 'AutoExpo',
      description: 'Auto Expo Delhi',
      date: '2016-1555-1320-134'
    },
    {
      id: 3,
      name: 'AutoExpo',
      description: 'Auto Expo Delhi',
      date: '2016-1555-1320-134'
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let events = [
    {
      id: 1,
      name: 'AutoExpo',
      description: 'Auto Expo Delhi',
      date: '2016-1555-1320-134'
    },
    {
      id: 2,
      name: 'AutoExpo',
      description: 'Auto Expo Delhi',
      date: '2016-1555-1320-134'
    },
    {
      id: 3,
      name: 'AutoExpo',
      description: 'Auto Expo Delhi',
      date: '2016-1555-1320-134'
    }
  ]
  res.json(events)
})
module.exports = router
