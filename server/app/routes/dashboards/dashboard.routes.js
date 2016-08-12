const router = require('express').Router();
const db = require('../../../db')
const Dashboard = db.model('dashboard')
const Chart = db.model('chart')
module.exports = router;
router.get('/:id', function (req,res,next) {
	Dashboard.findById(req.params.id, {
		include : [Chart]
	})
	.then(data => res.send(data))
	.catch(next)
});

router.put('/:id', function (req,res,next) {
	Dashboard.findById(req.params.id,{
		include: [Chart]
	})
	.then(function (dashboard) {
		console.log(dashboard.__proto__)
		return dashboard.removeCharts()
	})
	.then(dashboard => res.send(dashboard))
	.catch(next)
})