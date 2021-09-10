<template>
    
    <h1>  Add product </h1>
       <div class="container"> 
            <div class="div1"> 
               <h4> Info Product</h4>
               <form @submit="showForm">
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" class="form-control" id="title" v-model="formValues.title">
                    </div>
                    <div class="form-group">
                        <label for="reference">Reference:</label>
                        <input type="text" class="form-control" id="reference" v-model="formValues.reference">
                    </div><br>
                    <div class="form-group">
                        <label for="category">Category:</label><br>
                        <select id="category" v-model="formValues.category"> 
                            <option value="Select category">Select category </option>
                            <option value="cat1">Category 1 </option>
                            <option value="cat2">Category 2 </option>
                            <option value="cat 3">Category 3 </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tax">Tax:</label><br>
                        <select id="tax" v-model="formValues.tax"> 
                            <option value="Select Tax">Select Tax </option>
                            <option value="6">6% </option>
                            <option value="13">13% </option>
                            <option value="20">20% </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <input type="text" class="form-control" id="price" v-model="formValues.price">
                    </div>

                   

                    
                </form>
            </div>
           <div class="div2"> <h4>Image Product</h4>
           <button @click="showModal()">call modal</button>
           </div>
           
           <div class="div3"> <h4>Description</h4></div>
           
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

<style scoped>
.container  {
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

/* .div4 {
   
    width: 650px;
    height: 100px;
    padding : 10px;
    background-color: rgb(233, 227, 227);
    flex-direction: row;
    align-content: flex-end;
}
 */


button {
    margin: 5px;
}

</style>