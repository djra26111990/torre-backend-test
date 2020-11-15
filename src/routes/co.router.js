
const {CO_PATH} = process.env

module.exports= (router,handler) => {
    router.get(`/${CO_PATH}/:id?`,handler.GetCoById)
    return router
}