const {BIO_PATH} = process.env

module.exports= (router,handler) => {
    router.get(`/${BIO_PATH}/:id?`,handler.GetBioById)
    return router
}