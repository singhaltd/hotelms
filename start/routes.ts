/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/r', 'RoomsController.roomDetail')
Route.get('/login', 'AuthController.login')
Route.post('/login', 'AuthController.CreateLogin').as('auth.login')

Route.get('/register', 'AuthController.register')
Route.post('/register', 'AuthController.CreateRegister').as('auth.register')




Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('welcome')
  })
  Route.get('/booking', 'BookingsController.booking').as('pms.booking')
  Route.get('/booking/create', 'BookingsController.creatBooking').as('pms.creatBooking')
  Route.get('/checkin', 'CheckinsController.index').as('pms.checkin')
  Route.get('/room', 'RoomsController.index').as('pms.room')
  Route.get('/room/grid', 'RoomsController.roomGrid').as('pms.room_grid')
  Route.get('/room/type', 'RoomsController.roomType').as('pms.room_type')
  Route.get('/room/facility', 'RoomsController.roomFacility').as('pms.room_facility')
  Route.get('/users', 'UsersController.index').as('pms.users')
}).middleware(['authenticated'])

Route.group(() => {

  Route.get('city/province/:id', 'CitiesController.province')
  Route.get('city/districts/:id', 'CitiesController.district')

  Route.post('room/create', 'RoomsController.store')
  Route.delete('room/:id', 'RoomsController.delRoom')
  Route.get('room', 'RoomsController.apIndex')

  Route.post('booking/create', 'BookingsController.CreateBooking')

  Route.post('room/facility', 'RoomsController.CreatFacility')
  Route.get('room/options/:id', 'RoomsController.roomTypeOption')
  Route.post('room/options', 'RoomsController.CreateTypeOption')
  Route.delete('room/options/:id', 'RoomsController.RemoveOption')


  Route.get('customer/find/:q', 'CustomersController.findCustomer')
}).prefix('api')

Route.post('files','MediaController.fileUpdate')