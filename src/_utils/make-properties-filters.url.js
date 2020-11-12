export default (filters) => {
  const base = 'https://api.clasihome.com/rest/properties?';
  filters.typeId = filters.user ? "user" : "office";
  let url = base;
  let i = 0;
  for(let key in filters){
    i++;
    const more = i !== 1 ? '&' : ''; 
    url = url + more + `${key}=${filters[key]}`;
  }
  return url;
}