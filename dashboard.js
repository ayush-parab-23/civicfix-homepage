function openForm(){ document.getElementById("reportForm").style.display = "block"; }
function closeForm(){ document.getElementById("reportForm").style.display = "none"; }

document.getElementById("issueForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
  let res = await fetch("http://localhost:5000/report", {
    method: "POST",
    body: formData
  });
  alert(await res.text());
  closeForm();
});
