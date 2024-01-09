const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/CourseController');

router.get('/create', newsController.create);
router.post('/store', newsController.store);
router.get('/:id/edit', newsController.edit);
router.put('/:id/update', newsController.update);
router.post('/handle-form-actions', newsController.handleFormActions);
router.delete('/:id', newsController.delete);
router.delete('/:id/force', newsController.forceDelete);
router.patch('/:id/restore', newsController.restore);
router.get('/:slug', newsController.show);

module.exports = router;
