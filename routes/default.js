const router = require('express').Router();
const data = {
    response: 'Successful Response!'
}

router.route('/test').get((req, res, next)=>{
    res.json(JSON.stringify(data))
})

module.exports = router;