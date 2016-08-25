//#Binary search function 
var binarysearch_ruleId = function (a,o) {
if(typeof(a) == 'undefined' || a == null) return -1;
if (a.length==0) return -1;
var k = a.length;
for (var i=0; i<k; i++) 
	{
	if (o==a[i].ruleId) return i;
	}
return -1;
};


//search ruleData in rulePermit
$.each($scope.rulePermit, function(k, v){
    var pos = binarysearch_ruleId($scope.ruleData,v.id); //call binary search
				
	if (pos!=-1) //if found by matching id with ruleId
	{						
		//console.log ( v); //found item
		//$scope.all_rules.push(v);	
	
	}
}
