document.getElementById('processPDF').addEventListener('click', function() {
    const fileInput = document.getElementById('pdfFile');
    const pdfContent = document.getElementById('pdfContent');

    const file = fileInput.files[0];

    if (file) {
        // Processar o PDF usando pdf.js
        // Exibir o conteúdo na div 'pdfContent'
    } else {
        alert('Selecione um arquivo PDF primeiro.');
    }
});
