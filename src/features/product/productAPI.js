//todo: we're not gonna hardcode the server .. it's supposed to be able
//to fetch data from anywhere
export function fetchAllProducts() {
    return new Promise(async (resolve) =>{
      try{const response = await fetch('http://localhost:8080/products') 
      if(!response )console.log('network response not ok');
      const data = await response.json()
      resolve({data})}
      catch(error){
           console.log(error);
      }
    }
    );
  }
  export function fetchProductsByFilter(filter) {
    let querystring='';
    for(let key in filter){
     querystring+= `${key}=${filter[key]}&`
    }
    querystring=querystring.slice(0,-1);
    console.log(querystring);
    
    return new Promise(async (resolve) =>{
      console.log(querystring);
      const response = await fetch('http://localhost:8080/products?&'+querystring) 
      if(!response )console.log('network response not ok');
      const data = await response.json()
      resolve({data})}
    );
  }

