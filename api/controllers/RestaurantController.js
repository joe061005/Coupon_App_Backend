/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    Home: async function(req, res){
      var kow = await Restaurant.find({
          where: { region: 'Kowloon'},
          sort: 'createdAt DESC'
      })

      var HKI = await Restaurant.find({
          where: {region: 'HK Island'},
          sort: 'createdAt DESC'
      })

      var NT = await Restaurant.find({
          where: {region: 'New Territories'},
          sort: 'createdAt DESC'
      })

      return res.view('restaurant/Homepage', {hk: HKI, kl: kow, nt:NT});
    },

    Create: async function(req, res){
        if(req.method == "GET") return res.view('restaurant/create');

        var rest =  await Restaurant.create(req.body).fetch();

        return res.view('restaurant/ok') 
    },

    Delete: async function(req, res){
        var rt = await Restaurant.findOne(req.params.id);

        if(req.method == "GET") return res.view('restaurant/delete', {rest: rt});

        //return res.json(req.body["action"]);

        if(req.body["action"]== "Delete"){
            var deletedRest = await Restaurant.destroyOne(req.params.id);

            if(!deletedRest) return res.notFound();
            
            return res.view('restaurant/ok') 

        }else if(req.body["action"] == "Update"){
            var updatedRest = await Restaurant.updateOne(req.params.id).set(req.body);

            if(!updatedRest) return res.notFound();

            return res.view('restaurant/ok') 
        }
    },

    Admin: async function(req, res){
        var rt = await Restaurant.find();

        return res.view('restaurant/Admin',{restaurant: rt});
    },

    Detail: async function(req, res){
        var record = await Restaurant.findOne(req.params.id)
        
        if(!record) return res.notFound();

        return res.view('restaurant/detail', {rt: record});

    },

    Search: async function(req, res){
        
    }
  

};

