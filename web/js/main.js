$(document).ready(function(){
	// console.log("Ready!");
	var mybodyid = $('body').attr('id');
	var mynavclass = '.nav' + mybodyid;
	// console.log("mybodyid is " + mybodyid);
	// console.log("mynavclass is " + mynavclass);
	$(mynavclass).attr('class','active');
});
