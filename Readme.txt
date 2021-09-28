Full Name: Sree Charan Damodara

Test:
- Tested in windows machine.
- Tested in latest versions on Chrome, Fireox, Edge.
- Tested Responsive and mobile views in chrome debugger tools.

Files:
index.html - Its a page with laoding screen. It redirects to blog.html.
index.js, index.css - supporting files for index.html page.

blog.html  - It is the default landing screen with a left nav and a details screen on the right.
              Left Nav - It an Add Button to add a new Post and a displays list of blog posts.
              Details view(right) - Displays the selected blog with edit & delete button.
                                    Delete button deletes the blog, while edit button takes
                                    us to edit.html page
blog.js, blog.css - supporting files for blog.html page.

edit.html  - It is the Edit View. It is also the Add view.Based on the button clicked, an Id is appened to URL and 
              Add/Edit view is loaded based on the id in url. It displays the edited blog post with cancel and submit
              button. Cancel button takes back to blog page and submit button saves the blog.
edit.js, edit.css - supporting files for edit.html page.


Note: 
Got Confused with the below comment
"Your work should be contained entirely in static web resource files - HTML, JavaScript, CSS, and images.".
I was under the impression, i should not use any libraries. Realized in the last min.
