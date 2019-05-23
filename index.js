var recipes = { meal: "ingredient"}

function updateObjectWithKeyAndValue(object, key, value)
{
  return Object.assign({}, object, {[key]: value});
}