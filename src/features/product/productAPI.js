//todo: we're not gonna hardcode the server .. it's supposed to be able
//to fetch data from anywhere
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/products");
      if (!response) console.log("network response not ok");
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.log(error);
    }
  });
}

export function fetchProductsByFilter({filter,sort,pagination}) {
  //TODO:
  //filter= {"category":"smartphone","laptops"}..something like that
  //sort= {_sort:"price",_order="asc"}
  //pagination ={_page:1,_limit=10}
  //on server we'll support multi values
  let querystring = '';
  //category filter
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      querystring += `${key}=${lastCategoryValue}&`;
    }
  }
  //sort
  for(let key in sort){
    querystring += `${key}=${sort[key]}&`
  }
  //pagination
  for(let key in pagination){
     querystring += `${key}=${pagination[key]}&`
  }
  querystring= querystring.slice(0,-1);
  
  return new Promise(async (resolve) => {
    console.log(querystring);
    const response = await fetch(
      "http://localhost:8080/products?" + querystring
    );
    if (!response) console.log("network response not ok");
    const data = await response.json();
    const totalItems= await response.headers.get('X-Total-Count');
    resolve({ data:{products:data,totalItems:totalItems} });

  });
}
export function fetchCategories() {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/categories");
      if (!response) console.log("network response not ok");
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.log(error);
    }
  });
}
export function fetchBrands() {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("http://localhost:8080/brands");
      if (!response) console.log("network response not ok");
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.log(error);
    }
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/products/'+id);
      const data = await response.json();
      resolve({ data });
  });
}