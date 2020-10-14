/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    Home: async function(req, res){
       var 
      return res.view('restaurant/Homepage');


    },

    Create: async function(req, res){
        if(req.method == "GET") return res.view('restaurant/create');

        var rest =  await Restaurant.create(req.body).fetch();

        return res.ok(); 
    },

    Delete: async function(req, res){
        var rt = await Restaurant.findOne(req.params.id);

        if(req.method == "GET") return res.view('restaurant/delete', {rest: rt});

        //return res.json(req.body["action"]);

        if(req.body["action"]== "Delete"){
            var deletedRest = await Restaurant.destroyOne(req.params.id);

            if(!deletedRest) return res.notFound();
            
            return res.ok();

        }else if(req.body["action"] == "Update"){
            var updatedRest = await Restaurant.updateOne(req.params.id).set(req.body);

            if(!updatedRest) return res.notFound();

            return res.ok();
        }
    },

    Admin: async function(req, res){
        var rt = await Restaurant.find();

        return res.view('restaurant/Admin',{restaurant: rt});
    }
  

};

