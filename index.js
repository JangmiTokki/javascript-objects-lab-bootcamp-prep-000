var recipes = { meal: "ingredient"}

function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function deletFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object);
  newObj;
  delete newObject.key;
  return newObject;
}