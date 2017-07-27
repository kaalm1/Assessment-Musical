function createInstrumentClass(){
  let id = 0

  return class {
    constructor(name,categoryId){
      this.id = ++id
      this.name = name
      this.categoryId = categoryId
      store.instruments.push(this)
    }

    category(){
      Category.find(this.categoryId)
    }
  }
}


Instrument = createInstrumentClass()
