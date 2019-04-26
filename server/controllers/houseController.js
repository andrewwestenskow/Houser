module.exports = {
  getAll: async (req, res) =>{
    const db = req.app.get('db')
    let houses = await db.getAll()
    res.status(200).send(houses)
  },

  addNew: async (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip, img, mortgage, rent} = req.body
    let houses = await db.addNew(name, address, city, state, zip, img, mortgage, rent)
    let house = houses[0]
    res.status(200).send(house)
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete(id)
    res.sendStatus(200)
  }
}