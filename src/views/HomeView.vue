<template>
  <div class="home">
    <Editor v-model="editorContent"></Editor>
    <button @click="generatePDF">Generar PDF</button>
  <!--   <button @click="saveContent">Guardar</button>
    <button @click="loadContent">Abrir</button> -->
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ref } from 'vue';


export default {
  components: {
    
  },
  setup() {
    const editorContent = ref('');

    /* const saveContent = async () => {
      try {
        await axios.post('/api/save', { content: editorContent.value });
        console.log('Contenido guardado en la base de datos');
      } catch (error) {
        console.error('Error al guardar el contenido', error);
      }
    };
 */
    /* const loadContent = async () => {
      try {
        const response = await axios.get('/api/load');
        editorContent.value = response.data.content;
        console.log('Contenido cargado desde la base de datos');
      } catch (error) {
        console.error('Error al cargar el contenido', error);
      }
    }; */
    const generatePDF = () => {
      const pdf = new jsPDF('p', 'pt', 'letter');
      const editorElement = document.querySelector('.p-editor-content');

      html2canvas(editorElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 40, 40, pdf.internal.pageSize.getWidth() - 80, 0);
        pdf.save('documento.pdf');
      });
    };

    return {
      editorContent,
      generatePDF
    };
  }
};
</script>
