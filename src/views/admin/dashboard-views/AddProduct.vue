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

            <div class="image-product"> 
                <DragAndDrop :multiple="true" :edit="false"/>
                <CarouselImage/>
            </div>

            <div class="description-product"> 
            <h4>Description</h4>
        </div>
    </div>
    <div>
        <button type="submit" class="btn btn-success" @click="showForm()">Add</button>
        <button type="button" class="btn btn-info">Preview</button>
    </div>
</template>

<script>
import { computed, ref} from 'vue'
import DragAndDrop from '../../../components/CrudProduct/DragAndDrop.vue'
import CarouselImage from '../../../components/CrudProduct/CarouselImage.vue'
import { useStore } from 'vuex'
export default {
    components: {
        DragAndDrop,
        CarouselImage
    },
    setup(){
        const store = useStore()
        const files = ref(store.getters['dashboard/GET_IMAGES'])
        const description=ref('')
        const url=ref('')
        const isVisible=ref(false)
        const formValues=ref({
            title:'',
            reference:'',
            category:'',
            tax:'',
            price:'',
        })
        
        return {
            files,
            formValues,
            isVisible,
            url,
            description
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
    max-width: 1200px;
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
    border-radius: 5px;
    flex: 0 0 455px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
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
    max-width: 650px;
    margin-left: 30px;
    /* background: aqua; */
}
.add-product .image-product .carousel {
    margin-top: 30px;
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
</style>