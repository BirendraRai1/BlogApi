var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var blogSchema=new Schema({
	title       :String,
	authorInfo  :{},
	blogBody    :String,
	comments    :[{body:String,date:Date}],
	tags        :[],
	created     :{type:Date},
	lastModified:{type:Date},
	hidden      :Boolean,
	meta        :{
	             votes:Number,
	             favs:Number
	             }
         });
mongoose.model('Blog',blogSchema);
