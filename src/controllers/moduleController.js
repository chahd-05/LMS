async function getModulesByCourse(req, res, next) {
    try {
        res.status(200).json({
            success: true,
            data: []
        })
    } catch(error) {
        next(error)
    }
}

module.exports = { getModulesByCourse }