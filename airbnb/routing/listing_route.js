const listingController = require('../controller/listing_controller');
const express = require('express');
const router = express();

router.use(express.json());
router.get('/', listingController.getListingModel);
router.get('/getList/:id', listingController.getListingById);
router.get('/new', (req, resp) => {
    resp.render("listings/new.ejs")
});
router.post('/postList', listingController.postListingData);
router.post('/multiplyList', listingController.postListingDataMultiple);
router.put('/updateList/:id', listingController.updateListingData);
router.put('/updateList/:id', listingController.updateListingData);
router.delete('/deleteList/:id', listingController.deleteListingData);
router.get('/updateList/:id', listingController.renderEditForm);


module.exports = router;