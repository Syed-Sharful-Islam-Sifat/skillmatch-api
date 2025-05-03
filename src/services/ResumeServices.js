const userRepository = require("../lib/repositories/userRepository");
const { uploadMedia } = require("./mediaServices");
const { extractTextFromPdf } = require("./PdfparseServices");
const axios = require("axios");
resumeUpload = async (file) => {


  const text = await extractTextFromPdf(file.buffer);
  console.log(text);

  const response = await axios.post("http://127.0.0.1:8000/resume-extractor", {
    text
  })

  const { data } = response;
  console.log({ file })
  const { skills } = data;
  const { url } = await uploadMedia({ mediaType: "PDF", buffer: file.buffer });
  console.log({ url })
  const userId = "680dea4bad292ab46937d9e3"
  console.log({ skills })
  const result = await userRepository.uploadResumeAndExtractSkills({ skills, url, userId })
  console.log({ data });
  // const options = {
  //   method: 'GET',
  //   url: 'https://jsearch.p.rapidapi.com/search',
  //   params: {
  //     query: 'Ruby on Rails PostgreSQL',
  //     page: '1',
  //     num_pages: '1',
  //     country: 'any',
  //     date_posted: 'all'
  //   },
  //   headers: {
  //     'x-rapidapi-key': '1ec88e57c9msh4e1dc7a91ced654p128a59jsna558fa47fe84', // Add your API key here
  //     'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  //   }
  // };



  //   const result = await axios.request(options);
  //   const {data:jobs} = result;
  //   return jobs.data;
  // extract skills from resume
  // save resume to database

  return result
}

module.exports = {
  resumeUpload
}

