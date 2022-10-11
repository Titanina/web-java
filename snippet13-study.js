const types = {
  fadein: 200,
  flyin: 400
};

function getDefaultDuration(type) {
  console.log("getDefaultDuration called with type = " + type);
  return types[type] || 300;

}

function animate(duration = getDefaultDuration(type), type)
{

}

animate(undefined, "dissolve"); 