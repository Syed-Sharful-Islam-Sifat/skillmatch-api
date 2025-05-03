const pdfParse = require('pdf-parse');

 const extractTextFromPdf = async (buffer) => {
    const pdfData = await pdfParse(buffer);
    return pdfData.text;
}

module.exports = {
    extractTextFromPdf
}
