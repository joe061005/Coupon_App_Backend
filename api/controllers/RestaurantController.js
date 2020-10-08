/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    Home: async function(req, res){
        if(req.method == "GET") return res.view('restaurant/Homepage');

    },

    Create: async function(req, res){
        if(req.method == "GET") return res.view('restaurant/create')
    }
  

};

