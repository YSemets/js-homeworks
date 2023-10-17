class ProductService{
    static url = new URL("https://dummyjson.com/products");

    static async getAllProducts() {
    try {
      const response = await fetch(`${this.url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  

    static async getProduct(id = 1) {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  


    static async searchProduct(search) {
    try {
      const response = await fetch(`${this.url}/search`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  

    static async  fetchProducts(limit, skip) {
    limit = 10,
    skip = 0
    try {
            const response = await fetch(`${this.url}?limit=${limit}&skip=${skip}`);        
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


    static async createProducts(product) {
    try {
      const addUrl = new URL(`${this.url}/add`);
      const response = await fetch(addUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

    static async  updateProducts(id, product) {
    try {
      const addUrl = new URL(`${this.url}/${id}`);
      const response = await fetch(addUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
 
  static async deleteProducts(id) {
    try {
      const addUrl = new URL(`${this.url}/${id}`);
      const response = await fetch(addUrl, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


}



ProductService.getAllProducts(1);
ProductService.getProduct(2);
ProductService.searchProduct(5);
ProductService.fetchProducts(10, 0); 
ProductService.createProducts({title: "orange", description: "fruit", price: "3"});
ProductService.updateProducts(1, {title: "cucumber", description: "vegetable", price: "1"});
ProductService.deleteProducts(1);

Promise.all([
    ProductService.deleteProducts(1),
    ProductService.deleteProducts(2),
    ProductService.deleteProducts(3),
    ProductService.deleteProducts(4),
    ProductService.deleteProducts(5),
  ])

  .then((results) => {
    console.log('All requests completed:', results);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });


