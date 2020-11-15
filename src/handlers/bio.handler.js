const { ENDPOINT_TORRE_BIO } = process.env
module.exports = (httpCodes, requestUtils) => {
  return {
    GetBioById: async (req, res) => {
      await requestUtils
        .getRequest(`${ENDPOINT_TORRE_BIO}${req.params.id}`)
        .then((r) => {
          res.status(httpCodes.OK).json(r)
        })
        .catch((e) => {
          res.status(httpCodes.NOT_FOUND).json(e)
        })
    },
  }
}
