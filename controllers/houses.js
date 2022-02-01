const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res) => {
  res.render('houses/list', { user: req.user })
})

router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', (req, res) => {
  res.render('houses/edit', { user: req.user })
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/')
  } else {
    res.redirect('/auth/login')
  }
})
router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/houses/one')
  } else {
    res.redirect('/auth/login')
  }
})
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
