module.exports = (req, res, next) => {
    if(req.user.credits < 1) {
        return res.status(402).send({error: 'Buy some credits cheapskate!'});
    }

    next();
};