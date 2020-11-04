/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /': 'RestaurantController.Home',
  'POST /': 'RestaurantController.Home',

  'GET /create': 'RestaurantController.Create',
  'POST /create': 'RestaurantController.Create',

  'GET /delete/:id': 'RestaurantController.Delete',
  'POST /delete/:id': 'RestaurantController.Delete',

  'GET /Admin': 'RestaurantController.Admin',
  'POST /Admin': 'RestaurantController.Admin',

  'GET /detail/:id': 'RestaurantController.Detail',
  'POST /detail/:id': 'RestaurantController.Detail',

  'GET /search': 'RestaurantController.aginate',
  'POST /search': 'RestaurantController.aginate',

  'GET /login': 'UserController.login',  // for testing only
  'POST /login': 'UserController.login',

  'POST /logout': 'UserController.logout',
  'GET /logout': 'UserController.logout',

  'GET /len': 'RestaurantController.len',
  'POST /len': 'RestaurantController.len',

  'GET /redeem': 'RestaurantController.redeem',
  'POST /redeem': 'RestaurantController.redeem',

  'GET /Restaurant/:id/consultants': 'RestaurantController.populate',
  'GET /user/:id/clients': 'UserController.populate',
  'POST /user/:id/clients/add/:fk': 'UserController.add',
  'DELETE /user/:id/clients/remove/:fk': 'UserController.remove',





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
