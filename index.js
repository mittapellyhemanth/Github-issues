let pageNo = 1;
const per_page = 5;
function getIssues(pageNo) {
    const pageHeading = document.getElementById('PageNo').innerText = `Page number ${pageNo}`
  const url = `https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=${per_page}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let orderlist = document.getElementById(`issues-list`);
      orderlist.innerText = "";
      data.forEach((issues ) => {
        const list = document.createElement("li");
        orderlist.appendChild(list).innerText = issues .title;
      })
    }).catch(err=>{
        console.log(err)
    })
}

getIssues(pageNo);

function prev() {
  if (pageNo === 1) {
    pageNo = 1;
  } else {
    pageNo--;
    return getIssues(pageNo);
  }
}
function next() {
  pageNo++;
  return getIssues(pageNo);
}
