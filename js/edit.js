/* Name:  Sree Charan D */
/*
  * In this Js file, we render Add/Edit Ui forms based on the url.
  * If id is available in url, make a GET call to fetch data and render Edit Form.
  * If no id is availabel render Add Form
*/

// update Ui page
const setValuesInEditForm = (data) => {
  const { title, text } = data;
  document.getElementById("title-input").setAttribute("value", title);
  document.getElementById("text-area").value = text;
};

// get BlogData by ID
const getBlogDetailsById = async (id) => {
    document.getElementById("blog-title").innerText = "Edit Post";
    let response;
    try {
      response = await fetch(`https://restedblog.herokuapp.com/sree/api/${id}`).then(res => res.json())
      setValuesInEditForm(response); // update Ui with values
    } catch (err) {
      console.error("Error in getBlogDetailsById", err);
    }
  }

// save on submit and display an error on failure
const submitFormData = async () => {
  const { search } = window.location;
  const id = search && search.split("=").pop();
  const title = document.getElementById("title-input").value;
  const text = document.getElementById("text-area").value;
  const data = {
    title, text
  };
  try {
    const url = `https://restedblog.herokuapp.com/sree/api/${id}`
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
    cancelForm(); // go back to blog page after save
  } catch (err) {
    console.error("Error in submitFormData", err);
    document.getElementById("error").innerText = '* Error while saving the post';
  }
};

// go back
const cancelForm = () => {
  window.location.href = "./blog.html";
};

// chek for ID and render Add/Edit page
const renderAddOrEditForm = () => {
  const { search } = window.location;
  const id = search && search.split("=").pop();
  if (id) getBlogDetailsById(id); // edit form
  else {
    // add form
    document.getElementById("blog-title").innerText = "Add Post";
  }
}


// based on id in URL render Add/Edit page
renderAddOrEditForm()