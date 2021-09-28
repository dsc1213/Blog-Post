/* Name:  Sree Charan D */

/*
  In this Js file, we make an GET call and render in response in UI
*/

// Update UI in details section
const updateBlogDetails = (blogData) => {
  const { title, timestamp, text, id } = blogData;
  document.getElementById("blog-details-title").innerText = title;
  document.getElementById("blog-details-timestamp").innerText = `Date: ${
    new Date(timestamp).toISOString().split("T")[0]
  }`;
  document.getElementById("blog-details-text").innerText = text;
  document
    .getElementById("blog-edit")
    .setAttribute("href", `./edit.html?id=${id}`);
  document.getElementById("blog-id").value = id;
  // remove any styles with selected and update the selected style to the blog clicked
  const [element] = document.getElementsByClassName("selected");
  if (element && element.classList.contains("selected")) {
    element.classList.remove("selected");
  }
  document
    .getElementById(`blog-title-${blogData.id}`)
    .classList.add("selected");
};

// update UI in title section
const createList = (data) => {
  if (!data || data.length === 0) return;
  let ol = document.getElementById("blog-titles-list");
  data.forEach((d) => {
    let li = document.createElement("li");
    li.setAttribute("class", "blog-title");
    li.setAttribute("id", `blog-title-${d.id}`);
    li.appendChild(document.createTextNode(d.title));
    li.addEventListener("click", () => updateBlogDetails(d));
    ol.appendChild(li);
  });

  // update first data element as default selected
  updateBlogDetails(data[0]);
};

const getBlogDetails = async () => {
  let response;
  try {
    response = await fetch(
      "https://restedblog.herokuapp.com/sree/api/"
    ).then((res) => res.json());
    createList(response); // create list based on the response
  } catch (err) {
    console.error("Error in getBlogDetails", err);
  }
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const onDeletePost = async () => {
  const id = document.getElementById("blog-id").value;
  try {
    const url = `https://restedblog.herokuapp.com/sree/api/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
    }
    });

  const container = document.querySelector("#blog-titles-list");
  await removeAllChildNodes(container);
    await getBlogDetails()
  } catch (err) {
    console.error("Error in getBlogDetails", err);
  }
  console.log("delete", id);
};

// GET blog data API call
getBlogDetails();
