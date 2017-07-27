function createCategoryClass(){
  let id = 0
  return class{

    constructor(name){
      this.id = ++id
      this.name = name
      store.categories.push(this)
    }

    instruments(){
      return store.instruments.filter(function(instrument){
        return this.id == instrument.categoryId
      })
    }

    static find(id){
      return store.categories.filter(function(category){
        return category.id === id
      })
    }

    static findByName(name){
      return store.categories.filter(function(category){
        return category.name === name
      })
      }

    static findOrCreate(name){
      if (Category.findByName(name).length !== 0){
        return Category.findByName(name)[0]
      } else{
        return new Category(name)
      }
    }
  }
}

Category =  createCategoryClass()
