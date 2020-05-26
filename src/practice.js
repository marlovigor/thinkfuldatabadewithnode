require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

// knexInstance.from('shopping_list').select('*')
// .then(result => {
//         console.log(result)
//       })

// const searchTerm = 'bread'

// knexInstance
//     .select('name', 'price', 'category')
//     .from('shopping_list')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(result => {
//         console.log(result)
//     })
// searchByItemName('urger')

// function searchByItemName(searchTerm) {
//     knexInstance
//         .select('name','price','category')
//         .from('shopping_list')
//         .where('name', 'ILIKE', `%${searchTerm}%`)
//         .then(result => {
//             console.log('SEARCH TERM', { searchTerm })
//             console.log(result)
//         })
// }

function paginateProducts(page) {
        const productsPerPage = 6
        const offset = productsPerPage * (page - 1)
        knexInstance
            .select('id', 'name', 'price', 'category')
            .from('shopping_list')
            .limit(productsPerPage)
            .offset(offset)
            .then(result => {
                console.log(result)
            })
    }

    paginateProducts(5)




//   const searchTerm = 'lunch'

// function searchByProduceName(searchTerm) {
//     knexInstance
//         .select('product_id', 'name', 'price', 'category')
//         .from('amazong_products')
//         .where('name', 'ILIKE', `%${searchTerm}%`)
//         .then(result => {
//             console.log(result)
//         })
// }

// searchByProduceName('hol')




// function paginateProducts(page) {
//     const productsPerPage = 10
//     const offset = productsPerPage * (page - 1)
//     knexInstance
//         .select('product_id', 'name', 'price', 'category')
//         .from('amazong_products')
//         .limit(productsPerPage)
//         .offset(offset)
//         .then(result => {
//             console.log(result)
//         })
// }

// paginateProducts(2)


// function productsAddedDaysAgo(daysAgo) {
//     knexInstance
//       .select('id', 'name', 'price', 'date_added', 'checked', 'category')
//       .from('shopping_list')
//       .where(
//         'date_added',
//         '>',
//         knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
//       )
//       .then(results => {
//         console.log('PRODUCTS ADDED DAYS AGO')
//         console.log(results)
//       })
//   }
  
//   productsAddedDaysAgo(5)
  
//   function costPerCategory() {
//     knexInstance
//       .select('category')
//       .sum('price as total')
//       .from('shopping_list')
//       .groupBy('category')
//       .then(result => {
//         console.log('COST PER CATEGORY')
//         console.log(result)
//       })
//   }
  
//   costPerCategory()



// function getProductsWithImages() {
//     knexInstance
//         .select('product_id', 'name', 'price', 'category', 'image')
//         .from('amazong_products')
//         .whereNotNull('image')
//         .then(result => {
//             console.log(result)
//         })
// }

// getProductsWithImages()


// function mostPopularVideosForDays(days) {
//     knexInstance
//       .select('video_name', 'region')
//       .count('date_viewed AS views')
//       .where(
//         'date_viewed',
//         '>',
//         knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
//       )
//       .from('whopipe_video_views')
//       .groupBy('video_name', 'region')
//       .orderBy([
//         { column: 'region', order: 'ASC' },
//         { column: 'views', order: 'DESC' },
//       ])
//       .then(result => {
//         console.log(result)
//       })
//   }

//   mostPopularVideosForDays(30)




console.log('knex and driver installed correctly');