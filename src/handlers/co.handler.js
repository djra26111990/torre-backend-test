const { ENDPOINT_TORRE_CO } = process.env
module.exports = (httpCodes, requestUtils) => {
  return {
    GetCoById: async (req, res) => {
      await requestUtils
        .getRequest(`${ENDPOINT_TORRE_CO}${req.params.id}`)
        .then((r) => {
          res.status(httpCodes.OK).json(r)
        })
        .catch((e) => {
          res.status(httpCodes.NOT_FOUND).json(e)
        })
    },
  }
}
