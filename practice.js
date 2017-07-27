store = {categories:[],instruments:[]}




function render(data,into){
  $(into).empty()
  $(into).append(data)
}


$(document).ready(function(){

  $('body').on('submit','.new-instrument',function(event){
    let categoryName = this.category.value
    let instrumentName = this.instrument.value
    let category = Category.findOrCreate(categoryName)
    new Instrument(instrumentName,category.id)
    render(categoriesHTML(),".categories")
    this.category.value = ''
    this.instrument.value = ''
    event.preventDefault()
  })

  $('.categories').on('click','li',function(event){
    let categoryId = parseInt(this.id.replace("category-",""))
    render(categoriesHTML(),".categories")
    render(instrumentsHTML(categoryId),`ul[data-id="category-${categoryId}"]`)
    event.preventDefault()
  })


})


function categoriesHTML(){
  let li = store.categories.map(function(category){
    return categoryHTML(category)
  }).join('')
  return li
}

function categoryHTML(category){
  return `<li id="category-${category.id}"> ${category.name} <ul data-id="category-${category.id}"> </ul> </li>`
}

function instrumentsHTML(categoryId){
  let li = store.instruments.filter(function(instrument){
    return instrument.categoryId === categoryId
  }).map(function(instrument){
    return instrumentHTML(instrument)
  }).join('')
  return li
}

function instrumentHTML(instrument){
  return `<li data-id="instrument-${instrument.id}"> ${instrument.name} </li>`
}
