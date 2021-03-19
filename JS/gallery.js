jQuery(document).ready(function(){
    let Data;
    jQuery("#Search_space").keyup(function(){
    	debugger;
    	Data = jQuery("#Search_space").val();  // search se input value utha k Data pe store kiye
    	Data=Data.trim();  //Data ko trim kiye

    	if (Data!="") {
    		jQuery(".gall_cls").hide();
    	}
    	else{
    		jQuery(".gall_cls").show();
    	}
    	//array of image declearation

    	let IMG=[
    		["bird", "butterfly", "living being", "cute", "purple", "small"],
    		["cat", "cute", "animal", "living being","red", "brown"],
    		["horse", "fast", "animal", "living being", "brown", "yellow"],
    		["box", "beautiful", "surprise", "yellow", "cute"],
    		["fish", "danger", "water", "living being", "teeth", "hungary"],
    		["water", "design", "animation", "beautiful", "unique","blue","green"],
    		["cack", "yummy", "tasty", "food", "hungary", "yellow", "chocklet"],
    		["swim", "swimer", "sea", "ocean", "water", "human", "man",  "joy", "living being", "blue", "light blue"],
    		["parrot", "colorfull", "red", "yellow", "blue", "green", "living being", "cute","beautiful"],
    		["jump", "lady", "girl", "water", "green", "nature", "lake", "joy"],
    		["chill", "water", "ocean", "sea", "man", "girl", "lady", "colorfull", "unique","red", "yellow", "nature"],
    		["swim", "swimer", "sea","deep", "ocean", "water", "human", "man",  "joy", "living being", "blue", "dark blue"],
    		["valley", "nature", "water", "river", "mountain", "yellow", "brown"],
    		["flower", "nature", "beautiful", "white", "green"],
    		["table", "chair", "food", "hungary", "brown", "room", "yellow"],
    		["ocean", "sea", "nature", "beautiful", "colorfull", "sunset", "sunrise", "dark", "blue", "water", "yellow"],
    		["river", "water", "white", "green", "forest", "beautiful", "nature", "trees", "tree"],
    		["leaf", "green", "dark", "nature", "plant", " living being", "trees", "tree"],
    		["garden", " green", "beautiful", "nature", "path", "trees", "tree", "clean"],
    		["path","green", "nature", "human", "man", "forest", "joy","lost"],
    	];
    	

    	for(let i=0; i<=IMG.length; i++){
    		let len = IMG[i];
    		// for(let j=0; j<len; j++){

    			// if(Data==IMG[i][j]){
                if (len.includes(Data)) {
    				jQuery("#img"+(i+1)).show();
    			}
    		// }
    	}
    });    
});
