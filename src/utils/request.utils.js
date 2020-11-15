module.exports= axios => {
    return {
       getRequest: async (uri) => {
            return await axios.get(uri)
             .then(r => {return r.data})
             .catch(e => {
                 const {response} = e
                 let message = `ERROR REQUESTING API ${response.status} ${response.statusText}`
                 console.log(message)
                 return message;
             }
             )
        }
    }
}