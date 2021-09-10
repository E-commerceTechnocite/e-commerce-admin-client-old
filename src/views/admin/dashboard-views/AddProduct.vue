<template>
       <div class="add-product"> 
            <form @submit="showForm" class="general-info">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="formValues.title">
                </div>
                <div class="form-group">
                    <label for="reference">Reference</label>
                    <input type="text" class="form-control" id="reference" v-model="formValues.reference">
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="category" v-model="formValues.category"> 
                        <option value="Select category">Select category </option>
                        <option value="cat1">Category 1 </option>
                        <option value="cat2">Category 2 </option>
                        <option value="cat 3">Category 3 </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="tax">Tax</label>
                    <select id="tax" v-model="formValues.tax"> 
                        <option value="Select Tax">Select Tax </option>
                        <option value="6">6% </option>
                        <option value="13">13% </option>
                        <option value="20">20% </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" class="form-control" id="price" v-model="formValues.price">
                </div>
            </form>
           <div class="image-product"> <h4>Image Product</h4>
            <button @click="showModal()">call modal</button>
           </div>
           
           <div class="description-product"> <h4>Description</h4></div>
           
    </div>
    <div>
        <!-- {{formValues.title}} {{formValues.reference}}{{formValues.category}} {{formValues.tax}}{{formValues.price}}  -->
        <button type="submit" class="btn btn-success" @click="showForm()">Add</button>
        <button type="button" class="btn btn-info">Preview</button>
    </div>
    <Modal  v-bind:isVisible="isVisible" v-bind:showModal="showModal"/>
</template>

<script>
import { ref} from 'vue'
import Modal from './Modal.vue'
    export default {
        components : {
            Modal
        },
        
        setup(){
            const isVisible=ref(false)
            const formValues=ref({
                title:'',
                reference:'',
                category:'',
                tax:'',
                price:'',
              
            })
           
           return {formValues,isVisible}
           
          
            
            },//end setup
           // this to test if i get info about product
           methods :{
               showForm ()  {
                    console.log(this.formValues.title); 
                    console.log(this.formValues.reference);
                    console.log(this.formValues.category); 
                    console.log(this.formValues.tax);
                    console.log(this.formValues.price);
               },
               showModal: function(){
                  
                   this.isVisible= !this.isVisible
               }
          }
          
    } ;//end export
        
       
        
</script>

<style>
.add-product {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 800px;
    /* align-items: flex-start; */
    margin: 0 60px 200px 0;
}
.add-product form, .add-product .image-product {
    height: 600px;
} 
.add-product .general-info {
    display: flex;
    flex-direction: column;
    padding: 30px;
    flex: 0 0 455px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);
}
.add-product .form-group {
    display: flex;
    flex-direction: column;
}
.add-product .form-group label {
    align-self: flex-start;
}

.add-product .general-info input, .add-product .general-info select {
    padding: 10px;
    border: 1px solid #D6D6D6;
} 
.add-product .general-info .form-group {
    margin: 20px 0;
}
.add-product .general-info div.form-group:nth-child(3) {
    margin: 20px 0 60px 0;
}
.add-product .general-info div.form-group label {
    margin-bottom: 10px;
}
.add-product .image-product {
    flex: 1;
    margin-left: 30px;
}
.add-product .description-product {
    width: 100%;
    height: 600px;
    flex: 2 2 auto;
    margin-top: 30px;
}


/* .container  {
    width: 1200px;
    height: 750px;
    margin : 50px auto;
    padding : 10px;
    display:flex;
    flex-wrap:wrap;
    align-content: stretch;
    justify-content: space-around;
    background-color: #EEE;
}
.div1 {
    
    width: 450px;
    height: 300px;
    padding : 10px;
   
}

.div2 {
   
    width: 650px;
    height: 300px;
    padding : 10px;
    background-color: white;
}

.div3 {
    
    width: 1000px;
    height: 200px;
    padding : 10px;
    background-color: white;
    
}

/.div4 {
   
    width: 650px;
    height: 100px;
    padding : 10px;
    background-color: rgb(233, 227, 227);
    flex-direction: row;
    align-content: flex-end;
}
 


button {
    margin: 5px;
} */

</style>