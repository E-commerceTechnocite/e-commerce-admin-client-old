<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UploadAdapter from './../plugins/UploadAdapter';

export default {
  name: 'CKEditor 5',
  data() {
      return {
          editor: ClassicEditor,
          editorData: '<p>Content of the editor.</p>',
          editorConfig: {
                    extraPlugins: [this.uploader],
                    toolbar: {
                        items: [
                            'bold',
                            'italic',
                            'link',
                            'uploadImage',
                            'undo',
                            'redo'
                        ]
                    }
                }
      };
  },
  props: {
    msg: String
  },
  methods: {
    uploader(editor)
    {
        editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
            return new UploadAdapter( loader );
        };
    },
  }
}
</script>