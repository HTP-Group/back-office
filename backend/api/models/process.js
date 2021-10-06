const Children = mongoose.model('User', new mongoose.Schema({
  // fait référence à un user qui a isParent = true
  ParentId: {
    type: String,
  }
  // créer une requête dan smon controller.user qui appelle le model children 
  // pour récupérer tous les children d'un parent. 
  // createChildren()
  // --------
  // get_Children(id){
  // réutiliser le payload
  // }
}));