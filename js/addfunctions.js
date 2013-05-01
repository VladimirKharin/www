function getSortedAttrs( attrs )
{
  var colUnit = new Object();
  var sorterArray = new Object();
  
  for (var j = 0; j<attrs.length; j++)
  {
    if ( colUnit[attrs[j].unit] == undefined )
      colUnit[attrs[j].unit] = 1;
    else
      colUnit[attrs[j].unit]++;
  }

  for (var i in colUnit){
    var max=0;
    var unit="";
    for (var j in colUnit ){
      if ( sorterArray[j] == undefined ) {
  if (max < colUnit[j])
	{
	  max  =  colUnit[j];
	  unit = j;  
	}
      }
    }
    sorterArray[unit] = max;
  }

  return sorterArray;
}
