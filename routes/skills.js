import { Router } from 'express'
// import { route } from 'express/lib/application'
// import { route } from 'express/lib/application'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

/* GET skills listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
