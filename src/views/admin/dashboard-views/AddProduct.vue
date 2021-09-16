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
            
                 <div class="image-download"  > 
                     
                   <img alt="Select image" src="" id="myImage" height="120" width="250">
                 </div>
                 <div class="images"> 
                    <div > <img src="../../../../src/assets/images/pic2.jpg" width="250" height="120"  @click="showModal()">  </div>
                    <div > <img src="../../../../src/assets/images/pic3.jpg" width="250" height="120" @click="showModal()">  </div>
                    <div > <img src="../../../../src/assets/images/pic5.jpg" width="250" height="120" @click="showModal()">  </div>
                    <div > <img src="../../../../src/assets/images/pic6.jpg" width="250" height="120" @click="showModal()">  </div> 
                    <div > <img src="../../../../src/assets/images/pic7.jpg" width="250" height="120" @click="showModal()">  </div>
                    <div > <img src="../../../../src/assets/images/pic8.jpg" width="250" height="120" @click="showModal()">  </div>
                    <div > <img src="../../../../src/assets/images/pic9.jpg" width="250" height="120" @click="showModal()">  </div>
                    <div > <img src="../../../../src/assets/images/pic1.jpg" width="250" height="120" @click="showModal()">  </div>   
                 </div>
           </div>
           
           <div class="description-product"> <h4>Description</h4>
            
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            <!-- <textarea  id="description" v-model="description" placeholder="Product descrption"> </textarea>   -->
            
           </div>
           
    </div>
    <div>
        <!-- {{formValues.title}} {{formValues.reference}}{{formValues.category}} {{formValues.tax}}{{formValues.price}}  -->
        <button type="submit" class="btn btn-success" @click="showForm()">Add</button>
        <button type="button" class="btn btn-info">Preview</button>
    </div>
    <Modal   v-bind:isVisible="isVisible" v-bind:showModal="showModal" @selectedProduct="showImage($event)"/>
</template>





<script>


import { ref} from 'vue'
import Modal from './Modal.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadAdapter from '../../../plugins/UploadAdapter' 



//import UploadAdapter from './../plugins/UploadAdapter';   
//import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
export default {
    components:{
        Modal ,           
    },
    
    setup(){
        const description=ref('')
        const url=ref('')
        const imgFile=ref('')
        const isVisible=ref(false)
        const formValues=ref({
            title:'',
            reference:'',
            category:'',
            tax:'',
            price:'',
            
        })
        
        
        return {
            formValues,
            isVisible,
            imgFile,
            url,
            description
        }
        
    },
    
    data() {
       return {
            editor: ClassicEditor,
            editorData: '<p></p>',
            editorConfig: {
                  extraPlugins: [this.uploader],
               //The configuration of the editor.
                 toolbar: {
                 },

                 
                // ['bold', 'italic', '|', 'undo', 'redo', '|', 'numberedList', 'bulletedList'  ]
                 
                 /* {   
                    items: [
                        'heading', '|',
                        'fontfamily', 'fontsize', '|',
                        'alignment', '|',
                        'fontColor', 'fontBackgroundColor', '|',
                        'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                        'link', '|',
                        'outdent', 'indent', '|',
                        'bulletedList', 'numberedList', 'todoList', '|',
                        'code', 'codeBlock', '|',
                        'insertTable', '|',
                        'uploadImage', 'blockQuote', '|',
                        'undo', 'redo'
                    ],
                        shouldNotGroupWhenFull: true
                }   */
            },
        }
    }, 

    

    

      // this to test if i get info about product
    methods :{

        uploader(editor)
            {
                 editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                     return new UploadAdapter( loader );
                 };
            },
        showForm ()  {
            console.log(this.formValues.title); 
            console.log(this.formValues.reference);
            console.log(this.formValues.category); 
            console.log(this.formValues.tax);
            console.log(this.formValues.price);
        },
        showModal: function(){
            
            this.isVisible= !this.isVisible
        },
        showImage(imgFile){
            thisrl= "../../../../src/assets/images/" + imgFile 
            document.getElementById('myImage').src=this.url;
            
            console.log(imgFile)
            console.log(this.url)
        }
    }
}
        
    
        
       
        
</script>

<style>
.add-product {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 800px;
    /* align-items: flex-start; */
    margin: 30px 60px 200px 0;
    border-radius: 5px;
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
    background: aqua;
}

.add-product .image-product .images{
    display: flex;
    flex-wrap: wrap ;
    flex-direction: row;
    margin:20px;
    justify-content:  space-around;
    
    
}
.add-product .image-product .images img{
    border-radius: 8px;
}

.add-product .description-product {
    width: 100%;
    height: 600px;
    flex: 2 2 auto;
    margin-top: 30px;
    background: aquamarine;
}

.add-product .image-product .image-download{
    flex: 1;
    height: 200px;
    background: #FFFFFF;  
    margin: 20px 20px 20px 20px;
}

.add-product .image-product .images{
    flex: 1;
    height: 300px;
    /* background: rgb(0, 255, 85); */
    margin: 20px 0 20px 20px;
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